import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { User } from './shared/user.model';
import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userType: string;
  validUser = false;
  users: User[] = [];
  user: User;
  constructor(private userService: UserService, private route: ActivatedRoute,private router: Router) {}
  ngOnInit() {
    this.userService.getJSON().subscribe((res) => {
      this.users.push(res.users);
      console.log(this.users)
    });

    this.userService.validateUser.subscribe((user: User) => {

      if(user != null) {
        // tslint:disable-next-line:max-line-length
        this.user = this.users.filter(obj => (obj.username.toUpperCase === user.username.toUpperCase || obj.email.toUpperCase === user.username.toUpperCase) && obj.password === user.password)[0];
        if(this.user) {
          this.userType = user.userType;
          this.validUser = true;
        }else{
         return this.validUser = false;
        }
        }
      });
  }
}
