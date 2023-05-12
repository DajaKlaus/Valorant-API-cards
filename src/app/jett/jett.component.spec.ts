import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JettComponent } from './jett.component';

describe('JettComponent', () => {
  let component: JettComponent;
  let fixture: ComponentFixture<JettComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JettComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JettComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
