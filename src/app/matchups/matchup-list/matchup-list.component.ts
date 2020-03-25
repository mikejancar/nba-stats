import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Matchup } from '../../models/matchup.interface';
import { ScoreboardService } from '../../scoreboard.service';

@Component({
  selector: 'app-matchup-list',
  templateUrl: './matchup-list.component.html',
  styleUrls: ['./matchup-list.component.css']
})
export class MatchupListComponent implements OnInit {
  matchupDate: Date;
  matchups$: Observable<Matchup[]>;
  apiUrl = environment.apiUrl;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private scoreboardService: ScoreboardService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      tap((params: ParamMap) => {
        const dateFromRoute: string = params.get('scheduleDate');
        const year = parseInt(dateFromRoute.substring(0, 4), 10);
        const month = parseInt(dateFromRoute.substring(4, 6), 10);
        const day = parseInt(dateFromRoute.substring(6), 10);

        this.matchupDate = new Date(year, month, day);
        this.matchups$ = this.scoreboardService.getMatchups(this.matchupDate);
      })
    ).subscribe();
  }

  viewMatchup(gameId: string): void {
    this.activatedRoute.paramMap.pipe(
      tap((params: ParamMap) => {
        const dateFromRoute: string = params.get('scheduleDate');
        this.router.navigate(['/matchups', dateFromRoute, gameId]);
      })
    ).subscribe();
  }
}
