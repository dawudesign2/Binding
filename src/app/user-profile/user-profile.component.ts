import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  element = false;
  buttonOn = "Afficher l'age";
  buttonOff = "Cacher l'age";
  user = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
  }

  hidden() {
    return this.element = !this.element;
  }

  ngOnInit(): void {
  }

}
