"use client";

import { useState } from "react";

import { Player } from "../types";

import { getDefensePhoto, getPosition } from "../utils/individualPlayerUtils";

export default function IndividualPlayer({player}: {player: Player}) { 
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const playerImage = player.positionId != 16 ? 
        `https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/${player.id}.png` 
        : `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${getDefensePhoto(player.name.split(" ")[0])}.png`;

    const placeholderImage = "https://a.espncdn.com/combiner/i?img=/games/lm-static/ffl/images/nomug.png&w=96&h=70&cb=1";
    return (
        <div className="bg-green-300 text-center flex text-black">
            <img 
                src={isImageLoaded ? playerImage : placeholderImage} 
                className="h-20"
                onLoad={() => setIsImageLoaded(true)}
            />
            <h1 className="">{player.name}</h1>
            {player.injuryStatus != "N/A" && <h1 className="">{player.injuryStatus}</h1>}
            <h1>{getPosition(player.positionId)}</h1>
        </div>
    )

}