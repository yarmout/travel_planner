import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';

export function Card({
                         location,
                         link,
                     }: {
    location: string;
    link: string;
}) {
    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
            <p className={"truncate rounded-xl"} >
                <Link href={`${link}`}>
                    {/* TODO: Overlay text onto image cards */}
                    <Image
                        src={`/dashboard/featured/${location}.jpg`}
                        width={512}
                        height={512}
                        alt={`Thumbnail of featured location, ${location}`}
                    />
                </Link>
            </p>
        </div>
    );
}