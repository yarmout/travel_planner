import Image from 'next/image';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

export default function Featured() {
    return (
        <div className={"w-full h-64 relative overflow-hidden"}>
            <Link href={"/community/featured"}>
                <Image
                    className={"object-cover rounded-xl"}
                    src={"/featured.jpg"}
                    layout={"fill"}
                    alt={"Picture of Paris, leading to images trips page"}
                />
                <div className="absolute top-0 left-0 rounded w-auto p-4 bg-black bg-opacity-50">
                    <h2 className={`${lusitana.className} text-white text-lg md:text-2xl`}>Featured Trips</h2>
                </div>
            </Link>
        </div>
    );
}