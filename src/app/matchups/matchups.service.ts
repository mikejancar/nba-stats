import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Matchup } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MatchupsService {
  constructor(private httpClient: HttpClient) {}

  getMatchups(matchupDate: string): Observable<Matchup[]> {
    return this.httpClient.get<Matchup[]>(`${environment.apiUrl}/matchups/${matchupDate}`);
  }

  getMatchup(matchupDate: string, gameId: string): Observable<Matchup> {
    return this.httpClient.get<Matchup>(`${environment.apiUrl}/matchups/${matchupDate}/${gameId}`);
  }
}
