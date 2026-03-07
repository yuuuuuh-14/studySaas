# LetsStudySaaS 배포 가이드

이 문서는 LetsStudySaaS 프로젝트를 Netlify에 배포하는 방법을 설명합니다.

## 1. 전제 조건
- [Netlify 계정](https://www.netlify.com/)이 필요합니다.
- [GitHub](https://github.com/) 저장소에 코드가 푸시되어 있어야 합니다.
- [Supabase](https://supabase.com/) 프로젝트가 생성되어 있어야 하며, API URL과 Key가 필요합니다.

## 2. 환경 변수 설정
Netlify 배포 시 백엔드가 Supabase와 통신하기 위해 환경 변수를 설정해야 합니다.

1. Netlify Dashboard 로그인
2. **Site configuration** > **Environment variables** 메뉴로 이동
3. 다음 변수들을 추가합니다:
   - `SUPABASE_URL`: Supabase 프로젝트의 API URL
   - `SUPABASE_KEY`: Supabase 프로젝트의 anon key 또는 service_role key

## 3. Netlify 설정 파일 확인 (`netlify.toml`)
프로젝트 루트의 `netlify.toml` 파일이 다음과 같이 설정되어 있는지 확인하세요. (React + FastAPI Monorepo 구조용)

```toml
[build]
  command = "yarn --cwd Frontend run build"
  publish = "Frontend/dist"

[functions]
  directory = "netlify/functions"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/api/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

> [!IMPORTANT]
> 현재 `netlify.toml`의 `publish` 경로가 잘못되어 있을 수 있으니 반드시 `Frontend/dist`로 설정되어 있는지 확인하세요.

## 4. 백엔드(Functions) 배포 준비
Netlify는 `netlify/functions` 디렉토리에 있는 파일을 서버리스 함수로 인식합니다. FastAPI를 연동하기 위해 다음 단계를 거칩니다.

1. 루트 디렉토리에 `netlify/functions` 폴더가 있는지 확인합니다.
2. `netlify/functions/api.py` 파일을 생성하고 아래 내용을 작성합니다. (기존 `Backend/main.py`의 핸들러를 연결하는 역할)

```python
import sys
import os

# Backend 디렉토리를 path에 추가하여 모듈을 찾을 수 있게 함
sys.path.append(os.path.join(os.path.dirname(__file__), "../../Backend"))

from main import handler
```

3. 루트 디렉토리에도 `requirements.txt`가 있거나, Netlify가 `Backend/requirements.txt`를 읽을 수 있도록 설정해야 합니다. (가장 쉬운 방법은 루트에 `requirements.txt`를 두는 것입니다.)

## 5. 배포 실행

### 방법 A: GitHub 연동 (권장)
GitHub 저장소를 Netlify 사이트에 연결하면, `main` 브랜치에 코드를 푸시할 때마다 자동으로 빌드 및 배포가 진행됩니다.

### 방법 B: Netlify CLI 사용 (수동 배포)
로컬에서 직접 배포하려면 아래 명령어를 사용합니다.
```powershell
# 1. Netlify CLI 설치 (이미 있다면 생략)
npm install -g netlify-cli

# 2. Netlify 로그인
netlify login

# 3. 배포 (처음 실행 시 사이트 연결 단계 진행)
netlify deploy --build
```
*배포 후 결과가 만족스러우면 `--prod` 플래그를 붙여 프로덕션에 반영합니다.*

## 6. 문제 해결 (Troubleshooting)
- **API 호출 시 404 에러**: `netlify.toml`의 리다이렉트 설정과 함수의 파일명(`api.py`)이 일치하는지 확인하세요.
- **Python 의존성 에러**: Netlify 빌드 로그에서 `pip install` 과정을 확인하세요. 필요한 라이브러리(`fastapi`, `mangum`, `supabase` 등)가 `requirements.txt`에 모두 포함되어 있어야 합니다.
