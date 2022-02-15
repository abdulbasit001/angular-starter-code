import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['ng-for.component.css'],
})
export class NgForComponent implements OnInit {
  @Input('data') public parentData: any;
  @Output() public childEvent = new EventEmitter();
  public isClicked = false;
  constructor() {}

  ngOnInit(): void {}
  fireEvent() {
    this.isClicked = !this.isClicked;
    this.childEvent.emit(this.isClicked);
  }
}
