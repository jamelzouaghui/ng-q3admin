import {Injectable} from '@angular/core';

import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Contact} from './../models/contact';
import {User} from './../models/user';
import {Media} from './../models/media';
import {AuthService} from './../auth.service';






@Injectable({
    providedIn: 'root'
})
export class UserService {

    private uri = 'http://127.0.0.1:8000/api/';

    token: string;

    constructor(private http: Http, private authenticationService: AuthService) {
        this.token = JSON.parse(localStorage.getItem('Token'));

    }

    //    showContact(id    ) {
    //        console.log(this.toke    n);
    //        const headers = new Headers    ();
    //        headers.append('content-type', 'application/json    ');
    //        headers.append('Authorization', 'Bearer ' + this.authenticationService.toke    n);
    //        return this.http.get(this.uri + 'show/contact/' + id, {headers: headers}).map(res => <Contact[]> res.json()).catch(this.handelErro    r);    
    //
    //    }

    getUser(username) {

        const headers = new Headers();
        headers.append('content-type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token);

        return this.http.get(this.uri + 'user/' + username, {headers: headers}).map(

            res => <User[]> res.json()

        ).catch(this.handelError);


    }
    addNewUser(formModel) {
        console.log(formModel);
        const headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.uri + 'users/addnew', formModel, {
            headers: headers,

        }).map(res => res.json()).catch(this.handelError);

    }




    getUsers(): Observable<any[]> {
        console.log(this.authenticationService.token);
        console.log(this.token);
        //const headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.token});
        const headers = new Headers({'Authorization': 'Bearer ' + this.token});
        return this.http.get(this.uri + 'users', {headers: headers}).map(res => <User[]> res.json()).catch(this.handelError);

    }

    getGroupes(): Observable<any[]> {
        const headers = new Headers({'Authorization': 'Bearer ' + this.token});
        return this.http.get(this.uri + 'groupes', {headers: headers}).map(res => <User[]> res.json()).catch(this.handelError);

    }




    updatePost(contact: Contact, id) {
        const headers = new Headers();
        headers.append('content-type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
        return this.http.put(this.uri + '/update/contact/' + id, JSON.stringify(contact), {headers: headers}).map(res => res.json()).catch(this.handelError);
    }
    //
    //
    //  deletePost(id: any) {
    //    const  headers = new Headers();
    //    headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
    //    return this.http.delete(this.uri + '/' + id, {headers : headers}).map(res => res.json());
    //  }



    addMedia(selectedFile) {
        console.log(selectedFile);

        const headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.uri + 'users/addmedia', selectedFile, {headers: headers}).map(res => res.json()).catch(this.handelError);


    }

    private handelError(error: Response) {

        return Observable.throw(error.json().errors || 'server error');

    }



}
