import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionyComponent } from './educaciony.component';

describe('EducacionyComponent', () => {
  let component: EducacionyComponent;
  let fixture: ComponentFixture<EducacionyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
