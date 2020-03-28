import { Component, Input } from '@angular/core';

import { WinningCharacteristicSummary } from '../../models';

@Component({
  selector: 'app-matchup-predictor-tile',
  templateUrl: './matchup-predictor-tile.component.html'
})
export class MatchupPredictorTileComponent {
  @Input() predictor: WinningCharacteristicSummary;
  @Input() isHomeTeam = true;
}
