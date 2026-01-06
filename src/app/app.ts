import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css', 
  standalone: true,
})
export class App {
  protected readonly title = signal('site');


  constructor(private router: Router) {} 

  goLog(): void {
    this.router.navigate(['']);
  }


  goTo(link: string): void {
    window.open(link, '_blank');
  }
}
