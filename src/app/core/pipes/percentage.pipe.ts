import { Pipe, PipeTransform } from '@angular/core';

import { FormattingService } from '../services/formatting.service';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {

  constructor(private formattingService: FormattingService) { }

  transform(value: number): string {
    const percentage = this.formattingService.roundToNthDigit(value * 100, 1);
    return `${percentage}%`;
  }

}
