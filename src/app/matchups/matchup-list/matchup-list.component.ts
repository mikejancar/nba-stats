import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Matchup } from '../../models';
import { MatchupsService } from '../matchups.service';

@Component({
  selector: 'app-matchup-list',
  templateUrl: './matchup-list.component.html',
  styleUrls: ['./matchup-list.component.css']
})
export class MatchupListComponent implements OnInit {
  matchups$: Observable<Matchup[]>;
  apiUrl = environment.apiUrl;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private matchupsService: MatchupsService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      tap((params: ParamMap) => {
        const dateFromRoute: string = params.get('scheduleDate');
        this.matchups$ = this.matchupsService.getMatchups(dateFromRoute);
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
