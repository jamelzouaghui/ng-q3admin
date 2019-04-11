import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusgroupeComponent } from './focusgroupe.component';

describe('FocusgroupeComponent', () => {
  let component: FocusgroupeComponent;
  let fixture: ComponentFixture<FocusgroupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusgroupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
