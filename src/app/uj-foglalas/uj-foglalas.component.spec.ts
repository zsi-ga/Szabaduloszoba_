import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjfoglalasComponent } from './uj-foglalas.component';

describe('UjfoglalasComponent', () => {
  let component: UjfoglalasComponent;
  let fixture: ComponentFixture<UjfoglalasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UjfoglalasComponent]
    });
    fixture = TestBed.createComponent(UjfoglalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
