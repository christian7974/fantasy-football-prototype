"use client";

import { useContext, useState } from "react";

// import type { Team } from "../types";

import { TeamsContext } from "../context/teamsContext";
import { IsCommishContext } from "../context/isCommishContext";


export default function PowerRankingsClient() {
    const {allTeams, setAllTeams} = useContext(TeamsContext);
    const {isCommish} = useContext(IsCommishContext);

    function handleRankChange(teamChanged: number, toWhatRank: string) {
        console.log(`Team ${teamChanged} to rank ${toWhatRank}`);
        const teamToChange = allTeams.find(team => team.id === teamChanged);
        if (teamToChange) {
            teamToChange.powerRankingsRank = toWhatRank as unknown as number;
        }
    }

    function handleReorder() {
        const updatedTeams = [...allTeams];
        updatedTeams.sort((a, b) => a.powerRankingsRank - b.powerRankingsRank);
        setAllTeams(updatedTeams);
    }

    function verifyRankings() {
        
    }
    
    allTeams.sort((a, b) => a.powerRankingsRank - b.powerRankingsRank)
    return (
        <>
            <div>
                {allTeams.map((team, idx) => (
                    <div key={team.id}>
                        {/* <h1>Rank {idx + 1}</h1> */}
                        <h1 key={team.id}>{team.name}</h1>
                        <input type="number" className="text-black" min={1} max={allTeams.length} onChange={(e) => handleRankChange(team.id, e.target.value)}></input>
                    </div>
                ))}
            </div>
            {isCommish && (
                <>
                    <h1>This guy can change the power rankings</h1>
                    <button onClick={handleReorder}>Reorder</button>
                </>)}
            
        </>
    )
};