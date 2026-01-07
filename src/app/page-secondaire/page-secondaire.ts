import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-page-secondaire',
  imports: [CommonModule],
  templateUrl: './page-secondaire.html',
  styleUrl: './page-secondaire.css',
})
export class PageSecondaire {
  constructor(private router: Router, public authService: AuthService) {}

  username : string | null = null;
  
  // Init the username variable to reuse it on the page
  ngOnInit(): void {
    this.username = this.authService.getUsername(); // getting of the username
  }

}
