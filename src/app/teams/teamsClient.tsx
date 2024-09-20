"use client";
import { useState } from "react";

import IndividualTeam from "@/app/components/IndividualTeam";
import IndividualRoster from "@/app/components/IndividualRoster";
import type { Team } from "@/app/types";
// List container
export default function TeamsClient({arrayOfTeams, isCommish} : {arrayOfTeams: Team[], isCommish: boolean}) {
    
    const [currentTeam, setCurrentTeam] = useState({} as Team);
    return ( 
    <div className="flex flex-col md:flex-row justify-center gap-x-3">
        <div className={``}>
            {arrayOfTeams.map(team => (
                <IndividualTeam team={team} key={team.id} onClick={() => setCurrentTeam(team)}/>
            ))}
        </div>
        <div>
            {currentTeam.name && <h1 className="text-3xl text-center">{currentTeam.name}</h1>}
            {currentTeam.players && (<IndividualRoster roster={currentTeam.players} />)}
        </div>
    </div>
    )
}