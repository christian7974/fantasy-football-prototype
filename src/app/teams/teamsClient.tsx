"use client";
import { useState } from "react";

import IndividualTeam from "@/app/components/IndividualTeam";
import IndividualRoster from "@/app/components/IndividualRoster";
import type { Team } from "@/app/types";
// List container
export default function TeamsClient({arrayOfTeams} : {arrayOfTeams: Team[]}) {
    var [currentRoster, setCurrentRoster] = useState(arrayOfTeams[0].players);
    return ( 
    <>
        <div className="grid grid-cols-1 gap-y-3 w-fit mr-3">
            {arrayOfTeams.map(team => (
                <IndividualTeam team={team} key={team.id} onClick={() => setCurrentRoster(team.players)}/>
            ))}
        </div>
        <IndividualRoster roster={currentRoster} />
    </>
    
    )
}