import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormattingService {
  formatDateForApiCall(dateToFormat: Date): string {
    const year = dateToFormat.getFullYear();
    const month = dateToFormat.getMonth().toString().padStart(2, '0');
    const day = dateToFormat.getDate().toString().padStart(2, '0');

    return `${year}${month}${day}`;
  }
}
