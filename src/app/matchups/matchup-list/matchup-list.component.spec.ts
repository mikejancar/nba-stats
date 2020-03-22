import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchupListComponent } from './matchup-list.component';

describe('MatchupListComponent', () => {
  let component: MatchupListComponent;
  let fixture: ComponentFixture<MatchupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
