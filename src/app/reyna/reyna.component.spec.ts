import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReynaComponent } from './reyna.component';

describe('ReynaComponent', () => {
  let component: ReynaComponent;
  let fixture: ComponentFixture<ReynaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReynaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReynaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
