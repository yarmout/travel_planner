import { Card } from '@/app/ui/dashboard/cards';
import { lusitana } from '@/app/ui/fonts';

export default async function Page() {
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Featured Trips
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card location="Paris" link="/placeholder" />
                <Card location="Rome" link="/placeholder" />
                <Card location="Paris" link="/placeholder" />
                <Card location="Paris" link="/placeholder" />
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                {/* TODO: Add 'My Trips' and 'Recent Activity' */}
            </div>
        </main>
    );
}