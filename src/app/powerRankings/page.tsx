import Link from 'next/link';
import PowerRankingsClient from "./powerRankingsClient";
export default function PowerRankings() {
    return (
        <div className="px-3">
            <Link href="/teams">View Teams</Link> 
            <h1>Power Rankings</h1>
            <PowerRankingsClient />
        </div>
    )
}