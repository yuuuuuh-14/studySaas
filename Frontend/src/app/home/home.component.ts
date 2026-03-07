import { Component, inject } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-home',
  template: `
    <div class="page-container animate-fade-in">
      <header class="page-header">
        <h1 class="title" style="background: linear-gradient(135deg, #F472B6, #8B5CF6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          {{ lang.translate('home.title') }}
        </h1>
        <p class="subtitle">{{ lang.translate('home.subtitle') }}</p>
      </header>
      
      <div class="glass-panel" style="padding: 4rem; text-align: center; border-color: rgba(139, 92, 246, 0.3);">
        <h2 style="margin-bottom: 2rem; font-size: 2rem;">{{ lang.translate('home.cta.title') }}</h2>
        <p style="color: var(--text-muted); margin-bottom: 3rem; max-width: 600px; margin-left: auto; margin-right: auto;">
          {{ lang.translate('home.cta.desc') }}
        </p>
        <div style="display: flex; gap: 2rem; justify-content: center;">
          <a routerLink="/workbook" class="action-btn" style="background: linear-gradient(135deg, #60A5FA, #3B82F6);">
             {{ lang.translate('nav.workbook') }}
          </a>
          <a routerLink="/practice" class="action-btn" style="background: linear-gradient(135deg, #34D399, #10B981);">
             {{ lang.translate('nav.practice') }}
          </a>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {
  public lang = inject(LanguageService);
}

