import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupesComponent } from './list-groupes.component';

describe('ListGroupesComponent', () => {
  let component: ListGroupesComponent;
  let fixture: ComponentFixture<ListGroupesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGroupesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGroupesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
