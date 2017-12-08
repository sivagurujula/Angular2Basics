import {Component} from '@angular/core';
import {AuthorService} from './author.service';
import {AutoGrowDirective} from './autogrow.directive';

@Component({
    selector: 'app-authors',
    templateUrl: './author.component.html',
    providers: [AuthorService]
})
export class AuthorComponent {
    title = 'Authors';
    authors;
    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
        console.log('AuthorComponent constructor');
    }
}
