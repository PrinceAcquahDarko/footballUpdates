import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastfiveComponent } from './lastfive.component';

describe('LastfiveComponent', () => {
  let component: LastfiveComponent;
  let fixture: ComponentFixture<LastfiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastfiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
