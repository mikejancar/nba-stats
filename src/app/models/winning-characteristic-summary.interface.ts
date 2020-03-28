import { WinningCharacteristics } from './winning-characteristics.interface';

export interface WinningCharacteristicSummary {
  fromDate: Date;
  toDate: Date;
  comparisonRange: number;
  winningCharacteristics: WinningCharacteristics;
}
