import { Answer } from './answer.model';

export class Question {
  question: string;
  answers: Answer[];

  constructor() {
    this.question = '';
    this.answers = [];
  }
}
