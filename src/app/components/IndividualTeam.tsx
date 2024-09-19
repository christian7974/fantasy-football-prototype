"use client";

import type { Team, Player } from "@/app/types";

type IndividualTeamProps = {
    team: Team;
    onClick: (players: Player[]) => void;
  };

export default function IndividualTeam({team, onClick}: IndividualTeamProps) { 
    const hoverClasses = "hover:bg-red-600 hover:cursor-pointer active:bg-blue-400";
    const activeClasses = "active:bg-blue-400";
    return (
        <div key={team.id} className={`bg-red-900 py-1 px-1 mb-2 flex items-center rounded-md ${hoverClasses} ${activeClasses}`} onClick={() => onClick(team.players)}>
            <img className="size-14 rounded-full mr-4 bg-white" src={team.logo}></img>
            <div>
                <h1 className="float-right">{team.name}</h1>
                <h1>({team.wins}-{team.losses})</h1>
            </div>
        </div>
    )
}