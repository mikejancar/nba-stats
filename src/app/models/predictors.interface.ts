import { WinningCharacteristicSummary } from './winning-characteristic-summary.interface';

export interface Predictors {
  winningPercentage: WinningCharacteristicSummary;
  offensiveEfficiency: WinningCharacteristicSummary;
  defensiveEfficiency: WinningCharacteristicSummary;
}
