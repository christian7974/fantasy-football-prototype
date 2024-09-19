"use client";
import { useState } from "react";

import { Player } from "../types";

import { getDefensePhoto, getProPosition, getLineupPosition, getPlayersProTeam } from "../utils/individualPlayerUtils";

export default function IndividualPlayer({player, idx}: {player: Player, idx: number}) { 
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const playerImage = player.positionId != 16 ? 
    `https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/${player.id}.png` 
    : `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${getDefensePhoto(player.name.split(" ")[0])}.png`;
    
    const placeholderImage = "https://a.espncdn.com/combiner/i?img=/games/lm-static/ffl/images/nomug.png&w=96&h=70&cb=1";
    return (
    <div className={`pl-1 text-center flex w-[350px] text-black items-center ${idx % 2 === 0 ? "bg-slate-100" : "bg-slate-300"}`}>
        <p className="w-[80px] text-left">{getLineupPosition(player.positionInLineup)}</p>
        <div className="flex-shrink-0 w-20 h-18 flex items-center justify-center">
            <img 
            src={isImageLoaded ? playerImage : placeholderImage} 
            className={`${player.positionId != 16 ? "w-20" : "w-16"}`}
            onLoad={() => setIsImageLoaded(true)}
            />
        </div>
        <div id="player-info" className="w-[70%]">
        <div className="flex">
            <p className="w-fit">{player.name}</p>
            {player.injuryStatus != "N/A" && <p className={`${player.injuryStatus != "Active" && "text-red-500"} ml-2`}>{player.injuryStatus != "Active" && player.injuryStatus}</p>}
        </div>
        <div className="flex">
            <p className="mr-2"> {getPlayersProTeam(player.proTeam)}</p> 
            <p className="font-bold">{getProPosition(player.positionId)}</p>
        </div>
        </div>
    </div>
    )

}