import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpExampleObservableComponent } from './http-example-observable.component';

describe('HttpExampleObservableComponent', () => {
  let component: HttpExampleObservableComponent;
  let fixture: ComponentFixture<HttpExampleObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpExampleObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpExampleObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
