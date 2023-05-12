import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GekkoComponent } from './gekko.component';

describe('GekkoComponent', () => {
  let component: GekkoComponent;
  let fixture: ComponentFixture<GekkoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GekkoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GekkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
