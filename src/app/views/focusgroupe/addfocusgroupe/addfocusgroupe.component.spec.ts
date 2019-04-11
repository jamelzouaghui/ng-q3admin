import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfocusgroupeComponent } from './addfocusgroupe.component';

describe('AddfocusgroupeComponent', () => {
  let component: AddfocusgroupeComponent;
  let fixture: ComponentFixture<AddfocusgroupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfocusgroupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfocusgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
