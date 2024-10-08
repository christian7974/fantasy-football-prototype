import { DefensePhotos, Position, NFLTeamIds } from "@/app/types";

export function getDefensePhoto(teamName: string): string {
    switch (teamName) {
        case DefensePhotos["Cardinals"]:
            return "ari";
        case DefensePhotos["Falcons"]:
            return "atl";
        case DefensePhotos["Ravens"]:
            return "bal";
        case DefensePhotos["Bills"]:
            return "buf";
        case DefensePhotos["Panthers"]:
            return "car";
        case DefensePhotos["Bears"]:
            return "chi";
        case DefensePhotos["Bengals"]:
            return "cin";
        case DefensePhotos["Browns"]:
            return "cle";
        case DefensePhotos["Cowboys"]:
            return "dal";
        case DefensePhotos["Broncos"]:
            return "den";
        case DefensePhotos["Lions"]:
            return "det";
        case DefensePhotos["Packers"]:
            return "gb";
        case DefensePhotos["Texans"]:
            return "hou";
        case DefensePhotos["Colts"]:
            return "ind";
        case DefensePhotos["Jaguars"]:
            return "jax";
        case DefensePhotos["Chiefs"]:
            return "kc";
        case DefensePhotos["Raiders"]:
            return "lv";
        case DefensePhotos["Chargers"]:
            return "lac";
        case DefensePhotos["Rams"]:
            return "lar";
        case DefensePhotos["Dolphins"]:
            return "mia";
        case DefensePhotos["Vikings"]:
            return "min";
        case DefensePhotos["Patriots"]:
            return "ne";
        case DefensePhotos["Saints"]:
            return "no";
        case DefensePhotos["Giants"]:
            return "nyg";
        case DefensePhotos["Jets"]:
            return "nyj";
        case DefensePhotos["Eagles"]:
            return "phi";
        case DefensePhotos["Steelers"]:
            return "pit";
        case DefensePhotos["49ers"]:
            return "sf";
        case DefensePhotos["Seahawks"]:
            return "sea";
        case DefensePhotos["Buccaneers"]:
            return "tb";
        case DefensePhotos["Titans"]:
            return "ten";
        case DefensePhotos["Commanders"]:
            return "wsh";
        default:
            return "N/A";
    }
}

export function getProPosition(positionId: number): string { 
    switch(positionId) { 
        case Position.QB:
            return "QB";
        case Position.RB:
            return "RB";
        case Position.WR:
            return "WR";
        case Position.TE:
            return "TE";
        case Position.K:
            return "K";
        case Position.DST:
            return "D/ST";
        default:
            return "N/A";
    }
}

export function getLineupPosition(positionInLineup: number): string { 
    switch(positionInLineup) { 
        case 0:
            return "QB";
        case 2:
            return "RB";
        case 4:
            return "WR";
        case 6:
            return "TE";
        case 7:
            return "FLEX";
        case 16:
            return "D/ST";
        case 17:
            return "K";
        case 20:
            return "Bench";
        case 21:
            return "IR";
        default:
            return "N/A";
    }
}

export function formatInjuryStatus(injuryStatus :string): string {
    if (!injuryStatus) {
        return ""
    }
    else if (injuryStatus != "ACTIVE" && injuryStatus != "INJURY_RESERVE") {
        injuryStatus = injuryStatus[0];
    } else if (injuryStatus == "INJURY_RESERVE") {
        var injuryStatusAsArray = injuryStatus.split("_");
        return injuryStatusAsArray[0][0] + injuryStatusAsArray[1][0];
    }
    injuryStatus = injuryStatus.replace("_", " ");
    return injuryStatus.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
  }

export function getPlayersProTeam(proTeamId: number): string {
    return NFLTeamIds[proTeamId];
}