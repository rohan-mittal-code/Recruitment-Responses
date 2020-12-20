import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CseDetailsComponent } from './cse-details.component';

describe('CseDetailsComponent', () => {
  let component: CseDetailsComponent;
  let fixture: ComponentFixture<CseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
