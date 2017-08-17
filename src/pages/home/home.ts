import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import Firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  places: Array<string>;

  constructor(public navCtrl: NavController) {
    var database = Firebase.database();

    var current = this;

    this.places = [];

    database.ref('/places/').on('value', function (snapshot) {
      snapshot.forEach(function(childSnapshot) {
        current.places.push(childSnapshot.val());
        return false;
      });
    });
  }

}
