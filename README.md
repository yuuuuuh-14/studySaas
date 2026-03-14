# LetsStudySaaS Project

이 프로젝트는 Angular 프론트엔드와 Python FastAPI 백엔드로 구성된 학습용 SaaS 플랫폼입니다.
Supabase를 데이터베이스로 사용하며 Netlify에 Monorepo 형태로 배포됩니다.

## 디렉토리 구조
- `Frontend/`: Angular + Webpack 애플리케이션
- `Backend/`: Python FastAPI 애플리케이션 (Netlify Functions 용으로 설계됨)

## 로컬 개발 환경 실행 방법 (Windows 기준)

### 요구사항
- [Node.js](https://nodejs.org/) (v18 이상 권장)
- [Python](https://www.python.org/) (v3.9 이상 권장)
- [Yarn](https://yarnpkg.com/) (패키지 매니저)
- Netlify CLI: `yarn global add netlify-cli`

### 1. 백엔드 설정 (FastAPI)
```powershell
cd Backend
python -m venv venv

# Windows (PowerShell)
.\venv\Scripts\Activate.ps1

# Windows (CMD)
.\venv\Scripts\activate.bat

pip install -r requirements.txt
```

### 2. 프론트엔드 설정 (Angular)
```powershell
cd Frontend
yarn install
```

### 3. 전체 로컬 실행 (Netlify Dev 방식)
프로젝트 루트 디렉토리(`LetsStudySaaS`)에서 아래 명령어를 실행하면 Angular 앱과 Python 백엔드가 동시에 실행됩니다.
```powershell
netlify dev
```

### 개별 실행 방법
- **프론트엔드**: `cd Frontend; yarn start` (http://localhost:4201)
- **백엔드**: `cd Backend; .\venv\Scripts\Activate.ps1; uvicorn main:app --port 8080 --reload` (http://localhost:8080)

> [!TIP]
> PowerShell에서 스크립트 실행 권한 문제가 발생할 경우, 관리자 권한으로 PowerShell을 열고 `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` 명령어를 실행하세요.

