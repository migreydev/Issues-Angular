import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IssuesService } from '../../services/issues.service';
import { Issue } from '../../interfaces/issue';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListIssuesComponent } from "../list-issues/list-issues.component";

@Component({
    selector: 'app-form-issues',
    standalone: true,
    templateUrl: './form-issues.component.html',
    imports: [FormsModule, ListIssuesComponent]
})
export class FormIssuesComponent implements OnInit{

  constructor(private issueService : IssuesService,
              private router: Router,
              private route: ActivatedRoute
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

  issueEdit : Issue = {
    description: '',
    status: '',
    title: '',
    __v:  0,
    _id: ''

  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.modeEdit = true;
        this.getIssueByID(id);
      }
    });
  }


  getIssueByID(id: string): void {
    this.issueService.getIssueById(id).subscribe({
      next: (response) => {
        this.issueEdit = response.issue; 
        console.log('Datos de la incidencia:', this.issueEdit);
      },
      error: error => {
        console.error('Error', error);
      }
    });
  }


  
  onSubmit() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      if (this.modeEdit){

        this.issueService.editIssue(id, this.issueEdit).subscribe({
          next: issue =>{
            this.edit = "La incidencia se edito correctamente";
          },
          error: error =>{
            console.error('Error al añadir la incidencia:', error);
          }
        })

      }else {

        this.issueService.addIssue(this.issue).subscribe({
          next: issue => {
            this.add = 'La incidencia se añadió correctamente';
            this.router.navigate(['/issues']);
          },
          error: error => {
            console.error('Error al añadir la incidencia:', error);
          }
        });
      }
    })
  }


}
