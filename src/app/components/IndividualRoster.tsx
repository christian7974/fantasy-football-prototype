import type { Player } from "@/app/types";

export default function IndividualRoster({roster}: {roster: Player[]}) { 
    return (
    <div className="bg-green-300">
        {roster.map(player => (
            <h1 className="text-black">{player.name}</h1>
        ))}
    </div>)
};