"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

import IndividualTeam from "@/app/components/IndividualTeam";
import IndividualRoster from "@/app/components/IndividualRoster";
import type { Team } from "@/app/types";
import {useContext} from "react";
import { TeamsContext } from "../context/teamsContext";
import { IsCommishContext } from "../context/isCommishContext";

// List container
export default function TeamsClient({arrayOfTeams, isCommissioner} : {arrayOfTeams: Team[], isCommissioner: boolean}) {
    const {allTeams, setAllTeams} = useContext(TeamsContext);
    const {isCommish, setIsCommish} = useContext(IsCommishContext);
    useEffect(() => {
        setAllTeams(arrayOfTeams);
    }, [setAllTeams]);
    
    useEffect(() => {
        setIsCommish(isCommissioner);
    }, [setIsCommish])

    const [currentTeam, setCurrentTeam] = useState({} as Team);
    return ( 
    <div className="flex flex-col md:flex-row justify-center gap-x-3">
        <Link href="/powerRankings">View Power Rankings</Link>
        <div className={``}>
            {allTeams.map(team => (
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