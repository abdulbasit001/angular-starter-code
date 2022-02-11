import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  home = 'home works!';
  constructor() {
    
  }

  ngOnInit(): void {}
}
