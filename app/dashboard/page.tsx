import Featured from '@/app/ui/dashboard/featured'
import { lusitana } from '@/app/ui/fonts';

export default async function Page() {
    return (
        <main>
            <div>
                <Featured />
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                {/* TODO: Add 'My Trips' and 'Recent Activity' */}
            </div>
        </main>
    );
}