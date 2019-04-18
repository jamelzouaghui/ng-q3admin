import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';

import {UserService} from './../../../service/user.service';
import {Router} from '@angular/router';
import {NgForm, FormBuilder, FormGroup} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {User} from './../../../models/user';




@Component({
    selector: 'app-add-media',
    templateUrl: './add-media.component.html',
    styleUrls: ['./add-media.component.scss']
})
export class AddMediaComponent implements OnInit {


    constructor(private fb: FormBuilder, private _userService: UserService, private router: Router) {}
     @ViewChild('fileInput') fileInput: ElementRef;
    fileToUpload: File = null;
     errors = [];

    ngOnInit() {
    }

   

    onSelectFile(files: FileList) {
        this.fileToUpload = <File>files.item(0);
        console.log(this.fileToUpload);
    }


    onUpload() {
        const fd = new FormData();
        fd.append('image',this.fileToUpload,this.fileToUpload.name)
        
        this._userService.addMedia(fd).subscribe((result => {
            //this.router.navigate(['/users/users']);

        }), addError => this.errors = addError);
    }



}
