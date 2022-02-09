import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFourComponent } from './menu-four.component';

describe('MenuFourComponent', () => {
  let component: MenuFourComponent;
  let fixture: ComponentFixture<MenuFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
