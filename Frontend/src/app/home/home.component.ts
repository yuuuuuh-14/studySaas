import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="page-container animate-fade-in">
      <header class="page-header">
        <h1 class="title" style="background: linear-gradient(135deg, #F472B6, #8B5CF6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          Welcome to LetsStudySaaS
        </h1>
        <p class="subtitle">The ultimate playground for modern Full-stack development.</p>
      </header>
      
      <div class="glass-panel" style="padding: 4rem; text-align: center; border-color: rgba(139, 92, 246, 0.3);">
        <h2 style="margin-bottom: 2rem; font-size: 2rem;">Ready to master the stack?</h2>
        <p style="color: var(--text-muted); margin-bottom: 3rem; max-width: 600px; margin-left: auto; margin-right: auto;">
          Explore our interactive workbook to learn the core concepts, or jump into the practice zone to test your live API connections.
        </p>
        <div style="display: flex; gap: 2rem; justify-content: center;">
          <a routerLink="/workbook" class="action-btn" style="background: linear-gradient(135deg, #60A5FA, #3B82F6);">Go to Workbook</a>
          <a routerLink="/practice" class="action-btn" style="background: linear-gradient(135deg, #34D399, #10B981);">Practice Zone</a>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {}
