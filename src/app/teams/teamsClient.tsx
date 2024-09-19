"use client";
import { useState } from "react";

import IndividualTeam from "@/app/components/IndividualTeam";
import IndividualRoster from "@/app/components/IndividualRoster";
import type { Team, Player } from "@/app/types";
// List container
export default function TeamsClient({arrayOfTeams} : {arrayOfTeams: Team[]}) {
    var [currentRoster, setCurrentRoster] = useState([] as Player[]);
    return ( 
    <div className="flex justify-center gap-x-3">
        <div className={``}>
            {arrayOfTeams.map(team => (
                <IndividualTeam team={team} key={team.id} onClick={() => setCurrentRoster(team.players)}/>
            ))}
        </div>
        <div className="bg-slate-500">
            {currentRoster.length != 0 && (<IndividualRoster roster={currentRoster} />)}
        </div> 
    </div>
    )
}