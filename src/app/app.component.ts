import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormattingService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private formattingService: FormattingService) { }

  ngOnInit(): void {
    const today = new Date(2020, 3, 6);
    this.router.navigate(['matchups', this.formattingService.formatDateForApiCall(today)]);
  }
}
