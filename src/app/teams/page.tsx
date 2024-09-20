import axios from "axios";
import TeamsClient from "@/app/teams/teamsClient";

import type { Player, Team } from "@/app/types";
import { formatInjuryStatus } from "../utils/individualPlayerUtils";

export default async function Teams() {
  axios.defaults.withCredentials = true;
  const leagueId = process.env.LEAGUE_ID;
  const year = String(2024);

  const baseURL = "https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/" + year + "/segments/0/leagues/" + leagueId;
  const getTeamsRosterURL = "https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/" + year + "/segments/0/leagues/" + leagueId + "?view=mRoster";
  const getAllTeamsURL = "https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/" + year + "/segments/0/leagues/" + leagueId + "?view=mTeam"
  const leagueSettingsURL = "https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/" + year + "/segments/0/leagues/" + leagueId + "?view=mSettings";
  const cookies = `swid={${process.env.SWID}}; espn_s2=${process.env.ESPN_S2}`;
  var isCommissioner = false;
  const headers = {
    'Cookie': cookies
  }
  var teamsArray: Team[] = [];
  var leagueName = "";

  await axios.get(baseURL, { headers }).then((response) => { 
    const results = response.data;
    // find the memeber in results.members with the same SWID
    const member = results.members.find((member: { id: string; }) => member.id === `{${process.env.SWID}}`);
    isCommissioner = member.isLeagueManager;
  });

  await axios.get(getAllTeamsURL, { headers }).then((response) => { 
    for (var i = 0; i < response.data.teams.length; i++) { 
      teamsArray.push({
        "logo": response.data.teams[i].logo,
        "id": response.data.teams[i].id,
        "name": response.data.teams[i].name,
        "players": [],
        "wins": response.data.teams[i].record.overall.wins,
        "losses": response.data.teams[i].record.overall.losses,
        "powerRankingsRank": i + 1,
      })
    }
    teamsArray.sort((a, b) => (b.wins - a.wins));
  });

  await axios.get(getTeamsRosterURL, { headers }).then((response) => {
    const results = response.data;
    const idsArray = teamsArray.map(team => team.id);
    idsArray.forEach(id => {
      const individualTeam = results.teams.find((team: { id: number; }) => team.id === id);
      const teamRoster = individualTeam.roster.entries;

      teamRoster.forEach((roster: any) => {
        const teamToAddTo = teamsArray.find((team: { id: number; }) => team.id === id);
        const player: Player = {
          "name": roster.playerPoolEntry.player.fullName,
          "id": roster.playerPoolEntry.player.id,
          "injuryStatus": roster.playerPoolEntry.player.injuryStatus === undefined ? "N/A" : formatInjuryStatus(roster.playerPoolEntry.player.injuryStatus),
          "positionId": roster.playerPoolEntry.player.defaultPositionId,
          "positionInLineup": roster.lineupSlotId,
          "proTeam": roster.playerPoolEntry.player.proTeamId,
        }
        if (player.positionInLineup === 23) {
          player.positionInLineup = 7;
        }
        teamToAddTo?.players.push(player);
      })
    });
  });
  await axios.get(leagueSettingsURL, { headers }).then((response) => {
    const results = response.data;
    leagueName = results.settings.name;
  });
  
  return (
    <div>
      <h1 className="text-4xl text-center mb-4">{leagueName}</h1>
      <>
        <TeamsClient arrayOfTeams={teamsArray} isCommish={isCommissioner} />
      </>
    </div>
  );
}
