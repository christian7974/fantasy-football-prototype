import Link from 'next/link';
import PowerRankingsClient from "./powerRankingsClient";
import getData from "@/app/utils/getData";

export default async function PowerRankings() {
    const { leagueName, teamsArray, isCommissioner } = await getData();
    console.log(isCommissioner);
    return (
        <div className="px-3">
            <Link href="/teams">View Teams</Link> 
            <h1>Power Rankings</h1>
            <PowerRankingsClient arrayOfTeams={teamsArray} isCommissioner={isCommissioner}/>
        </div>
    )
}