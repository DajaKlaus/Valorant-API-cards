import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KilljoyComponent } from './killjoy.component';

describe('KilljoyComponent', () => {
  let component: KilljoyComponent;
  let fixture: ComponentFixture<KilljoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KilljoyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KilljoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
