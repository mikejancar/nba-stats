import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatchupDetailComponent } from './matchup-detail/matchup-detail.component';
import { MatchupListComponent } from './matchup-list/matchup-list.component';

const routes: Routes = [
  { path: 'matchups/:scheduleDate/:id', component: MatchupDetailComponent },
  { path: 'matchups/:scheduleDate', component: MatchupListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchupsRoutingModule { }
