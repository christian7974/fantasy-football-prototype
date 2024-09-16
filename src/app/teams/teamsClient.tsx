"use client";

import IndividualTeam from "@/app/components/IndividualTeam";

import type { Team } from "@/app/types";
// List container
export default function TeamsClient({arrayOfTeams} : {arrayOfTeams: Team[]}) {
    return ( 
    <div className={`grid grid-cols-1 grid-rows-[${arrayOfTeams.length}] gap-y-3 w-fit`}>
        {arrayOfTeams.map(team => (
            <IndividualTeam team={team} key={team.id}/>
        ))}
    </div>)
}