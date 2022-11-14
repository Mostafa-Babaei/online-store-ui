import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPartialComponent } from './auth-partial.component';

describe('AuthPartialComponent', () => {
  let component: AuthPartialComponent;
  let fixture: ComponentFixture<AuthPartialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthPartialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
