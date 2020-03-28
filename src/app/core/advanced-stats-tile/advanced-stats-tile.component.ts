import { Component, Input } from '@angular/core';

import { AdvancedTeamStats } from '../../models';

@Component({
  selector: 'app-advanced-stats-tile',
  templateUrl: './advanced-stats-tile.component.html'
})
export class AdvancedStatsTileComponent {
  @Input() stats: AdvancedTeamStats;
}
