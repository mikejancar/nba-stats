import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  imports: [MatCardModule, MatGridListModule, MatProgressSpinnerModule],
  exports: [MatCardModule, MatGridListModule, MatProgressSpinnerModule]
})
export class MaterialModule {}
