import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermeiraComponent } from './enfermeira.component';

describe('EnfermeiraComponent', () => {
  let component: EnfermeiraComponent;
  let fixture: ComponentFixture<EnfermeiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfermeiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfermeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
