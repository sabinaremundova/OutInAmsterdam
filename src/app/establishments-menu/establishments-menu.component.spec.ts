import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EstablishmentsMenuComponent} from './establishments-menu.component';

describe('EstablishmentsMenuComponent', () => {
  let component: EstablishmentsMenuComponent;
  let fixture: ComponentFixture<EstablishmentsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EstablishmentsMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
