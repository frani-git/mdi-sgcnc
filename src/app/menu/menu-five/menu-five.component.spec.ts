import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFiveComponent } from './menu-five.component';

describe('MenuFiveComponent', () => {
  let component: MenuFiveComponent;
  let fixture: ComponentFixture<MenuFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
