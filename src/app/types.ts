export type Player = {
    name: string;
    id: string;
    injuryStatus: string;
};

export type Team = {
    logo: string;
    id: number;
    name: string;
    players: Player[];
    wins: number;
    losses: number;
  };
