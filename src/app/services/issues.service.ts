import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Issue, Main } from '../interfaces/issue';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor(private http: HttpClient) { }


  private issuesUrl = 'https://issues-xi.vercel.app/api/issues';
  private issues: Issue[] = [];


  getIssues() {
    return this.http.get<Main>(this.issuesUrl);
  }
}
