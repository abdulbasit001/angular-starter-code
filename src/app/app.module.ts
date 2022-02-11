import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CourseComponent } from './courses.component';
import { AppComponent } from './app.component';
import { CoursesServices } from './services.component';
import { AuthorsComponent } from './authors/authors.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HttpExampleObservableComponent } from './http-example-observable/http-example-observable.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent,
    NavbarComponent,
    HomeComponent,
    HttpExampleObservableComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [CoursesServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
