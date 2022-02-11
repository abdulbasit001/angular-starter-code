import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { httpObservableDataType } from '../employee';

@Component({
  selector: 'app-http-example-observable',
  templateUrl: './http-example-observable.component.html',
})
export class HttpExampleObservableComponent {
  private _url: string = '/assets/data/example.json';
  constructor(private http: HttpClient) {}
  getDataUsingObservable(): Observable<httpObservableDataType[]> {
    return this.http.get<httpObservableDataType[]>(this._url);
  }
}
