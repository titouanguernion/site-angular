import { Routes } from '@angular/router';
import { User } from './user/user';
import { PagePrincipale } from './page-principale/page-principale';
import { NotFound } from './not-found/not-found';
import { AuthGuard } from './auth-guard';

export const routes: Routes = [
    {path: 'pagePrincipale', component:PagePrincipale, canActivate: [AuthGuard]}, 
    {path:'', component:User}, 
    {path:'**', component:NotFound}
];
