import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningmaterialsComponent } from './cleaningmaterials.component';

describe('CleaningmaterialsComponent', () => {
  let component: CleaningmaterialsComponent;
  let fixture: ComponentFixture<CleaningmaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleaningmaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningmaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
