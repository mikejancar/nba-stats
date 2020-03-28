import { Component, Input } from '@angular/core';

import { environment } from '../../../environments/environment';
import { MatchupTeam } from '../../models';

@Component({
  selector: 'app-matchup-team',
  templateUrl: './matchup-team.component.html',
  styleUrls: ['./matchup-team.component.css']
})
export class MatchupTeamComponent {
  @Input() team: MatchupTeam;
  @Input() isHomeTeam = true;

  apiUrl = environment.apiUrl;
}
