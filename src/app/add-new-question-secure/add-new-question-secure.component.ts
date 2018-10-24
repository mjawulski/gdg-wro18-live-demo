import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-add-new-question-secure',
  templateUrl: './add-new-question-secure.component.html',
  styleUrls: ['./add-new-question-secure.component.css']
})
export class AddNewQuestionSecureComponent implements OnInit {
  constructor(public afAuth: AngularFireAuth) {}

  ngOnInit() {}
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
