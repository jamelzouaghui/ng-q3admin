import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Http, Headers, Response, URLSearchParams} from '@angular/http';
//import {Observable} from 'rxjs/Rx'
import {UserService} from './service/user.service';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {User} from './../app/models/user';





@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public token: string;
    public user: any;
    constructor(private http: Http) {
//        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
//         const Token = JSON.parse(localStorage.getItem('Token'));
    }

    getToken() {
        return this.token;
    }
    
    
    login(username: string, password: string): Observable<boolean> {
        let headers = new Headers();
        headers.append('content-type', 'application/x-www-form-urlencoded');
        let body = new URLSearchParams();
        body.set('username', username);
        body.set('password', password);

        return this.http.post('http://127.0.0.1:8000/api/login_check', body, {headers: headers})
            .map((response: Response) => {
                const token = response.json() && response.json().token;
                if (token) {
                    this.token = token;

                    return true;
                                   

                } else {
                    return false;
                }
            }).catch(this.handelError);
    }




    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
    private handelError(error: Response) {

        return Observable.throw(error.json() || 'server error');

    }
}
