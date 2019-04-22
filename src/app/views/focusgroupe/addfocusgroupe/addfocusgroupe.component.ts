import {Component, OnInit, ViewChild,ElementRef} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {FocusGroupeService} from './../../../service/focus-groupe.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {NgModule} from '@angular/core';
import {FocusGroupe} from './../../../models/focusgroupe';
import {Animateur} from './../../../models/animateur';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';

@Component({
    selector: 'app-addfocusgroupe',
    templateUrl: './addfocusgroupe.component.html',
    styleUrls: ['./addfocusgroupe.component.scss']
})
export class AddfocusgroupeComponent implements OnInit {

    datePickerConfig: Partial<BsDatepickerConfig>;
    focusgroupe: any = {};
    animateur: any = {};
    createdAt: Date;
    bsValue: Date = new Date();
    @ViewChild('f') form: any;
    filesToUploadCouverture: File = null;
    filesToUploadGroupe: File = null;
    filesToUploadAnimateur: File = null;
    @ViewChild('fileInput') fileInput: ElementRef;

    errors = [];

    //    profileForm = new FormGroup({});
    profileForm = new FormGroup({
        nom: new FormControl(''),
        raison: new FormControl(''),
        description1: new FormControl(''),
        description2: new FormControl(''),
        photoGroupe: new FormControl(''),
        photoAnimateur: new FormControl(''),
        animateur: new FormGroup({
            firstname: new FormControl(''),
            lastname: new FormControl(''),
            profession: new FormControl('')
        })
    });


    constructor(private formBuilder: FormBuilder, private _focusgroupeService: FocusGroupeService, private router: Router) {


        this.datePickerConfig = Object.assign({}, {containerClass: 'theme-dark-blue', dateInputFormat: 'DD/MM/YYYY'});



    }

    ngOnInit() {
    }

    onSelectFileCouverture(files: FileList) {
        this.filesToUploadCouverture = <File>files.item(0);
    }
    onSelectFileGroupe(files: FileList) {
        this.filesToUploadGroupe = <File>files.item(0);
    }
    onSelectFileAnimateur(files: FileList) {
        this.filesToUploadAnimateur = <File>files.item(0);
    }



    onSubmit() {

         const fd = new FormData();
        fd.append('imageCouverture',this.filesToUploadCouverture,this.filesToUploadCouverture.name)
        fd.append('imageGroupe',this.filesToUploadGroupe,this.filesToUploadGroupe.name)
        fd.append('imageAnimateur',this.filesToUploadAnimateur,this.filesToUploadAnimateur.name)
         fd.append('formModel', JSON.stringify(this.profileForm.value))



        this._focusgroupeService.addFocusGroupe(fd).subscribe((data => {

            this.router.navigate(['/panel/panel']);
        }), addError => this.errors = addError)
    }





}
