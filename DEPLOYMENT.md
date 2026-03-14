# 🌐 LetsStudySaaS 배포 가이드

이 가이드는 GitHub 관리, Netlify 배포, 그리고 Supabase 연동을 성공적으로 완료하기 위한 상세 지침입니다.

---

## 1️⃣ GitHub 저장소 설정

코드를 클라우드에 안전하게 보관하고 Netlify와 연동하기 위해 GitHub에 푸시합니다.

1. **GitHub 로그인** 후 [새 저장소(New repository)](https://github.com/new)를 생성합니다.
2. 저장소 이름(예: `LetsStudySaaS`)을 입력하고 **Create repository**를 클릭합니다.
3. 로컬 프로젝트 루트에서 다음 명령어를 실행합니다:
   ```powershell
   git remote add origin https://github.com/사용자이름/저장소이름.git
   git push -u origin master
   ```

---

## 2️⃣ Netlify 사이트 배포

Netlify를 통해 프론트엔드 호스팅과 서버리스 백엔드를 구축합니다.

1. **[Netlify Dashboard](https://app.netlify.com/)** 접속 후 **Add new site** > **Import an existing project**를 선택합니다.
2. **GitHub**을 선택하고 방금 만든 저장소를 인증 및 연결합니다.
3. **Site configuration** 설정:
   - **Branch to deploy**: `master`
   - **Build command**: `cd Frontend && yarn install && yarn build`
   - **Publish directory**: `Frontend/dist`
4. **Deploy site**를 클릭합니다. (API는 환경 변수 설정 후 작동합니다.)

---

## 3️⃣ Supabase 연동 및 환경 변수 설정

가장 중요한 단계입니다. 백엔드가 데이터베이스와 안전하게 통신할 수 있도록 설정합니다.

1. **[Supabase Dashboard](https://app.supabase.com/)**에서 프로젝트 선택 후 **Project Settings** > **API**로 이동합니다.
2. 다음 두 값을 안전한 곳에 복사합니다:
   - `Project URL`
   - `anon public` (기본 API 키)
3. **Netlify Dashboard** > **Site configuration** > **Environment variables** 메뉴로 이동합니다.
4. **Add a variable**를 클릭하여 다음 변수들을 추가합니다:
   - `SUPABASE_URL`: (복사한 Project URL)
   - `SUPABASE_KEY`: (복사한 API Key)
5. **Deploys** 메뉴에서 **Trigger deploy** > **Clear cache and deploy site**를 클릭하여 설정을 적용합니다.

---

## 4️⃣ 서비스 정상 작동 확인

배포된 Netlify URL로 접속하여 다음 사항을 확인합니다.

- **Frontend**: 웹 화면이 정상적으로 로드되는지 확인합니다.
- **Backend API**: `https://사이트이름.netlify.app/api/health` 접속 시 `{"status": "ok"}`가 반환되는지 확인합니다.

> [!IMPORTANT]
> **보안 주의사항**: `SUPABASE_KEY`는 절대 코드에 직접 하드코딩하지 마십시오. 반드시 Netlify 환경 변수 기능을 이용해야 합니다.

> [!TIP]
> 이제 `main` 브랜치에 코드를 `git push` 할 때마다 Netlify가 자동으로 신규 버전을 빌드 및 배포합니다.

