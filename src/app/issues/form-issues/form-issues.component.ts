import { Component } from '@angular/core';
import { IssuesService } from '../../services/issues.service';
import { Issue } from '../../interfaces/issue';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-issues',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-issues.component.html'
})
export class FormIssuesComponent {

  constructor(private issueService : IssuesService,
              private router: Router
  ){}

  modeEdit : boolean = false;
  error : string = '';
  add: string = '';
  edit: string = '';

  issue: Omit<Issue, '_id'> = {
    title: '',
    description: '',
    status: 'abierta',
    __v:  0
  }

  onSubmit() {
    this.issueService.addIssue(this.issue).subscribe(
      () => {
        this.add = 'La incidencia se añadió correctamente';
        //this.router.navigate(['/issues']);
      },
      (error) => {
        console.error('Error al añadir la incidencia:', error);
      }
    );
  }
  

}
