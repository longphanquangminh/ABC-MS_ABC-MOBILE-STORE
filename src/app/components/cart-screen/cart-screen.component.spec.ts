import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartScreenComponent } from './cart-screen.component';

describe('CartScreenComponent', () => {
  let component: CartScreenComponent;
  let fixture: ComponentFixture<CartScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
