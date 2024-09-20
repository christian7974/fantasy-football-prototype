import Link from 'next/link';
import PowerRankingsClient from "./powerRankingsClient";
export default function PowerRankings() {
    return (
        <div>
            <Link href="/teams">View Teams</Link> 
            <h1>Power Rankings</h1>
            <PowerRankingsClient isCommish={true} allTeams={[]} />
        </div>
    )
}