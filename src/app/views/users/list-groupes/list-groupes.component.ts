import { Component, OnInit } from '@angular/core';
import {UserService} from './../../../service/user.service';
import {Groupe} from './../../../models/groupe';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-list-groupes',
  templateUrl: './list-groupes.component.html',
  styleUrls: ['./list-groupes.component.scss']
})
export class ListGroupesComponent implements OnInit {
currentIndex;
grouope;
 groupes: Array<Groupe>= [] ;
     errorMessage: string;
  constructor(private _userService: UserService,private router: Router) { }

  ngOnInit() {
      this.getGroupes();
  }
  
  
    getGroupes() {
    this._userService.getGroupes().subscribe(
      groupes => {
      this.groupes = groupes;
          console.log(this.groupes);
       //this.dtTrigger.next();
       }, 
        error => this.errorMessage = <any> error
    );
    
  }


}
