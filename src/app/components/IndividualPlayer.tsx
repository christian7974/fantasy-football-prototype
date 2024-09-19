"use client";

import { useState } from "react";

import { Player } from "../types";

import { getDefensePhoto, getPosition } from "../utils/individualPlayerUtils";

export default function IndividualPlayer({player, idx}: {player: Player, idx: number}) { 
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const evenPlayerIndex = idx % 2 === 0;
    const playerImage = player.positionId != 16 ? 
    `https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/${player.id}.png` 
    : `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${getDefensePhoto(player.name.split(" ")[0])}.png`;
    
    const placeholderImage = "https://a.espncdn.com/combiner/i?img=/games/lm-static/ffl/images/nomug.png&w=96&h=70&cb=1";
    return (
    <div className={`text-center flex w-full text-black items-center ${evenPlayerIndex ? "bg-slate-100" : "bg-slate-300"}`}>
        <div className="flex-shrink-0 w-20 h-18 flex items-center justify-center">
            <img 
            src={isImageLoaded ? playerImage : placeholderImage} 
            className={`${player.positionId != 16 ? "w-20" : "w-16"}`}
            onLoad={() => setIsImageLoaded(true)}
            />
        </div>
        <div id="player-info" className="w-[70%]">
            <p className="w-fit">{player.name}</p>
            <div className="flex">
                <p className="mr-3">{getPosition(player.positionId)}</p> 
                {player.injuryStatus != "N/A" && <p className="">{player.injuryStatus}</p>}
            </div>
        </div>
    </div>
    )

}