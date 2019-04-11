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

    selectedFile: File

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


    onSelectedFile(event) {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.userForm.get('photo').setValue({
                    filename: file.name,
                    filetype: file.type,
                    value: reader.result.split(',')[1]
                })
            };
        }




    }

    registerUser() {
         const formModel = this.userForm.value;
        this._userService.addNewUser(formModel).subscribe((result => {
            this.router.navigate(['/users/users']);

        }), addError => this.errors = addError);

    }



}
