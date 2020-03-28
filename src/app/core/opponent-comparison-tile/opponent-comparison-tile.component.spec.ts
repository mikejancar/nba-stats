import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpponentComparisonTileComponent } from './opponent-comparison-tile.component';

describe('OpponentComparisonTileComponent', () => {
  let component: OpponentComparisonTileComponent;
  let fixture: ComponentFixture<OpponentComparisonTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpponentComparisonTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpponentComparisonTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
