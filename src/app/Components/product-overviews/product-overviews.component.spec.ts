import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOverviewsComponent } from './product-overviews.component';

describe('ProductOverviewsComponent', () => {
  let component: ProductOverviewsComponent;
  let fixture: ComponentFixture<ProductOverviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOverviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOverviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
