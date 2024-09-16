"use client";

import { Player } from "../types";

import { getDefensePhoto, getPosition } from "../utils/individualPlayerUtils";

export default function IndividualPlayer({player}: {player: Player}) { 
    const playerImage = player.positionId != 16 
        ? `https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/${player.id}.png` : 
        `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${getDefensePhoto(player.name.split(" ")[0])}.png`;
    return (
        <div className="bg-green-300 text-center flex text-black">
            <img src={playerImage} className="h-20"></img>
            <h1 className="">{player.name}</h1>
            {player.injuryStatus != "N/A" && <h1 className="">{player.injuryStatus}</h1>}
            <h1>{getPosition(player.positionId)}</h1>
        </div>
    )

}