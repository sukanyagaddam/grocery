import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsalesComponent } from './bestsales.component';

describe('BestsalesComponent', () => {
  let component: BestsalesComponent;
  let fixture: ComponentFixture<BestsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestsalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
