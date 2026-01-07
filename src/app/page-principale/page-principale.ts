import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service';



@Component({
  selector: 'app-page-principale',
  imports: [CommonModule],
  templateUrl: './page-principale.html',
  styleUrl: './page-principale.css',
})
export class PagePrincipale {
  username:string | null='';
  liste=[1,2,4,5,6];
  lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
        anim id est laborum.`;


  // constucteur de la route
  constructor(private route: ActivatedRoute, private authService:AuthService) {}

  ngOnInit(): void {
    // Récupération du username pour injecter dans le template
    this.username = this.authService.getUsername();
  }
  
  afficherRegle = false;
  afficher() : void{
    this.afficherRegle = !this.afficherRegle;
  }


}
