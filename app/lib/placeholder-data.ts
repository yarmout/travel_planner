const users = [
    {
        id: '410544b2-4001-4271-9855-fec4b6a6442a',
        name: 'User',
        email: 'user@nextmail.com',
        password: '123456',
    },
];

const trips = [
    {
        id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
        user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
        name: 'Summer Vacation in Europe',
        description: 'A 10-day trip to Europe covering France, Italy, and Spain.',
        start_date: '2024-06-01',
        end_date: '2024-06-10',
        duration: 10,  // Duration of the trip in days
        destinations: [
            { city: 'Paris', country: 'France', dates: ['2024-06-01', '2024-06-03'] },
            { city: 'Rome', country: 'Italy', dates: ['2024-06-04', '2024-06-07'] },
            { city: 'Barcelona', country: 'Spain', dates: ['2024-06-08', '2024-06-10'] },
        ],
        activities: [
            { date: '2024-06-02', activity: 'Visit the Louvre Museum' },
            { date: '2024-06-05', activity: 'Tour the Colosseum' },
            { date: '2024-06-09', activity: 'Explore Park Güell' },
        ],
        budget: 2000,  // Estimated budget for the trip
        user_rating: 4.5,  // Average user rating out of 5
        shared: true,  // Indicates if the itinerary is shared in the community
        featured: false,  // Indicates if the itinerary is featured
    },
    {
        id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
        user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
        name: 'Business Trip to NYC',
        description: 'A 5-day business trip to New York City with meetings and sightseeing.',
        start_date: '2024-07-15',
        end_date: '2024-07-19',
        duration: 5,  // Duration of the trip in days
        destinations: [
            { city: 'New York', country: 'USA', dates: ['2024-07-15', '2024-07-19'] },
        ],
        activities: [
            { date: '2024-07-16', activity: 'Attend business conference' },
            { date: '2024-07-18', activity: 'Dinner with clients' },
        ],
        budget: 1500,  // Estimated budget for the trip
        user_rating: null,  // Rating not available for non-shared itineraries
        shared: false,  // Indicates that the itinerary is not shared in the community
        featured: false,  // Indicates if the itinerary is featured
    },
    {
        id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
        user_id: '410544b2-4001-4271-9855-fec4b6a6442a', // Developer-created itinerary
        name: 'Ultimate Adventure in Japan',
        description: 'Explore Japan with a thrilling itinerary including Tokyo, Kyoto, and Mount Fuji.',
        start_date: '2024-08-01',
        end_date: '2024-08-10',
        duration: 10,  // Duration of the trip in days
        destinations: [
            { city: 'Tokyo', country: 'Japan', dates: ['2024-08-01', '2024-08-03'] },
            { city: 'Kyoto', country: 'Japan', dates: ['2024-08-04', '2024-08-06'] },
            { city: 'Mount Fuji', country: 'Japan', dates: ['2024-08-07', '2024-08-10'] },
        ],
        activities: [
            { date: '2024-08-02', activity: 'Visit the Tokyo Tower' },
            { date: '2024-08-05', activity: 'Explore Fushimi Inari Shrine' },
            { date: '2024-08-08', activity: 'Climb Mount Fuji' },
        ],
        budget: 2500,  // Estimated budget for the trip
        user_rating: 4.8,  // Average user rating out of 5
        shared: true,  // Indicates if the itinerary is shared in the community
        featured: true,  // Indicates if the itinerary is featured
    },
    // Add more itineraries as needed
];

export { users, trips };
