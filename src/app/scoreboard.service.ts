import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';
import { FormattingService } from './formatting.service';
import { Matchup } from './models/matchup.interface';

@Injectable({
  providedIn: 'root'
})
export class ScoreboardService {

  constructor(
    private httpClient: HttpClient,
    private formattingService: FormattingService
  ) { }

  getMatchups(forDate: Date): Observable<Matchup[]> {
    const dateFormatted: string = this.formattingService.formatDateForApiCall(forDate);
    return this.httpClient.get<Matchup[]>(`${environment.apiUrl}/matchups/${dateFormatted}`);
  }
}
