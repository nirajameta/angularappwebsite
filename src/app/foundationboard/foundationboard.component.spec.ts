import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationboardComponent } from './foundationboard.component';

describe('FoundationboardComponent', () => {
  let component: FoundationboardComponent;
  let fixture: ComponentFixture<FoundationboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundationboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundationboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
