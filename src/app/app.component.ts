import { Component, OnInit } from '@angular/core';
import { HttpExampleObservableComponent } from './http-example-observable/http-example-observable.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Angular App';
  name = 'hello';
  public example = [];
  constructor(private _exampleObservable: HttpExampleObservableComponent) {}
  ngOnInit(): void {
    this._exampleObservable
      .getDataUsingObservable()
      .subscribe((data) => console.log(data));
  }
}
