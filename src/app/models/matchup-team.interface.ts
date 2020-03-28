import { AdvancedTeamStats } from './advanced-team-stats.interface';
import { Predictors } from './predictors.interface';
import { Team } from './team.interface';

export interface MatchupTeam extends Team {
  advancedStats: AdvancedTeamStats;
  statGaps: AdvancedTeamStats;
  predictors: Predictors;
}
