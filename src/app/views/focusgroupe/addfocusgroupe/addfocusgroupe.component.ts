import {Component, OnInit, ViewChild} from '@angular/core';
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
    errors = [];

    //    profileForm = new FormGroup({});
    profileForm = new FormGroup({
        nom: new FormControl(''),
        raison: new FormControl(''),
        description1: new FormControl(''),
        description2: new FormControl(''),
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
    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.log(this.profileForm.value);
        this._focusgroupeService.addFocusGroupe(this.profileForm.value).subscribe((data=>{
            
            this.router.navigate(['/panel/panel']);
        }), addError => this.errors = addError)
    }
    
    
    
 

}
