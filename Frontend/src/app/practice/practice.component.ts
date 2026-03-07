import { Component, inject } from '@angular/core';
import { LanguageService } from '../language.service';
import axios from 'axios';

@Component({
  selector: 'app-practice',
  template: `
    <div class="page-container animate-fade-in">
      <header class="page-header">
        <h1 class="title">{{ lang.translate('practice.title') }}</h1>
        <p class="subtitle">{{ lang.translate('practice.subtitle') }}</p>
      </header>

      <div class="status-container glass-panel">
        <h2>{{ lang.translate('system.health') }}</h2>
        <div class="endpoint-status">
          <div class="status-indicator" [ngClass]="{
            'online': backendStatus === 'Online',
            'loading': backendStatus === 'Checking...',
            'error': backendStatus === 'Offline'
          }"></div>
          <span class="status-text">
            Backend API (FastAPI): <strong>{{ backendStatus === 'Online' ? lang.translate('system.online') : backendStatus === 'Checking...' ? lang.translate('system.checking') : lang.translate('system.offline') }}</strong>
          </span>
        </div>

        <button
          class="action-btn"
          (click)="checkHealth()"
          [disabled]="isLoading"
        >
          {{ isLoading ? lang.translate('system.checking') : lang.translate('system.check') }}
        </button>
      </div>

      <div *ngIf="healthData" class="data-container glass-panel animate-fade-in">
        <h3>API Response:</h3>
        <pre class="json-display">{{ healthData | json }}</pre>
      </div>
    </div>
  `,
  styles: [`
    .page-container { max-width: 800px; margin: 0 auto; }
    .page-header { text-align: center; margin-bottom: 3rem; }
    .title {
      font-size: 3rem;
      background: linear-gradient(135deg, #34D399, #10B981);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1rem;
    }
    .subtitle { font-size: 1.25rem; color: var(--text-muted); }
    .status-container, .data-container { padding: 2.5rem; margin-bottom: 2rem; text-align: center; }
    .status-container h2, .data-container h3 { margin-bottom: 1.5rem; }
    .endpoint-status {
      display: flex; align-items: center; justify-content: center; gap: 1rem; font-size: 1.2rem;
      margin-bottom: 2rem; padding: 1rem; background: rgba(0, 0, 0, 0.2); border-radius: 8px;
    }
    .status-indicator {
      width: 16px; height: 16px; border-radius: 50%; background-color: var(--text-muted);
      box-shadow: 0 0 10px rgba(148, 163, 184, 0.5);
    }
    .status-indicator.online { background-color: #10B981; box-shadow: 0 0 15px rgba(16, 185, 129, 0.7); }
    .status-indicator.error { background-color: #EF4444; box-shadow: 0 0 15px rgba(239, 68, 68, 0.7); }
    .status-indicator.loading {
      background-color: #F59E0B; box-shadow: 0 0 15px rgba(245, 158, 11, 0.7);
      animation: pulse 1.5s infinite;
    }
    @keyframes pulse {
      0% { opacity: 0.6; transform: scale(0.9); }
      50% { opacity: 1; transform: scale(1.1); }
      100% { opacity: 0.6; transform: scale(0.9); }
    }
    .action-btn {
      background: linear-gradient(135deg, var(--primary), var(--primary-hover));
      color: white; border: none; padding: 1rem 2rem; font-size: 1.1rem;
      font-weight: 600; border-radius: 8px; cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      font-family: inherit;
    }
    .action-btn:hover:not([disabled]) { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(79, 70, 229, 0.4); }
    .action-btn[disabled] { opacity: 0.7; cursor: not-allowed; filter: grayscale(0.5); }
    .json-display {
      text-align: left; background: #0B1120; padding: 1.5rem; border-radius: 8px;
      overflow-x: auto; color: #E2E8F0; font-family: 'Consolas', 'Monaco', monospace;
      font-size: 0.95rem; border: 1px solid var(--border-color);
    }
  `]
})
export class PracticeComponent {
  public lang = inject(LanguageService);
  backendStatus: string = 'Offline';
  isLoading: boolean = false;
  healthData: any = null;

  async checkHealth() {
    this.isLoading = true;
    this.backendStatus = 'Checking...';
    this.healthData = null;

    try {
      const response = await axios.get('/api/health');
      this.backendStatus = 'Online';
      this.healthData = response.data;
    } catch (err) {
      this.backendStatus = 'Offline';
      console.error('API Error:', err);
    } finally {
      this.isLoading = false;
    }
  }
}

