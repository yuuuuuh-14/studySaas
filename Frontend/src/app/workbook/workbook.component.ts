import { Component, inject } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-workbook',
  template: `
    <div class="page-container animate-fade-in">
      <header class="page-header">
        <h1 class="title">{{ lang.translate('workbook.title') }}</h1>
        <p class="subtitle">{{ lang.translate('workbook.subtitle') }}</p>
      </header>

      <div class="cards-grid">
        <div class="info-card glass-panel interactive-card">
          <div class="card-icon">🅰️</div>
          <h3>Angular Frontend</h3>
          <p>{{ lang.currentLang === 'Kor' ? '견고한 애플리케이션 구축을 위한 현대적인 컴포넌트 기반 UI 프레임워크입니다. 모듈, 서비스, RxJS에 대해 알아봅니다.' : 'Modern component-based UI framework for building robust applications. Learn about modules, services, and RxJS.' }}</p>
        </div>

        <div class="info-card glass-panel interactive-card">
          <div class="card-icon">⚡</div>
          <h3>FastAPI Backend</h3>
          <p>{{ lang.currentLang === 'Kor' ? '고성능 파이썬 웹 프레임워크입니다. 비동기 엔드포인트, 자동 문서화(Redoc), 서버리스 실행에 대해 살펴봅니다.' : 'High performance Python web framework. Explore asynchronous endpoints, automatic docs (Redoc), and serverless execution.' }}</p>
        </div>

        <div class="info-card glass-panel interactive-card">
          <div class="card-icon">🗄️</div>
          <h3>Supabase</h3>
          <p>{{ lang.currentLang === 'Kor' ? '오픈 소스 Firebase 대안입니다. PostgreSQL을 사용하여 데이터베이스, 인증, 엣지 함수를 네이티브하게 관리합니다.' : 'Open source Firebase alternative. Manage your database, authentication, and edge functions natively using PostgreSQL.' }}</p>
        </div>
      </div>

      <div class="content-section glass-panel">
        <h2>System Architecture</h2>
        <div class="architecture-diagram">
          <div class="node angular">Angular App (Webpack)</div>
          <div class="connector">→ Proxy API →</div>
          <div class="node fastapi">FastAPI (Netlify Functions)</div>
          <div class="connector">→ SDK →</div>
          <div class="node supabase">Supabase DB</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container { max-width: 1000px; margin: 0 auto; }
    .page-header { text-align: center; margin-bottom: 3rem; }
    .title {
      font-size: 3rem;
      background: linear-gradient(135deg, #60A5FA, #A78BFA);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1rem;
    }
    .subtitle { font-size: 1.25rem; color: var(--text-muted); }
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }
    .info-card { padding: 2rem; text-align: center; }
    .interactive-card { transition: transform 0.3s ease, box-shadow 0.3s ease; cursor: default; }
    .interactive-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
      border-color: rgba(255, 255, 255, 0.2);
    }
    .card-icon { font-size: 3rem; margin-bottom: 1rem; }
    .info-card h3 { font-size: 1.5rem; margin-bottom: 1rem; color: #fff; }
    .info-card p { color: var(--text-muted); font-size: 0.95rem; }
    .content-section { padding: 3rem; text-align: center; }
    .content-section h2 { font-size: 2rem; margin-bottom: 2rem; }
    .architecture-diagram { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 1rem; margin-top: 2rem; }
    .node { padding: 1rem 1.5rem; border-radius: 8px; font-weight: 600; font-size: 1.1rem; }
    .node.angular { background: rgba(221, 0, 49, 0.15); border: 1px solid #DD0031; color: #FF2B5C; }
    .node.fastapi { background: rgba(5, 153, 139, 0.15); border: 1px solid #05998b; color: #38E3D2; }
    .node.supabase { background: rgba(62, 207, 142, 0.15); border: 1px solid #3ECF8E; color: #8CFFC7; }
    .connector { color: var(--text-muted); font-weight: bold; }
  `]
})
export class WorkbookComponent {
  public lang = inject(LanguageService);
}

