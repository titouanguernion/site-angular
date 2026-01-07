import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-page-secondaire',
  imports: [],
  templateUrl: './page-secondaire.html',
  styleUrl: './page-secondaire.css',
})
export class PageSecondaire {
  constructor(private router: Router, public authService: AuthService) {}

  username : string | null = null;

  ngOnInit(): void {
    this.username = this.authService.getUsername(); // récupérer l'username
  }

}
