import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rank'
})
export class RankPipe implements PipeTransform {

  transform(value: number): string {
    const rank: string = value.toString();
    const singleDigitRegex = /[123]/;
    const multiDigitRegex = /[23]{1}[123]{1}/;

    if ((rank.length === 1 && singleDigitRegex.test(rank)) ||
      (rank.length === 2 && multiDigitRegex.test(rank))) {
      return rank === '1' ? `${rank}st` : (rank === '2' ? `${rank}nd` : `${rank}rd`);
    }
    return `${rank}th`;
  }

}
