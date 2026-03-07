import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const translations: any = {
  Kor: {
    'nav.home': '홈',
    'nav.workbook': '워크북',
    'nav.practice': '연습',
    'home.title': 'LetsStudySaaS에 오신 것을 환영합니다',
    'home.subtitle': '최신 풀스택 개발을 위한 최고의 장소입니다.',
    'home.cta.title': '스택을 마스터할 준비가 되셨나요?',
    'home.cta.desc': '핵심 개념을 배우기 위해 워크북을 탐험하거나, 실시간 API 연결을 테스트하기 위해 프랙티스 존으로 들어가보세요.',
    'workbook.title': '러닝 워크북',
    'workbook.subtitle': 'Angular, FastAPI, Supabase 통합 마스터하기.',
    'practice.title': '연습 존',
    'practice.subtitle': 'Angular, FastAPI, Supabase 간의 실시간 상호작용 테스트.',
    'system.health': '시스템 상태 체크',
    'system.check': '연결 확인',
    'system.checking': '확인 중...',
    'system.online': '온라인',
    'system.offline': '오프라인'
  },
  Eng: {
    'nav.home': 'Home',
    'nav.workbook': 'Workbook',
    'nav.practice': 'Practice',
    'home.title': 'Welcome to LetsStudySaaS',
    'home.subtitle': 'The ultimate playground for modern Full-stack development.',
    'home.cta.title': 'Ready to master the stack?',
    'home.cta.desc': 'Explore our interactive workbook to learn the core concepts, or jump into the practice zone to test your live API connections.',
    'workbook.title': 'Learning Workbook',
    'workbook.subtitle': 'Mastering Angular, FastAPI, and Supabase integration.',
    'practice.title': 'Practice Zone',
    'practice.subtitle': 'Test live interactions between Angular, FastAPI, and Supabase.',
    'system.health': 'System Health Check',
    'system.check': 'Check Connection',
    'system.checking': 'Checking...',
    'system.online': 'Online',
    'system.offline': 'Offline'
  }
};

export type Language = 'Kor' | 'Eng';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<Language>('Kor');
  currentLang$ = this.languageSubject.asObservable();

  setLanguage(lang: Language) {
    this.languageSubject.next(lang);
  }

  get currentLang() {
    return this.languageSubject.value;
  }

  translate(key: string): string {
    return translations[this.currentLang][key] || key;
  }
}

