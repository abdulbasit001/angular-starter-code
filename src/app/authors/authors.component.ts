import { Component } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: 'author.component.html',
})
export class AuthorsComponent {
  allAuthors = [{ name: 'Author' }, { name: 'Author' }, { name: 'Author' }];
}
