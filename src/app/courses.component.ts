import { Component } from '@angular/core';
import { CoursesServices } from './services.component';
@Component({
  selector: 'courses',
  templateUrl: 'courses.component.html',
  styleUrls: ['courses.component.css'],
})
export class CourseComponent {
  title = 'list of courses1';
  courses;
  name = 'Abdul Basit';
  constructor(services: CoursesServices) {
    this.courses = services.getCourses();
  }
  getTitle() {
    return this.title;
  }
}
