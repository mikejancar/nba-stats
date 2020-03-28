import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedStatsTileComponent } from './advanced-stats-tile.component';

describe('AdvancedStatsTileComponent', () => {
  let component: AdvancedStatsTileComponent;
  let fixture: ComponentFixture<AdvancedStatsTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedStatsTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedStatsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
