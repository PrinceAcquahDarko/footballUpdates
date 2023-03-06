import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextfiveComponent } from './nextfive.component';

describe('NextfiveComponent', () => {
  let component: NextfiveComponent;
  let fixture: ComponentFixture<NextfiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextfiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
