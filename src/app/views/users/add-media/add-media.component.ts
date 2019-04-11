import {Component, OnInit} from '@angular/core';

import {UserService} from './../../../service/user.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {NgModule} from '@angular/core';
import {User} from './../../../models/user';


@Component({
    selector: 'app-add-media',
    templateUrl: './add-media.component.html',
    styleUrls: ['./add-media.component.scss']
})
export class AddMediaComponent implements OnInit {

    constructor(private _userService: UserService, private router: Router) {}

    ngOnInit() {
    }
   

    

}
