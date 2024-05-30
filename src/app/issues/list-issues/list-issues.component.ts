import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { IssuesService } from '../../services/issues.service';
import { Issue, Main } from '../../interfaces/issue';
import { CommonModule } from '@angular/common';
import { SelectTypeComponent } from "../select-type/select-type.component";
import { FormIssuesComponent } from "../form-issues/form-issues.component";

@Component({
    selector: 'app-list-issues',
    standalone: true,
    templateUrl: './list-issues.component.html',
    imports: [RouterOutlet, RouterLink, CommonModule, SelectTypeComponent, FormIssuesComponent]
})
export class ListIssuesComponent implements OnInit{

  constructor(private issueService : IssuesService,
              private router: Router,
              private route: ActivatedRoute
  ){}

  @Input() typeRecibido : string = '';

  issues: Issue[] = [];
  mensaje: string = '';


  ngOnInit(): void {
    this.getIssues();
    this.typeRecibido;
  
  }

  getIssues() {
    this.issueService.getIssues().subscribe((response: Main) => {
      this.issues = response.issues;
    });
  }

  editIssue(_id: string){
    this.router.navigate(['/issues', _id]);
  }

  deleteIssue(id: string){

    this.issueService.deleteIssue(id).subscribe ({
      next: () => {
        this.mensaje = `La incidencia con el id: ${id} se ha eliminado correctamente`;
        this.getIssues();
      },
      error: error =>{
        console.error(`Error al eliminar la incidencia  con el id: ${id}`, error);
      }
    })
  }

}
