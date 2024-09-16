"use client";

import {useState} from "react";

import type { Team, Player } from "@/app/types";

type IndividualTeamProps = {
    team: Team;
    onClick: (players: Player[]) => void;
  };

export default function IndividualTeam({team, onClick}: IndividualTeamProps) { 
    return (
        <div key={team.id} className="bg-red-900 py-2 px-2 flex items-center" onClick={() => onClick(team.players)}>
            <img className="size-14 rounded-full mr-4 bg-white" src={team.logo}></img>
            <div>
                <h1 className="float-right">{team.name}</h1>
                <h1>({team.wins}-{team.losses})</h1>
            </div>
        </div>
    )
}