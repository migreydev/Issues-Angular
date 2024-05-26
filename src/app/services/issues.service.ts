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

  addIssue(issue : Omit<Issue, '_id'>): Observable<Issue> {
    return this.http.post<Issue>(this.issuesUrl,issue);
  }

  getIssueById(_id : string): Observable<Issue>{
    const url = `${this.issuesUrl}/${_id}`;
    return this.http.get<Issue>(url);
  }

  editIssue(_id : string, issue: Issue): Observable<Issue>{
    const url = `${this.issuesUrl}/${_id}`;
    return this.http.put<Issue>(url,issue);
  }
}
