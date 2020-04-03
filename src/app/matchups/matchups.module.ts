import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { MatchupDetailComponent } from './matchup-detail/matchup-detail.component';
import { MatchupListComponent } from './matchup-list/matchup-list.component';
import { MatchupTeamComponent } from './matchup-team/matchup-team.component';
import { MatchupsRoutingModule } from './matchups-routing.module';

@NgModule({
  declarations: [MatchupListComponent, MatchupDetailComponent, MatchupTeamComponent],
  imports: [CommonModule, MatchupsRoutingModule, CoreModule]
})
export class MatchupsModule {}
