import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdilesComponent } from './ediles.component';

describe('EdilesComponent', () => {
  let component: EdilesComponent;
  let fixture: ComponentFixture<EdilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
