import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchupTeamComponent } from './matchup-team.component';

describe('MatchupTeamComponent', () => {
  let component: MatchupTeamComponent;
  let fixture: ComponentFixture<MatchupTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchupTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchupTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
