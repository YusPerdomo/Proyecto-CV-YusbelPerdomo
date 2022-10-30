import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciapComponent } from './experienciap.component';

describe('ExperienciapComponent', () => {
  let component: ExperienciapComponent;
  let fixture: ComponentFixture<ExperienciapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
