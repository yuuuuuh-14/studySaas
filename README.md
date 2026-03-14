# 🚀 LetsStudySaaS

이 프로젝트는 **Angular** 프론트엔드와 **FastAPI** 백엔드로 구성된 현대적인 학습용 SaaS 플랫폼입니다. **Supabase**를 활용한 강력한 데이터 관리와 **Netlify**를 통한 원활한 배포를 목표로 설계되었습니다.

[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)

---

## ✨ 핵심 기능
- **FastAPI 기반 고성능 API**: 비동기 처리를 지원하는 가벼운 백엔드
- **Angular 모던 프론트엔드**: Webpack 5와 TypeScript 기반의 견고한 아키텍처
- **Supabase 연동**: 실시간 데이터베이스 및 인증 시스템 활용 가능
- **Netlify Functions**: 서버리스 환경에 최적화된 백엔드 배포

---

## 📂 프로젝트 구조

```text
LetsStudySaaS/
├── Frontend/           # Angular + Webpack 애플리케이션
│   ├── src/            # 소스 코드
│   └── webpack.config.js
├── Backend/            # Python FastAPI 애플리케이션
│   ├── main.py         # API 엔트리포인트
│   └── database.py     # Supabase 연동 설정
├── netlify/
│   └── functions/      # Netlify 서버리스 함수 (api.py)
├── netlify.toml        # Netlify 설정 파일
└── DEPLOYMENT.md       # 상세 배포 가이드
```

---

## 🛠️ 로컬 개발 환경 설정

### 사전 요구사항
- **Node.js**: v18.0.0 이상
- **Python**: v3.9.0 이상
- **Yarn**: 패키지 매니저
- **Netlify CLI**: `npm install -g netlify-cli`

### 1. 백엔드 설정 (Backend)
```powershell
cd Backend
python -m venv venv

# Windows (PowerShell)
.\venv\Scripts\Activate.ps1

pip install -r requirements.txt
```

### 2. 프론트엔드 설정 (Frontend)
```powershell
cd Frontend
yarn install
```

### 3. 전체 실행 (Netlify Dev)
프로젝트 루트 디렉토리에서 아래 명령어를 실행하면 프론트엔드와 백엔드가 연동된 상태로 동시 실행됩니다.
```powershell
netlify dev
```
- **프론트엔드 접속**: [http://localhost:8888](http://localhost:8888) (Netlify Proxy) 또는 [http://localhost:4201](http://localhost:4201)
- **백엔드 API 확인**: [http://localhost:8888/api/health](http://localhost:8888/api/health)

---

## 📋 핵심 명령어 요약

| 구성 요소 | 명령어 | 포트 |
| :--- | :--- | :--- |
| **전체 (Proxy)** | `netlify dev` | 8888 |
| **프론트엔드** | `cd Frontend && yarn start` | 4201 |
| **백엔드 (직접)** | `cd Backend && uvicorn main:app --port 8080 --reload` | 8080 |

---

## 📄 라이선스
이 프로젝트는 **GNU Affero General Public License v3.0**에 따라 라이선스가 부여됩니다. 자세한 내용은 `LICENSE` 파일을 확인하세요.
