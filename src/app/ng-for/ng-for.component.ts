import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['ng-for.component.css'],
})
export class NgForComponent implements OnInit {
  @Input('data') public parentData: any;
  constructor() {}

  ngOnInit(): void {}
}
