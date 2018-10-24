import { Component, OnInit } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from '@angular/fire/firestore';
import { Question } from './question.model';
import { Answer } from './answer.model';

@Component({
  selector: 'app-add-new-question',
  templateUrl: './add-new-question.component.html',
  styleUrls: ['./add-new-question.component.css']
})
export class AddNewQuestionComponent implements OnInit {
  private questionsCollection: AngularFirestoreCollection<Question>;

  questionToAdd: Question;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.questionsCollection = this.afs.collection<Question>('questions');

    this.questionToAdd = new Question();
  }

  addAnswer() {
    this.questionToAdd.answers.push(new Answer());
  }

  addQuestion() {
    const document = JSON.parse(JSON.stringify(this.questionToAdd)); // needs to be object. not custom object
    this.questionsCollection.add(document);
    this.questionToAdd = new Question();
  }
}
