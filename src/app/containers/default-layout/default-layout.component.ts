import {Component, Input, OnInit,ViewChild} from '@angular/core';
import {navItems} from './../../_nav';
import {User} from './../../models/user';
import {UserService} from './../../service/user.service';
import {ModalDirective} from 'ngx-bootstrap/modal/';

@Component({
    selector: 'app-dashboard',
    templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {

    public primaryModal;
    currentUser: User;
    users: User[] = [];
  
    @ViewChild('staticModal') public staticModal:ModalDirective;
    public navItems = navItems;
    public sidebarMinimized = true;
    private changes: MutationObserver;
    public element: HTMLElement = document.body;
    
    constructor() {
        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // console.log(this.currentUser);  
        
        this.changes = new MutationObserver((mutations) => {
            this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
        });

        this.changes.observe(<Element> this.element, {
            attributes: true
        });
    }

    ngOnInit() {
//    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    
//    submitMedia(){
//        console.log('alert pour enregister image de profil');
//    }


}
