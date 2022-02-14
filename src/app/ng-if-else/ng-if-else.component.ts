import { Component, OnInit } from '@angular/core';

@Component({
  selector: `app-ng-if-else`,
  templateUrl: './ng-if-else.component.html',
})
export class NgIfElseComponent implements OnInit {
  condition = true;
  show = false;
  constructor() {}
  displayname() {
    return 'basit';
  }
  showLoginMessage() {
    return 'please login to continue';
  }

  ngOnInit(): void {}
}
