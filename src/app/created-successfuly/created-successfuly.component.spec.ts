import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedSuccessfulyComponent } from './created-successfuly.component';

describe('CreatedSuccessfulyComponent', () => {
  let component: CreatedSuccessfulyComponent;
  let fixture: ComponentFixture<CreatedSuccessfulyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedSuccessfulyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedSuccessfulyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
