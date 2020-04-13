import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormattingService {
  formatDateForApiCall(dateToFormat: Date): string {
    const year = dateToFormat.getFullYear();
    const month = (dateToFormat.getMonth() + 1).toString().padStart(2, '0');
    const day = dateToFormat.getDate().toString().padStart(2, '0');

    return `${year}${month}${day}`;
  }

  roundToNthDigit(num: number, numOfDigits: number): number {
    return Math.round(num * Math.pow(10, numOfDigits)) / Math.pow(10, numOfDigits);
  }
}
