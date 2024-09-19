"use client";
import { useState } from "react";

import IndividualTeam from "@/app/components/IndividualTeam";
import IndividualRoster from "@/app/components/IndividualRoster";
import type { Team, Player } from "@/app/types";
// List container
export default function TeamsClient({arrayOfTeams} : {arrayOfTeams: Team[]}) {
    const [currentTeam, setCurrentTeam] = useState({} as Team);
    return ( 
    <div className="flex justify-center gap-x-3">
        <div className={``}>
            {arrayOfTeams.map(team => (
                <IndividualTeam team={team} key={team.id} onClick={() => setCurrentTeam(team)}/>
            ))}
        </div>
        <div className="bg-slate-500">
            {currentTeam.players && (<IndividualRoster roster={currentTeam.players} />)}
        </div> 
    </div>
    )
}