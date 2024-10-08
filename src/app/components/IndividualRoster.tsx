import type { Player } from "@/app/types";

import { getLineupPosition } from "../utils/individualPlayerUtils";
import IndividualPlayer from "./IndividualPlayer";

export default function IndividualRoster({roster}: {roster: Player[]}) { 
    roster.sort((a, b) => a.positionInLineup - b.positionInLineup);
    return (
        <div className="">
          {roster.map((player, idx) => (
            <div className="flex" key={player.id}>
              <IndividualPlayer player={player} idx={idx} />
            </div>
          ))}
        </div>
      );
};