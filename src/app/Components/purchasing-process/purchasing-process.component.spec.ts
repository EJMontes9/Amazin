import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingProcessComponent } from './purchasing-process.component';

describe('PurchasingProcessComponent', () => {
  let component: PurchasingProcessComponent;
  let fixture: ComponentFixture<PurchasingProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasingProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasingProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
