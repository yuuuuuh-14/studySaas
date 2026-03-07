import { Component, inject } from '@angular/core';
import { LanguageService, Language } from './language.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-layout">
      <nav class="main-nav glass-panel animate-fade-in">
        <div class="nav-content">
          <a routerLink="/" class="logo">LetsStudySaaS</a>
          <div class="nav-links">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
              {{ lang.translate('nav.home') }}
            </a>
            <a routerLink="/workbook" routerLinkActive="active">
              {{ lang.translate('nav.workbook') }}
            </a>
            <a routerLink="/practice" routerLinkActive="active">
              {{ lang.translate('nav.practice') }}
            </a>
          </div>
          <div class="lang-switcher">
            <button (click)="setLang('Eng')" [class.active]="lang.currentLang === 'Eng'">Eng</button>
            <span class="divider"></span>
            <button (click)="setLang('Kor')" [class.active]="lang.currentLang === 'Kor'">Kor</button>
          </div>
        </div>
      </nav>

      <main class="content-wrapper">
        <router-outlet></router-outlet>
      </main>

      <footer class="main-footer">
        <p>© 2026 LetsStudySaaS. Built with Angular & FastAPI.</p>
      </footer>
    </div>
  `,
  styles: [`
    .app-layout { min-height: 100vh; display: flex; flex-direction: column; padding: 20px; }
    .main-nav {
      position: sticky; top: 20px; z-index: 1000;
      padding: 0.75rem 2rem; margin-bottom: 2rem;
      border-radius: 100px; /* Pill shape */
    }
    .nav-content { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; width: 100%; }
    .logo { font-size: 1.25rem; font-weight: 800; text-decoration: none; color: white; letter-spacing: -0.5px; }
    .nav-links { display: flex; gap: 1rem; }
    .nav-links a { 
      text-decoration: none; color: var(--text-muted); font-weight: 600; 
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
      padding: 0.5rem 1.25rem; border-radius: 100px;
      font-size: 0.95rem;
    }
    .nav-links a:hover { color: white; background: rgba(255,255,255,0.05); }
    .nav-links a.active { 
      color: white; 
      background: var(--primary); 
      box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
    }
    .lang-switcher { display: flex; align-items: center; gap: 0.25rem; background: rgba(0,0,0,0.3); padding: 4px; border-radius: 100px; border: 1px solid var(--glass-border); }
    .lang-switcher button { 
      background: none; border: none; color: var(--text-muted); cursor: pointer; 
      padding: 4px 12px; border-radius: 100px;
      font-size: 0.75rem; font-weight: 700; transition: all 0.2s; font-family: inherit;
    }
    .lang-switcher button:hover { color: white; }
    .lang-switcher button.active { 
      background: rgba(255,255,255,0.15); 
      color: white; 
    }
    .divider { width: 1px; height: 12px; background: var(--glass-border); display: none; } /* Hidden in new pill design */
    .content-wrapper { flex: 1; max-width: 1200px; margin: 0 auto; width: 100%; padding-top: 1rem; }
    .main-footer { text-align: center; padding: 3rem 0; color: var(--text-muted); font-size: 0.85rem; }

  `]
})
export class AppComponent {
  public lang = inject(LanguageService);

  setLang(lang: Language) {
    this.lang.setLanguage(lang);
  }
}



