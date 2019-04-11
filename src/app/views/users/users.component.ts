import { Component, OnInit } from '@angular/core';
import {UserService} from './../../service/user.service';

import {Contact} from './../../models/contact';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

import {Subject} from 'rxjs/Subject';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
currentIndex;
user;
 users: Array<Contact>= [] ;
     errorMessage: string;
  constructor(private _userService: UserService,private router: Router) { }

  ngOnInit() {
      this.getContacts();
  }
  
  
    getContacts() {
    this._userService.getUsers().subscribe(
      users => {
      this.users = users;
          console.log(this.users);
       //this.dtTrigger.next();
       }, 
        error => this.errorMessage = <any> error
    );
    
  }


}
