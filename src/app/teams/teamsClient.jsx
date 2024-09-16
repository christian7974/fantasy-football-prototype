"use client";

export default function TeamsClient({arrayOfTeams}) {
    console.log("The amount of teams is " + arrayOfTeams.length);
    return ( <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        client
        {arrayOfTeams.map(team => (
            <>
            <img className="h-10 w-10 rounded-full" src={team.logo}></img>
            <h1 key={team.id}>{team.name}</h1>
            </>
        ))}
      </div>)
}