import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, RouterModule  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './service/auth.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css', 
  standalone: true,
})
export class App {
  protected readonly title = signal('site');


  constructor(private router: Router, public authService: AuthService) {} 

  goLog(): void {
    this.router.navigate(['']);
  }


  goTo(link: string): void {
    window.open(link, '_blank');
  }
}
