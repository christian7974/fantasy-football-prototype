"use client";

import { useContext, useState, useEffect } from "react";

// import type { Team } from "../types";

import { TeamsContext } from "../context/teamsContext";
import { IsCommishContext } from "../context/isCommishContext";
import { Team } from "../types";
import { all } from "axios";
import IndividualRoster from "../components/IndividualRoster";

// TODO: Create TeamInRankingsComponent for leaner code.
// TODO: Create better logic for error messages.
export default function PowerRankingsClient() {
    const {allTeams, setAllTeams} = useContext(TeamsContext);
    const {isCommish} = useContext(IsCommishContext);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [errorMessage, setErrorMessage] = useState('');

    const [rankInputs, setRankInputs] = useState(
        allTeams.reduce((acc, team) => {
            acc[team.id] = team.powerRankings.rank;
            return acc;
        }, {} as Record<number, number>)
    );

    const [descInputs, setDescInputs] = useState(
        allTeams.reduce((acc, team) => {
            acc[team.id] = team.powerRankings.reasonForRank;
            return acc;
        }, {} as Record<number, string>)
    );

    function handleDescChange(teamChanged: number, toWhatDesc: string) { 
        setDescInputs({
            ...descInputs,
            [teamChanged]: toWhatDesc
        });
    }

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
            setErrorMessage(`Your rankings must be unique; you are missing rank${difference.length > 1 ? "'s" : ""} ${difference.join(', ')}`);
            return false;
        } else if (setOfRankings.has(NaN)) {
            setErrorMessage(`There is a non-number in the rankings`);
            return false;
        }
        setErrorMessage(`Rankings Saved at ${currentTime.toLocaleTimeString()}`);
        return true;
    }

    function saveRankings() {
        if (!validateRankings()) {
            return;
        }
        const updatedTeams: Team[] = allTeams.map(team => ({
            ...team,
            powerRankings: {
                rank: rankInputs[team.id],
                reasonForRank: descInputs[team.id]
            }
        }));
        updatedTeams.sort((a, b) => a.powerRankings.rank - b.powerRankings.rank);
        setAllTeams(updatedTeams);
        setCurrentTime(new Date());
        console.log(updatedTeams);
    };
    
    const [currentTeam, setCurrentTeam] = useState(allTeams[0]);

    allTeams.sort((a, b) => a.powerRankings.rank - b.powerRankings.rank);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            {isCommish && (
                <>
                    <button onClick={saveRankings}>Save Rankings</button>
                </>)
            }
            <div className={`${errorMessage[0] === "R" ? "bg-green-500" : "bg-red-500"} w-fit px-2`}>
                <p>{errorMessage}</p>
            </div>
            <div className="flex flex-row">
                <IndividualRoster roster={currentTeam.players} />
                <div className="flex flex-col gap-3">
                    {allTeams.map((team: Team) => (
                        <div key={team.id} className="bg-blue-900 rounded-md flex flex-col items-center py-2 px-3">
                            <h1 
                                key={team.id} 
                                onClick={() => setCurrentTeam(team)}
                                className="hover:cursor-pointer hover:text-red-400">{team.name}</h1>
                            <input 
                                type="number" 
                                className="text-black mb-2" 
                                min={1} 
                                value={rankInputs[team.id]} 
                                max={allTeams.length} 
                                onChange={(e) => handleRankChange(team.id, e.target.value)}>
                            </input>
                            <textarea 
                                className="text-black min-h-7 max-h-28 min-w-96" 
                                value={descInputs[team.id]} 
                                onChange={(e) => handleDescChange(team.id, e.target.value)}
                                maxLength={250}
                                >
                            </textarea>
                        </div>
                    ))}
                </div>
            </div>            
        </div>
    )
};