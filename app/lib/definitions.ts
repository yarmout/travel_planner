export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
};

export type MyTrip = {
    id: string;
    user_id: string;
    name: string;
    start_date: string;
    end_date: string;
};