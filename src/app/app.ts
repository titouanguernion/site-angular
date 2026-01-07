import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, RouterModule  } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
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
