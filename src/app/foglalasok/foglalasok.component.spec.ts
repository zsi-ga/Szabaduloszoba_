import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoglalasokComponent } from './foglalasok.component';

describe('FoglalasokComponent', () => {
  let component: FoglalasokComponent;
  let fixture: ComponentFixture<FoglalasokComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoglalasokComponent]
    });
    fixture = TestBed.createComponent(FoglalasokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
