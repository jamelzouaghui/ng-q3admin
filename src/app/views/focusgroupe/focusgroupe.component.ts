import {Component, OnInit} from '@angular/core';

import {FocusGroupeService} from './../../service/focus-groupe.service';

//import {FocusGroupe} from './../../models/focusgroupe';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Subject} from 'rxjs/Subject';

@Component({
    selector: 'app-focusgroupe',
    templateUrl: './focusgroupe.component.html',
    styleUrls: ['./focusgroupe.component.scss']
})
export class FocusgroupeComponent implements OnInit {

    currentIndex;
    focusgroupe;
    focusgroupes = [];
    errorMessage: string;
    constructor(private _focusGroupeService: FocusGroupeService, private router: Router) {}

    ngOnInit() {
        this.getFocusGroupeList();
    }


    getFocusGroupeList() {
        this._focusGroupeService.getFocusGroupeList().subscribe(
            focusgroupes => {
                this.focusgroupes = focusgroupes;
                console.log(this.focusgroupes);
                //this.dtTrigger.next();
            },
            error => this.errorMessage = <any> error
        );

    }

}
