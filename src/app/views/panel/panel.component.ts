import {Component, OnInit} from '@angular/core';

import {ContactService} from './../../service/contact.service';

import {Contact} from './../../models/contact';

import {NgSelectModule, NgOption} from '@ng-select/ng-select';

import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

import {Observable, Subject} from 'rxjs';

@Component({
    selector: 'app-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {



    public nom: string;
    public prenom: string;
    public dataSelect = [];
    public segments = [];
    public marques = [];

    currentIndex;
    contact;
    public data: any[];

    contacts: Array<Contact> = [];
    errorMessage: string;

    constructor(private _contactService: ContactService, private router: Router) {}

    ngOnInit() {
        ;
        this.getContacts();
    }

    getContacts() {
        this._contactService.getContacts().subscribe(
            data => {
                this.data = data;
            


            },
            error => this.errorMessage = <any> error
        );

    }



    NewSegment() {

        this.segments = this.dataSelect;

    }
    AddSegment(segment) {
        console.log('new segment');
        console.log(segment);
    }



}
