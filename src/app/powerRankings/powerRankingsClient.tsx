"use client";

import { useContext, useState } from "react";

// import type { Team } from "../types";

import { TeamsContext } from "../context/teamsContext";
import { IsCommishContext } from "../context/isCommishContext";

export default function PowerRankingsClient() {
    const {allTeams, setAllTeams} = useContext(TeamsContext);
    const {isCommish} = useContext(IsCommishContext);

    const [errorMessage, setErrorMessage] = useState('');

    const [rankInputs, setRankInputs] = useState(
        allTeams.reduce((acc, team) => {
            acc[team.id] = team.powerRankingsRank;
            return acc;
        }, {} as Record<number, number>)
    );

    function handleRankChange(teamChanged: number, toWhatRank: string) {
        if (toWhatRank != "NaN") {
            const parsedRank = parseInt(toWhatRank);
            if (parsedRank < 1 || parsedRank > allTeams.length) {
                setErrorMessage(`Rankings must be between 1 and ${allTeams.length}`);
                return;
            }
            setRankInputs({
                ...rankInputs,
                [teamChanged]: parsedRank
            });
        }

    };


    function validateRankings() {
        const setOfRankings = new Set(Object.values(rankInputs));
        const validRankings = new Set(Array.from({length: allTeams.length}, (_, i) => i + 1));
        if (setOfRankings.size < allTeams.length) {
            const difference = Array.from(validRankings).filter(x => !setOfRankings.has(x));
            setErrorMessage(`Rankings must be unique; you are missing ranking${difference.length > 1 ? "'s" : ""} ${difference.join(', ')}`);
            return false;
        } else if (setOfRankings.has(NaN)) {
            setErrorMessage(`There is a non-number in the rankings`);
            return false;
        }
        setErrorMessage('');
        return true;
    }

    function handleReorder() {
        if (!validateRankings()) {
            return;
        }
        const updatedTeams = allTeams.map(team => ({
            ...team,
            powerRankingsRank: rankInputs[team.id],
        }));
        updatedTeams.sort((a, b) => a.powerRankingsRank - b.powerRankingsRank);
        setAllTeams(updatedTeams);
        };
    
    allTeams.sort((a, b) => a.powerRankingsRank - b.powerRankingsRank);
    return (
        <>
            <div className="">
                {allTeams.map((team, idx) => (
                    <div key={team.id}>
                        <div>
                            <h1 key={team.id}>{team.name}</h1>
                            <input type="number" className="text-black" min={1} value={rankInputs[team.id]} max={allTeams.length} onChange={(e) => handleRankChange(team.id, e.target.value)}></input>
                        </div>
                        <input type="text" className="text-black"></input>
                    </div>
                ))}
            </div>
            <div className="bg-red-500 w-fit px-2">
                <p>{errorMessage}</p>
            </div>
            {isCommish && (
                <>
                    <button onClick={handleReorder}>Reorder</button>
                </>)
            }
            
        </>
    )
};