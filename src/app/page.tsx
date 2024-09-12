import axios from "axios";

export default function Home() {
  axios.defaults.withCredentials = true;
  const leagueId = String(1971867921);
  const year = String(2024);

  const getTeamsRosterURL = "https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/" + year + "/segments/0/leagues/" + leagueId + "?view=mRoster";
  const getAllTeamsURL = "https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/" + year + "/segments/0/leagues/" + leagueId + "?view=mTeam"

  const cookies = "swid={9F26388E-C1B1-425E-A638-8EC1B1125E74}; espn_s2=AECjeRPMXZVD7IcPqBn1JA%2BvGXc09IQReFgr4uuTGOWx2bp%2FNVlGs53HKI1aE3KmzzxL2wSs%2BJXVvC73xLWbBWPtM2zkqmBp3Mp9m0E4ogdnX31Y5V5KDuci3MWTCN6IO0ABW8iINwr1TsAFsIm6xA4E8I8DcUHW0YAlKPf1t9M5xMJPejb0WyDcNqCC2ulxWufGCAeQoFe3u7HZNSx99Hx9AjrywP6n6AoEK7gD1TeDPK7B9SVAVQLG85VNsdP1WPbGB5wwW3enkbUmTDvLYk5IDa%2FwkwHtITmgIM6SohAVXQ%3D%3D";

  const headers = {
    'Cookie': cookies
  }
  var teamsArray = []
  axios.get(getAllTeamsURL, { headers }).then((response) => { 
    
    console.log("numTeams in league is " + response.data.teams.length);
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
      const individualTeam = results.teams.find(team => team.id === id);
      // console.log(individualTeam.roster.entries[2].playerPoolEntry.player.fullName); -> individual player name
      // console.log(individualTeam.roster.entries.length); -> number of players on team
      for (var i = 0; i < individualTeam.roster.entries.length; i++) { 
        var individualPlayer = individualTeam.roster.entries[i].playerPoolEntry.player;
        // console.log(individualPlayer.fullName + " " + individualPlayer.id);
      };
    });

  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
    </div>
  );
}
