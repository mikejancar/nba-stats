import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { CoreModule } from '../core/core.module';
import { MatchupDetailComponent } from './matchup-detail/matchup-detail.component';
import { MatchupListComponent } from './matchup-list/matchup-list.component';
import { MatchupsRoutingModule } from './matchups-routing.module';
import { MatchupTeamComponent } from './matchup-team/matchup-team.component';

@NgModule({
  declarations: [
    MatchupListComponent,
    MatchupDetailComponent,
    MatchupTeamComponent
  ],
  imports: [
    CommonModule,
    MatchupsRoutingModule,
    CoreModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class MatchupsModule { }
