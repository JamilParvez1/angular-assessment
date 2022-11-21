import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSButtonComponent } from './lsbutton.component';

describe('LSButtonComponent', () => {
  let component: LSButtonComponent;
  let fixture: ComponentFixture<LSButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LSButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LSButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
