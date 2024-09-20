import type { Team } from "../types";

export default function PowerRankingsClient({isCommish, allTeams} : {isCommish: boolean, allTeams: Team[]}) {
    allTeams.sort((a, b) => (a.powerRankingsRank - b.powerRankingsRank))
    return (
        <>
            <div>
                {allTeams.map(team => (
                    <h1 key={team.id}>{team.name} {team.powerRankingsRank}</h1>
                ))}
            </div>
            {isCommish && <h1>This guy can change the power rankings</h1>}
        </>
    )
};