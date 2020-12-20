import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialDetailsComponent } from './editorial-details.component';

describe('EditorialDetailsComponent', () => {
  let component: EditorialDetailsComponent;
  let fixture: ComponentFixture<EditorialDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorialDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
