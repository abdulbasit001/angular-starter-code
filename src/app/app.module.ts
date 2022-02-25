import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
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
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesProviderService } from './Services/employees-provider.service';
import { Employee2Component } from './employee2/employee2.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    NavbarComponent,
    HomeComponent,
    NgIfElseComponent,
    NgSwitchComponent,
    NgForComponent,
    PipesComponent,
    EmployeesComponent,
    Employee2Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatBadgeModule,
  ],
  providers: [
    EmployeesProviderService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
