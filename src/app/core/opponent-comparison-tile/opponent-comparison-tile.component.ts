import { Component, Input } from '@angular/core';

import { AdvancedTeamStats } from '../../models';

@Component({
  selector: 'app-opponent-comparison-tile',
  templateUrl: './opponent-comparison-tile.component.html'
})
export class OpponentComparisonTileComponent {
  @Input() statGaps: AdvancedTeamStats;
}
