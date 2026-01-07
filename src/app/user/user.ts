import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-user',
  standalone: true,       
  imports: [FormsModule], 
  templateUrl: './user.html',
  styleUrls: ['./user.css'], 
})
export class User {

  

  username = '';
  password = '';

  userLog = 'a';
  userPass = 'a';

  cache: boolean = true;

  // Constructeur du routeur
  constructor(private router: Router, private authService: AuthService) {}

  /**
   * Fonction de connection 
   * 
   * redirige vers la page si la connexion est faite, sinon affiche une alert qui ondique que la connexion a échoué
   */
  log(): void {
    if (this.userLog == this.username && this.userPass == this.password) {
      /*
        Redirige vers la page principage du site si les logs sont valides
        queryparams -> paramètres à injecter dans la nouvelle page
      */
      this.authService.login();
      this.router.navigate(['pagePrincipale'], { queryParams: { username: this.username } }); 
    } 
    else {
      this.cache = false;
    }
  }
}
