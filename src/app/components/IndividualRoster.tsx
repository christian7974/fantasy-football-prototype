import type { Player } from "@/app/types";

import IndividualPlayer from "./IndividualPlayer";

export default function IndividualRoster({roster}: {roster: Player[]}) { 
    roster.sort((a, b) => a.positionInLineup - b.positionInLineup);
    return (
    <div className="bg-green-300 w-fit text-center">
        {roster.map(player => (
            <IndividualPlayer player={player} key={player.id} />
        ))}
    </div>)
};