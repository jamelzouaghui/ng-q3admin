import {Component, OnInit, ViewChild} from '@angular/core';

import {ContactService} from './../../../service/contact.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {NgModule} from '@angular/core';
import {Contact} from './../../../models/contact';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';

@Component({
    selector: 'app-add-contact',
    templateUrl: './add-contact.component.html',
    styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

    datePickerConfig: Partial<BsDatepickerConfig>;
    contact: any = {};
    createdAt: Date;
    bsValue: Date = new Date();
    @ViewChild('f') form: any;
    errors = [];

    categories: any = [];
    produits: any = [];
    selected: any;
    selectedProduits: any;

    public data: any;


    errorMessage: string;

    constructor(private _contactService: ContactService, private router: Router) {


        this.datePickerConfig = Object.assign({}, {containerClass: 'theme-dark-blue', dateInputFormat: 'DD/MM/YYYY'});
    }

    ngOnInit() {
        //this.getCategories();
        //this.getProduits();

    }
//    getCategories() {
//        this._contactService.getCategories().subscribe(
//            data => {
//                this.data = data.result;
//                console.log(this.data);
//
//            },
//            error => this.errorMessage = <any> error
//        );
//
//    }
//     getProduits() {
//        this._contactService.getProduits().subscribe(
//            data => {
//                this.data = data.result;
//                console.log(this.data);
//
//            },
//            error => this.errorMessage = <any> error
//        );
//
//    }
    


    registerContact(form: NgForm) {
        console.log(form.value);
        let contact: any;
        this._contactService.addNewContact(this.contact).subscribe((data => {

            console.log(data);
            this.router.navigate(['/contacts/contacts']);

        }), addError => this.errors = addError);

    }
    onChangeCategorie($event) {
        console.log($event);
        this.produits = $event.produits;
    }

}
