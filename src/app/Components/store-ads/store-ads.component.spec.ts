import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreAdsComponent } from './store-ads.component';

describe('StoreAdsComponent', () => {
  let component: StoreAdsComponent;
  let fixture: ComponentFixture<StoreAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreAdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
