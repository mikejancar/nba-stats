import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchupPredictorTileComponent } from './matchup-predictor-tile.component';

describe('MatchupPredictorTileComponent', () => {
  let component: MatchupPredictorTileComponent;
  let fixture: ComponentFixture<MatchupPredictorTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchupPredictorTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchupPredictorTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
