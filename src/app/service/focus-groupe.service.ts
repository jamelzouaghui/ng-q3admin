import {Injectable} from '@angular/core';


import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {FocusGroupe} from './../models/focusgroupe';
import {Animateur} from './../models/animateur';

import {AuthService} from './../auth.service';


@Injectable({
    providedIn: 'root'
})
export class FocusGroupeService {

    private uri = 'http://127.0.0.1:8000/api/';

    token: string;

    constructor(private http: Http, private authenticationService: AuthService) {
        this.token = JSON.parse(localStorage.getItem('Token'));

    }



    addFocusGroupe(fd) {
        console.log(fd);
        const headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.uri + 'focusgroupe/addfocusgroupe', fd, {headers: headers}).map(res => res.json()).catch(this.handelError);

    }



    getFocusGroupeList(): Observable<any[]> {
        console.log(this.authenticationService.token);
        console.log(this.token);
        const headers = new Headers({'Authorization': 'Bearer ' + this.token});
        return this.http.get(this.uri + 'focusgroupes', {headers: headers}).map(res => <FocusGroupe[]> res.json()).catch(this.handelError);

    }




    private handelError(error: Response) {

        return Observable.throw(error.json().errors || 'server error');

    }

}
