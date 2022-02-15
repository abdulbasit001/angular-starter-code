import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
})
export class PipesComponent implements OnInit {
  public name = 'abdul basit';
  person = {
    name: this.name,
    age: { value: this.name && this.name.length },
  };
  constructor() {}

  ngOnInit(): void {}
}
