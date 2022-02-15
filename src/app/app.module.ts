import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CourseComponent } from './courses.component';
import { AppComponent } from './app.component';
import { CoursesServices } from './services.component';
import { AuthorsComponent } from './authors/authors.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgIfElseComponent } from './ng-if-else/ng-if-else.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatBadgeModule } from '@angular/material/badge';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent,
    NavbarComponent,
    HomeComponent,
    NgIfElseComponent,
    NgSwitchComponent,
    NgForComponent,
    PipesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatBadgeModule,
  ],
  providers: [CoursesServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
