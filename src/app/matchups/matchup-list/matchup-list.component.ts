import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Matchup } from '../../models/matchup.interface';
import { ScoreboardService } from '../../scoreboard.service';

@Component({
  selector: 'app-matchup-list',
  templateUrl: './matchup-list.component.html',
  styleUrls: ['./matchup-list.component.css']
})
export class MatchupListComponent {
  matchups$: Observable<Matchup[]> = this.scoreboardService.getMatchups(new Date(2020, 3, 5));
  apiUrl = environment.apiUrl;

  constructor(private router: Router, private scoreboardService: ScoreboardService) { }

  viewMatchup(gameId: string): void {
    this.router.navigate(['/matchups', gameId]);
  }
}
