import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimoPrimeiroComponent } from './decimo-primeiro.component';

describe('DecimoPrimeiroComponent', () => {
  let component: DecimoPrimeiroComponent;
  let fixture: ComponentFixture<DecimoPrimeiroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecimoPrimeiroComponent]
    });
    fixture = TestBed.createComponent(DecimoPrimeiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
