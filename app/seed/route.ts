import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { itineraries, users } from '../lib/placeholder-data';

// @ts-ignore
const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedItineraries() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS itineraries (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id UUID NOT NULL,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      start_date DATE NOT NULL,
      end_date DATE NOT NULL,
      duration INT NOT NULL,
      budget INT NOT NULL,
      user_rating FLOAT,
      shared BOOLEAN NOT NULL,
      featured BOOLEAN NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `;

    const insertedItineraries = await Promise.all(
        itineraries.map(
            (itinerary) => client.sql`
        INSERT INTO itineraries (id, user_id, name, description, start_date, end_date, duration, budget, user_rating, shared, featured)
        VALUES (
          ${itinerary.id}, 
          ${itinerary.user_id}, 
          ${itinerary.name}, 
          ${itinerary.description}, 
          ${itinerary.start_date}, 
          ${itinerary.end_date}, 
          ${itinerary.duration}, 
          ${itinerary.budget}, 
          ${itinerary.user_rating}, 
          ${itinerary.shared}, 
          ${itinerary.featured}
        )
        ON CONFLICT (id) DO NOTHING;
      `,
        ),
    );

    return insertedItineraries;
}


export async function GET() {
    try {
      await client.sql`BEGIN`;
      await seedUsers();
      await seedItineraries();
      await client.sql`COMMIT`;

      return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
      await client.sql`ROLLBACK`;
      return Response.json({ error }, { status: 500 });
    }
}
