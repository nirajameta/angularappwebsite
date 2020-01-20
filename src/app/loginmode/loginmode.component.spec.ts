import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmodeComponent } from './loginmode.component';

describe('LoginmodeComponent', () => {
  let component: LoginmodeComponent;
  let fixture: ComponentFixture<LoginmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginmodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
