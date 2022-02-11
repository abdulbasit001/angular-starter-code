import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CourseComponent } from './courses.component';
import { AppComponent } from './app.component';
import { CoursesServices } from './services.component';
import { AuthorsComponent } from './authors/authors.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, CourseComponent, AuthorsComponent, NavbarComponent, HomeComponent],
  imports: [BrowserModule],
  providers: [CoursesServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
