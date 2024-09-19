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
        <div className={`text-center flex text-black h-[50px] ${evenPlayerIndex ? "bg-slate-100" : "bg-slate-200"}`}>
            <div className="w-[20%]">
                <img 
                    src={isImageLoaded ? playerImage : placeholderImage} 
                    className="h-12"
                    onLoad={() => setIsImageLoaded(true)}
                />
            </div>
            <div id="player-info" className="flex flex-col">
                <p className="w-fit">{player.name}</p>
                <div className="flex">
                    <p className="mr-3">{getPosition(player.positionId)}</p> 
                    {player.injuryStatus != "N/A" && <p className="">{player.injuryStatus}</p>}
                </div>
            </div>
        </div>
    )

}