import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViperComponent } from './viper.component';

describe('ViperComponent', () => {
  let component: ViperComponent;
  let fixture: ComponentFixture<ViperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
