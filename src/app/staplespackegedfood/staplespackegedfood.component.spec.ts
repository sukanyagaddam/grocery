import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaplespackegedfoodComponent } from './staplespackegedfood.component';

describe('StaplespackegedfoodComponent', () => {
  let component: StaplespackegedfoodComponent;
  let fixture: ComponentFixture<StaplespackegedfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaplespackegedfoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaplespackegedfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
