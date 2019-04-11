import {Component} from '@angular/core';


import {Router} from '@angular/router';
import {AuthService} from './../../auth.service';
import {UserService} from './../../service/user.service';
import {User} from './../../models/user';



@Component({
    selector: 'app-dashboard',
    templateUrl: 'login.component.html'
})
export class LoginComponent {
    public user: any;
   username: string;
   password: string;
   error: string;
   public result: any;

    constructor(private router: Router, private _userService: UserService,
        private authenticationService: AuthService) {

    }

    ngOnInit() {
        this.authenticationService.logout();
    }


  
    login(e) {

        e.preventDefault();
        this.authenticationService.login(this.username, this.password)
            .subscribe(result => {
               
                this._userService.getUser(this.username).subscribe(data => {
                    console.log(data);
                    this.user = data;
                    localStorage.setItem("currentUser", JSON.stringify(this.user[0]));
                     let authToken = this.authenticationService.getToken();
                     localStorage.setItem("Token", JSON.stringify(authToken));
                     
                    this.router.navigate(['/dashboard']);

                });
            }, loginError => this.error = loginError.message + ' : verify  your username or password !  ');


    }

}
