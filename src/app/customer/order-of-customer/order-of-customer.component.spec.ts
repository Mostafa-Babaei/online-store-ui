import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOfCustomerComponent } from './order-of-customer.component';

describe('OrderOfCustomerComponent', () => {
  let component: OrderOfCustomerComponent;
  let fixture: ComponentFixture<OrderOfCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderOfCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderOfCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
