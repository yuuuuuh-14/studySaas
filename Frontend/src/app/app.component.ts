import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Study SaaS - Angular Version</h1>
      <p>Welcome to the newly migrated Angular frontend!</p>
      <nav>
        <a routerLink="/">Home</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    nav a {
      margin-right: 10px;
    }
  `]
})
export class AppComponent {}
