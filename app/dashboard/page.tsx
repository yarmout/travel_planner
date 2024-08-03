import { lusitana } from '@/app/ui/fonts';
import Featured from '@/app/ui/dashboard/featured'
import { fetchMyTrips } from "@/app/lib/data";
import MyTrips from "@/app/ui/dashboard/my-trips";

export default async function Page() {
    const latestTrips = await fetchMyTrips();

    return (
        <main>
            <div>
                <Featured />
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                {/* TODO: Add 'My Trips' and 'Recent Activity' */}
                <MyTrips myTrips={latestTrips} />
            </div>
        </main>
    );
}