import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacUsComponent } from './contac-us.component';

describe('ContacUsComponent', () => {
  let component: ContacUsComponent;
  let fixture: ComponentFixture<ContacUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContacUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContacUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
