import { lusitana } from '@/app/ui/fonts';
import { MyTrip } from "@/app/lib/definitions";
import clsx from "clsx";

//TODO: Rename MyTrips to UpcomingTrips?
export default async function MyTrips({ myTrips }: { myTrips: MyTrip[] }) {
    return (
        <div className="flex w-full flex-col md:col-span-4">
            <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                My Trips
            </h2>
            <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
                <div className="bg-white px-6">
                    {myTrips.map((trip, i) => {
                        return (
                            <div
                                key={trip.id}
                                className={clsx(
                                    'flex flex-row items-center justify-between py-4',
                                    {
                                        'border-t': i !== 0,
                                    },
                                )}
                            >
                                <div className="flex items-center">
                                    {/*TODO: Iamge of city here*/}
                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-semibold md:text-base">
                                            {trip.name}
                                        </p>
                                        <p className="hidden text-sm text-gray-500 sm:block">
                                            {/*TODO: Cities of trip here*/}
                                            Placeholder: Paris
                                        </p>
                                    </div>
                                </div>

                                <p
                                    className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                                >
                                    {/*TODO: Dates of trip here*/}
                                    Placeholder: 10/01/2024 - 10/08/2024
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}