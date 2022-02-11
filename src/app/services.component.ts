import { Component } from '@angular/core';
@Component({
  template: '',
})
export class CoursesServices {
  courses = ['HTML5', 'CSS3', 'JS'];
  getCourses() {
    return this.courses;
  }
}
