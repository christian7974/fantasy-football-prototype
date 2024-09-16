import type { Team } from "@/app/types";

export default function IndividualTeam({team}: {team: Team}) {

    return (
        <div key={team.id} className="bg-red-900 py-2 px-2 flex items-center">
            <img className="size-14 rounded-full mr-4 bg-white" src={team.logo}></img>
            <div>
                <h1 className="float-right">{team.name}</h1>
                <h1>({team.wins}-{team.losses})</h1>
            </div>
        </div>
    )
}