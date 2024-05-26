import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IssuesService } from '../../services/issues.service';
import { Issue, Main } from '../../interfaces/issue';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-issues',
  standalone: true,
  imports: [RouterOutlet,RouterLink, CommonModule ],
  templateUrl: './list-issues.component.html'
})
export class ListIssuesComponent implements OnInit{

  constructor(private issueService : IssuesService){}

  ngOnInit(): void {
    this.getIssues();
  }


  issues: Issue[] = [];


  getIssues() {
    this.issueService.getIssues().subscribe((response: Main) => {
      this.issues = response.issues;
    });
  }
  

}
