import { MatchupTeam } from './matchup-team.interface';

export interface Matchup {
  gameId: string;
  homeTeam: MatchupTeam;
  awayTeam: MatchupTeam;
  gameDate: Date;
  gameTime: string;
}
