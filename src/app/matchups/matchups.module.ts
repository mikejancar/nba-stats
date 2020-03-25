import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { MatchupDetailComponent } from './matchup-detail/matchup-detail.component';
import { MatchupListComponent } from './matchup-list/matchup-list.component';
import { MatchupsRoutingModule } from './matchups-routing.module';

@NgModule({
  declarations: [
    MatchupListComponent,
    MatchupDetailComponent
  ],
  imports: [
    CommonModule,
    MatchupsRoutingModule,
    MatCardModule
  ]
})
export class MatchupsModule { }
