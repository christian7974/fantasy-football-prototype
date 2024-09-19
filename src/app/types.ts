export type Player = {
    name: string;
    id: string;
    injuryStatus: string;
    positionId: number;
    positionInLineup: number;
    proTeam: number;
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

export enum NFLTeamIds {
    ARI = 22,  // Arizona Cardinals
    ATL = 1,   // Atlanta Falcons
    BAL = 33,  // Baltimore Ravens
    BUF = 2,   // Buffalo Bills
    CAR = 29,  // Carolina Panthers
    CHI = 3,   // Chicago Bears
    CIN = 4,   // Cincinnati Bengals
    CLE = 5,   // Cleveland Browns
    DAL = 6,   // Dallas Cowboys
    DEN = 7,   // Denver Broncos
    DET = 8,   // Detroit Lions
    GB = 9,    // Green Bay Packers
    HOU = 34,  // Houston Texans
    IND = 11,  // Indianapolis Colts
    JAX = 30,  // Jacksonville Jaguars
    KC = 12,   // Kansas City Chiefs
    LV = 13,   // Las Vegas Raiders
    LAC = 24,  // Los Angeles Chargers
    LAR = 14,  // Los Angeles Rams
    MIA = 15,  // Miami Dolphins
    MIN = 16,  // Minnesota Vikings
    NE = 17,   // New England Patriots
    NO = 18,   // New Orleans Saints
    NYG = 19,  // New York Giants
    NYJ = 20,  // New York Jets
    PHI = 21,  // Philadelphia Eagles
    PIT = 23,  // Pittsburgh Steelers
    SF = 25,   // San Francisco 49ers
    SEA = 26,  // Seattle Seahawks
    TB = 27,   // Tampa Bay Buccaneers
    TEN = 10,  // Tennessee Titans
    WSH = 28   // Washington Commanders
}
