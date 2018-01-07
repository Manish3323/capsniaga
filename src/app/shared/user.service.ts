import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { OnInit } from '@angular/core';
@Injectable()
export class UserService {
    userType: string;
    validateUser = new Subject<User>();
    user: User;
    onLogin() {
        this.userType = 'player';
    }
    getUserType(): string {
        return this.userType ? this.userType : 'player';
    }
    constructor(private _http: Http) {}

    getJSON() {
        return this._http.get('./../../assets/databaseData/db.json')
        .map((res: Response) => res.json());
        // .catch(err:any, caugth: Observable<any>)=>console.log(err);
     }
    onValidateUser(login: User) {
        return this.validateUser.next(login);
    }
}