import { Routes } from '@angular/router';
import { HomeComponent } from './issues/home/home.component';
import { ListIssuesComponent } from './issues/list-issues/list-issues.component';
import { FormIssuesComponent } from './issues/form-issues/form-issues.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'issues', component:ListIssuesComponent,
        children: [
            {path: 'add', component:FormIssuesComponent}
        ]
    },
    {path: 'issues/:id', component:FormIssuesComponent}
];
