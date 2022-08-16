import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailScreenComponent } from './products-detail-screen.component';

describe('ProductsDetailScreenComponent', () => {
  let component: ProductsDetailScreenComponent;
  let fixture: ComponentFixture<ProductsDetailScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsDetailScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDetailScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
