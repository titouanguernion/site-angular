import { Routes } from '@angular/router';
import { User } from './user/user';
import { PagePrincipale } from './page-principale/page-principale';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    {path: 'pagePrincipale', component:PagePrincipale}, 
    {path:'', component:User}, 
    {path:'**', component:NotFound}
];
