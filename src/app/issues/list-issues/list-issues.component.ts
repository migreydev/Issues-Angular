import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { IssuesService } from '../../services/issues.service';
import { Issue, Main } from '../../interfaces/issue';
import { CommonModule } from '@angular/common';
import { SelectTypeComponent } from "../select-type/select-type.component";

@Component({
    selector: 'app-list-issues',
    standalone: true,
    templateUrl: './list-issues.component.html',
    imports: [RouterOutlet, RouterLink, CommonModule, SelectTypeComponent]
})
export class ListIssuesComponent implements OnInit{

  constructor(private issueService : IssuesService,
              private router: Router
  ){}

  @Input() typeRecibido : string = '';

  ngOnInit(): void {
    this.getIssues();
    this.typeRecibido;
  }


  issues: Issue[] = [];


  getIssues() {
    this.issueService.getIssues().subscribe((response: Main) => {
      this.issues = response.issues;
    });
  }

  editIssue(_id: string){
    this.router.navigate(['/add', _id]);
  }
  
  

}
