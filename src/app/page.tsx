import axios from "axios";

type Team = {
  logo: string;
  id: number;
  name: string;
};

export default function Home() {
  axios.defaults.withCredentials = true;
  const leagueId = process.env.LEAGUE_ID;
  const year = String(2024);

  const getTeamsRosterURL = "https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/" + year + "/segments/0/leagues/" + leagueId + "?view=mRoster";
  const getAllTeamsURL = "https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/" + year + "/segments/0/leagues/" + leagueId + "?view=mTeam"

  const cookies = `swid={${process.env.SWID}}; espn_s2=${process.env.ESPN_S2}`;

  const headers = {
    'Cookie': cookies
  }
  var teamsArray: Team[] = []
  axios.get(getAllTeamsURL, { headers }).then((response) => { 
    // console.log("numTeams in league is " + response.data.teams.length);
    for (var i = 0; i < response.data.teams.length; i++) { 
      teamsArray.push({
        "logo": response.data.teams[i].logo,
        "id": response.data.teams[i].id,
        name: response.data.teams[i].name
      })
    }
  });
  
  axios.get(getTeamsRosterURL, { headers }).then((response) => {
    const results = response.data;
    const idsArray = teamsArray.map(team => team.id);
    idsArray.forEach(id => {
      const individualTeam = results.teams.find((team: { id: number; }) => team.id === id);
      // console.log(individualTeam.roster.entries[2].playerPoolEntry.player.fullName); -> individual player name
      // console.log(individualTeam.roster.entries.length); -> number of players on team
      const teamRoster = individualTeam.roster.entries;
      // console.log(teamRoster);
      teamRoster.forEach((roster: { playerPoolEntry: { player: { fullName: string; id: string; }; }; }) => {
        console.log(roster.playerPoolEntry.player.fullName + " " + roster.playerPoolEntry.player.id);
      })
    });

  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
    </div>
  );
}
