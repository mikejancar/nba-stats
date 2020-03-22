import { Team } from './team.interface';

export interface Matchup {
  gameId: string;
  homeTeam: Team;
  awayTeam: Team;
  gameDate: Date;
  gameTime: string;
}
