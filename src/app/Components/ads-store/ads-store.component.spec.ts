import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsStoreComponent } from './ads-store.component';

describe('AdsStoreComponent', () => {
  let component: AdsStoreComponent;
  let fixture: ComponentFixture<AdsStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
