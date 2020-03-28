import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdvancedStatsTileComponent } from './advanced-stats-tile/advanced-stats-tile.component';
import {
  OpponentComparisonTileComponent
} from './opponent-comparison-tile/opponent-comparison-tile.component';
import { PercentagePipe } from './pipes/percentage.pipe';
import { RankPipe } from './pipes/rank.pipe';
import { MatchupPredictorTileComponent } from './matchup-predictor-tile/matchup-predictor-tile.component';

@NgModule({
  declarations: [
    AdvancedStatsTileComponent,
    PercentagePipe,
    RankPipe,
    OpponentComparisonTileComponent,
    MatchupPredictorTileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdvancedStatsTileComponent,
    PercentagePipe,
    RankPipe,
    OpponentComparisonTileComponent,
    MatchupPredictorTileComponent
  ]
})
export class CoreModule { }
