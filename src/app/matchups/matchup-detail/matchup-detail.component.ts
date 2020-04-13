import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

import { Matchup } from '../../models';
import { MatchupsService } from '../matchups.service';

@Component({
  selector: 'app-matchup-detail',
  templateUrl: './matchup-detail.component.html'
})
export class MatchupDetailComponent implements OnInit {
  matchup$: Observable<Matchup>;

  constructor(private activatedRoute: ActivatedRoute, private matchupsService: MatchupsService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        take(1),
        tap((params: ParamMap) => {
          const dateFromRoute: string = params.get('scheduleDate');
          const gameId: string = params.get('gameId');
          this.matchup$ = this.matchupsService.getMatchup(dateFromRoute, gameId);
        })
      )
      .subscribe();
  }
}
