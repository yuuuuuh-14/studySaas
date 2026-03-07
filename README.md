# LetsStudySaaS Project

이 프로젝트는 Angular 프론트엔드와 Python FastAPI 백엔드로 구성된 학습용 SaaS 플랫폼입니다.
Supabase를 데이터베이스로 사용하며 Netlify에 Monorepo 형태로 배포됩니다.

## 디렉토리 구조
- `Frontend/`: Angular 애플리케이션
- `Backend/`: Python FastAPI 애플리케이션 (Netlify Functions 용으로 설계됨)

## 로컬 개발 환경 실행 방법

### 요구사항
- Node.js (v18 이상 권장)
- Angular CLI (`yarn global add @angular/cli`)
- Python (v3.9 이상 권장)
- Netlify CLI (`yarn global add netlify-cli`)

### 1. 백엔드 설정 (FastAPI)
```bash
cd Backend
python -m venv venv
# Windows
.\venv\Scripts\activate
# Mac/Linux
source venv/bin/activate
pip install -r requirements.txt
```

### 2. 프론트엔드 설정 (Angular)
```bash
cd Frontend
yarn install
```

### 3. 전체 로컬 실행 (Netlify Dev 방식)
프로젝트 루트 디렉토리(`LetsStudySaaS`)에서 아래 명령어를 실행하면,
Angular 앱과 Python 백엔드(서버리스 함수 에뮬레이션)가 동시에 실행됩니다.
```bash
yarn global add netlify-cli
netlify dev
```

또는 각각 개별 실행하려면:
- 프론트엔드: `cd Frontend && yarn start` (http://localhost:4200)
- 백엔드: `cd Backend && uvicorn main:app --reload` (http://localhost:8000)
