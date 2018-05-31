import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximoseventosComponent } from './proximoseventos.component';

describe('ProximoseventosComponent', () => {
  let component: ProximoseventosComponent;
  let fixture: ComponentFixture<ProximoseventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximoseventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximoseventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
