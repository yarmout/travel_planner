import {sql} from '@vercel/postgres';
import {MyTrip} from './definitions';

//TODO: Add filter for the current logged in user
//TODO: Ensure date filter is correct
//TODO: Only show current or future trips, don't show past trips
export async function fetchMyTrips() {
    try {
        const data = await sql<MyTrip>`
      SELECT id, name, start_date, end_date
      FROM trips
      ORDER BY start_date ASC
      LIMIT 5`;

    return data.rows;

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch latest trips.');
    }
}