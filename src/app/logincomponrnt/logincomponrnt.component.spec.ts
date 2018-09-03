import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincomponrntComponent } from './logincomponrnt.component';

describe('LogincomponrntComponent', () => {
  let component: LogincomponrntComponent;
  let fixture: ComponentFixture<LogincomponrntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogincomponrntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincomponrntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
