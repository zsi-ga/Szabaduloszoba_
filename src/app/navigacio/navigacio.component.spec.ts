import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigacioComponent } from './navigacio.component';

describe('NavigacioComponent', () => {
  let component: NavigacioComponent;
  let fixture: ComponentFixture<NavigacioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigacioComponent]
    });
    fixture = TestBed.createComponent(NavigacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
