import { Component } from '@angular/core';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userType: string;
  constructor(private userService: UserService){
    this.userType = this.userService.getUserType();
  }
}
