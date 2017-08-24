import { Component, OnInit } from '@angular/core';
//import { AuthenticationService } from '../authentication.service';
import * as firebase from "firebase";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private user;

  constructor() {}

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
    console.log(this.user);
  }

  ngOnInit() {
  }

}
