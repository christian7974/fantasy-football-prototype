import type { Player } from "@/app/types";

import { getLineupPosition } from "../utils/individualPlayerUtils";
import IndividualPlayer from "./IndividualPlayer";

export default function IndividualRoster({roster}: {roster: Player[]}) { 
    roster.sort((a, b) => a.positionInLineup - b.positionInLineup);
    return (
    <div className="w-[350px]">
        {roster.map((player, idx) => (
            <div className="">
                <h1 className="bg-purple-300 w-fit">{getLineupPosition(player.positionInLineup)}</h1>
                <IndividualPlayer player={player} key={player.id} idx={idx} />
            </div>
        ))}
        
    </div>)
};