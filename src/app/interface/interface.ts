export interface getStandings {
  response: getLeague[];
}

export interface getLeague {
  league: league;
}

export interface league {
  id: number;
  name: string;
  country: string;
  season: string;
  standings: standings[][];
}

export interface standings {
  rank: number;
  team: team;
  points: number;
  goalsDiff: number;
  all: all;
  away: unknown;
  home: unknown;
  checked: boolean;
}

export interface team {
  id: number;
  name: string;
  logo: string;
}

export interface allCountries {
  country: string;
  standings: standings[];
}

interface all {
  played: number;
  win: number;
  draw: number;
  lose: number;
}

export interface teamInfo {
  team: {
    name: string;
  };
  venue: {
    name: string;
    image: string;
  };
}

export interface getNextLastfive {
  response: nextfive[];
}

export interface events {
  detail: string;
  time: {
    elapsed: number;
  };
  team: {
    logo: string;
  };
  player: {
    name: string;
  };
}

export interface allReponse {
  response: any[];
}

export interface nextfive {
  fixture: {
    id: number;
  };
  teams: {
    home: {
      name: string;
      logo: string;
    };
    away: {
      name: string;
      logo: string;
    };
  };
  goals: {
    home: number;
    away: number;
  };
}
