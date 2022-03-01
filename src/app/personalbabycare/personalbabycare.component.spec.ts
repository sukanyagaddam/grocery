import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalbabycareComponent } from './personalbabycare.component';

describe('PersonalbabycareComponent', () => {
  let component: PersonalbabycareComponent;
  let fixture: ComponentFixture<PersonalbabycareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalbabycareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalbabycareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
