export type Player = {
    name: string;
    id: string;
    injuryStatus: string;
    positionId: number;
    positionInLineup: number;
};

export type Team = {
    logo: string;
    id: number;
    name: string;
    players: Player[];
    wins: number;
    losses: number;
  };

export enum Position {
    QB = 1,
    RB = 2,
    WR = 3,
    TE = 4,
    K = 5,
    DST = 16
}

export enum PositionInLineup {
    QB = 0,
    RB = 2,
    WR = 4,
    TE = 6,
    FLEX = 7,
    DST = 16,
    K = 17,
    BENCH = 20,
    IR = 21
}

export enum DefensePhotos {
    Cardinals = "Cardinals",
    Falcons = "Falcons",
    Ravens = "Ravens",
    Bills = "Bills",
    Panthers = "Panthers",
    Bears = "Bears",
    Bengals = "Bengals",
    Browns = "Browns",
    Cowboys = "Cowboys",
    Broncos = "Broncos",
    Lions = "Lions",
    Packers = "Packers",
    Texans = "Texans",
    Colts = "Colts",
    Jaguars = "Jaguars",
    Chiefs = "Chiefs",
    Raiders = "Raiders",
    Chargers = "Chargers",
    Rams = "Rams",
    Dolphins = "Dolphins",
    Vikings = "Vikings",
    Patriots = "Patriots",
    Saints = "Saints",
    Giants = "Giants",
    Jets = "Jets",
    Eagles = "Eagles",
    Steelers = "Steelers",
    "49ers" = "49ers",
    Seahawks = "Seahawks",
    Buccaneers = "Buccaneers",
    Titans = "Titans",
    Commanders = "Commanders"
}
