import {Injectable} from '@angular/core';

import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Contact} from './../models/contact';
import {Categorie} from './../models/categorie';
import {Produit} from './../models/produit';
import {AuthService} from './../auth.service';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    private uri = 'http://127.0.0.1:8000/api/';

    token: string;

    

    constructor(private http: Http, private authenticationService: AuthService) {
        this.token = JSON.parse(localStorage.getItem('Token'));

    }
    
   
  

    addNewContact(contact: Contact) {
        console.log(this.token);
        console.log(contact);
        const headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.uri + 'contacts/addnewcontact', JSON.stringify(contact), {headers: headers}).map(res => res.json()).catch(this.handelError);

    }
    
    
    getContacts(): Observable<any[]> {
        console.log(this.token);
        const headers = new Headers({'Authorization': 'Bearer ' + this.token});
        return this.http.get(this.uri + 'contacts', {headers: headers}).map(res => <Contact[]> res.json()).catch(this.handelError);

    }
    getCategories(): Observable<any[]> {
       
        const headers = new Headers({'Authorization': 'Bearer ' + this.token});
        return this.http.get(this.uri + 'categories', {headers: headers}).map(res => <Categorie[]> res.json()).catch(this.handelError);

    }
    
    getProduits(): Observable<any[]> {
       
        const headers = new Headers({'Authorization': 'Bearer ' + this.token});
        return this.http.get(this.uri + 'produits', {headers: headers}).map(res => <Produit[]> res.json()).catch(this.handelError);

    }
    
    private handelError(error: Response) {

        return Observable.throw(error.json().errors || 'server error');

    }

}
