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
   * Function which disconect the user when the logpage is displayed
   * 
   * Call the functions in auth.service.ts for login management
   */
  ngOnInit() : void{
    if(this.authService.isLoggedIn() === true){
      this.authService.logOut();
    }
  }

  /**
   * Login function
   * 
   * 
   * Go to the main page if the login is successful
   * Print a error text else
   */
  log(): void {
    if (this.userLog == this.username && this.userPass == this.password) {
      /*
        Go to the main page if the logs are corrects
        queryparams -> params to inject in the target page
      */
      this.authService.login();
      this.authService.setUsername(this.userLog);
      this.router.navigate(['pagePrincipale']); 
    } 
    else {
      this.cache = false;
    }
  }
}
