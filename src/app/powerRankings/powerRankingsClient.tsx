"use client";

import React, { useContext, useState } from 'react';
import { TeamsContext } from '../context/teamsContext';
import { IsCommishContext } from '../context/isCommishContext';

export default function PowerRankingsClient() {
    const { allTeams, setAllTeams } = useContext(TeamsContext);
    const { isCommish } = useContext(IsCommishContext);

    // State to store the input values for each team's rank
    const [rankInputs, setRankInputs] = useState(
    allTeams.reduce((acc, team) => {
        acc[team.id] = team.powerRankingsRank;
        return acc;
    }, {} as Record<number, number>)
    );

    // Handle input change
    function handleRankChange(teamId: number, newRank: string) {
        const parsedRank = parseInt(newRank);
        setRankInputs({
            ...rankInputs,
            [teamId]: isNaN(parsedRank) ? 0 : parsedRank, // Handle NaN case
        });
    };

    function validateRankings() {
        // check that every team has a unique rank between 1 and allTeams.length
        const ranks = Object.values(rankInputs);
        if (0 in ranks) {
            return false;
        }
        if (new Set(ranks).size !== ranks.length) {
            return false;
        }
    }

    // Handle reorder button click
    function handleReorder() {
    const updatedTeams = allTeams.map(team => ({
        ...team,
        powerRankingsRank: rankInputs[team.id],
    }));
    !validateRankings() && alert('Invalid rankings');
    updatedTeams.sort((a, b) => a.powerRankingsRank - b.powerRankingsRank);
    setAllTeams(updatedTeams);
    };

    

  allTeams.sort((a, b) => a.powerRankingsRank - b.powerRankingsRank);

  return (
    <>
      <div>
        {allTeams.map((team, idx) => (
          <div key={team.id}>
            <h1>Rank {idx + 1} {team.name} {team.powerRankingsRank}</h1>
            <input
              type="number"
              className="text-black"
              min={1}
              max={allTeams.length}
              value={rankInputs[team.id]} // Set default value
              onChange={(e) => handleRankChange(team.id, e.target.value)}
            />
          </div>
        ))}
      </div>
      {isCommish && (
        <>
          <h1>This guy can change the power rankings</h1>
          <button onClick={handleReorder}>Reorder Teams</button>
        </>
      )}
    </>
  );
};
