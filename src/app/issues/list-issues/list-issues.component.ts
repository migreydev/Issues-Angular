import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list-issues',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './list-issues.component.html'
})
export class ListIssuesComponent {

}
