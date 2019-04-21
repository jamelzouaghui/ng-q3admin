import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';

import {UserService} from './../../../service/user.service';
import {Router} from '@angular/router';
import {NgForm, FormBuilder, FormGroup} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {User} from './../../../models/user';



@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
    userForm: FormGroup;

   fileToUpload: File = null;

    @ViewChild('fileInput') fileInput: ElementRef;
    errors = [];


    constructor(private fb: FormBuilder, private _userService: UserService, private router: Router) {
        this.createForm();
    }
    createForm() {
        this.userForm = this.fb.group({
            firstname: [''],
            lastname: [''],
            username: [''],
            profession: [''],
            email: [''],
            password: [''],
            photo: null
        });
    }

    ngOnInit() {

    }

  onSelectFile(files: FileList) {
        this.fileToUpload = <File>files.item(0);
        console.log(this.fileToUpload);
    }

    registerUser() {
         const fd = new FormData();
         const formModel = this.userForm.value;
        
        fd.append('image',this.fileToUpload,this.fileToUpload.name)
        fd.append('formModel',formModel)
        
        console.log(fd);
        this._userService.addNewUser(fd).subscribe((result => {
            this.router.navigate(['/users/users']);

        }), addError => this.errors = addError);

    }



}
