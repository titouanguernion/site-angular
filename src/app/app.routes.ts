import { Routes } from '@angular/router';
import { User } from './user/user';
import { PagePrincipale } from './page-principale/page-principale';
import { NotFound } from './not-found/not-found';
import { AuthGuard } from './auth-guard';
import { PageSecondaire } from './page-secondaire/page-secondaire';

export const routes: Routes = [
    {path: 'pagePrincipale', component:PagePrincipale, canActivate: [AuthGuard]}, // canActivate -> redirige vers la page de connexion SI pas connecté
    {path: 'pageSecondaire', component:PageSecondaire, canActivate: [AuthGuard]}, 
    {path:'', component:User}, 
    {path:'**', component:NotFound}
];
