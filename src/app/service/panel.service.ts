import {Injectable} from '@angular/core';

//import { Observable, of } from 'rxjs';
//import { catchError, map, tap } from 'rxjs/operators';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable({
    providedIn: 'root'
})
export class PanelService {

    constructor() {}


    getPanels() {

    }
}
