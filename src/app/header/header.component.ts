import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  contents: string[];
  constructor() { }

  ngOnInit() {
    this.contents = ['course1','course2'];
  }

}
