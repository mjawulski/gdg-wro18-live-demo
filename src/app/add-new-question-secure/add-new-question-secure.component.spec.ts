import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewQuestionSecureComponent } from './add-new-question-secure.component';

describe('AddNewQuestionSecureComponent', () => {
  let component: AddNewQuestionSecureComponent;
  let fixture: ComponentFixture<AddNewQuestionSecureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewQuestionSecureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewQuestionSecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
