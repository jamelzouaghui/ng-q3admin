import { Component, OnInit } from '@angular/core';

import {ContactService} from './../../service/contact.service';


import {Contact} from './../../models/contact';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

 currentIndex;
contact;
    public data : any;

 contacts: Array<Contact>= [] ;
     errorMessage: string;
  constructor(private _contactService: ContactService,private router: Router) { }

  ngOnInit() {
      this.getContacts();
  }
  
  
    getContacts() {
    this._contactService.getContacts().subscribe(
      data => {
    
      this.data = data;
          console.log(this.data);
       
       }, 
        error => this.errorMessage = <any> error
    );
    
  }

}
