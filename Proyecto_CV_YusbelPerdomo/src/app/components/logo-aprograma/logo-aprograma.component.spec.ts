import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoAProgramaComponent } from './logo-aprograma.component';

describe('LogoAProgramaComponent', () => {
  let component: LogoAProgramaComponent;
  let fixture: ComponentFixture<LogoAProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoAProgramaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoAProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
