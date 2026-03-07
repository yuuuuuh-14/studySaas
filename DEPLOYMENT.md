# LetsStudySaaS 배포 & 연동 가이드

이 가이드는 GitHub 연결, Netlify 배포, 그리고 Supabase 연동을 한 번에 완료하기 위한 단계별 지침입니다.

## 1. GitHub 저장소 생성 및 코드 푸시

현재 `master` 브랜치에 코드가 있습니다. 이를 GitHub에 올립니다.

1. **GitHub 로그인** 후 [새 저장소(New repository)](https://github.com/new)를 생성합니다.
2. 저장소 이름을 정하고(예: `studySaas`), **Create repository**를 누릅니다.
3. 로컬 프로젝트 루트(`studySaas/`)에서 다음 명령어를 실행합니다:
   ```powershell
   git remote add origin https://github.com/사용자이름/저장소이름.git
   git push -u origin master
   ```

## 2. Netlify에 사이트 연결

1. **Netlify Dashboard**에서 **Add new site** > **Import an existing project**를 선택합니다.
2. **GitHub**을 선택하고 방금 만든 저장소를 연결합니다.
3. **Site configuration**:
   - **Branch to deploy**: `master`
   - **Build command**: `cd Frontend && yarn install && yarn build`
   - **Publish directory**: `Frontend/dist`
4. **Deploy site**를 누릅니다. (아직 환경 변수가 없어 API는 작동하지 않지만 빌드는 시작됩니다.)

## 3. Supabase 연동 및 환경 변수 설정

가장 중요한 단계입니다. Netlify가 Supabase와 통신할 수 있게 설정해야 합니다.

1. **Supabase Dashboard**에서 프로젝트 선택 후 **Project Settings** > **API**로 이동합니다.
2. 다음 두 가지 값을 복사합니다:
   - `Project URL`
   - `anon public` (또는 `service_role key`)
3. **Netlify Dashboard**에서 방금 만든 사이트 선택 후:
   - **Site configuration** > **Environment variables** 메뉴 클릭
   - **Add a variable** > **Import from .env** 또는 개별 추가:
     - `SUPABASE_URL`: (복사한 Project URL)
     - `SUPABASE_KEY`: (복사한 API Key)
4. 설정을 저장한 후, **Deploys** 메뉴에서 **Trigger deploy** > **Clear cache and deploy site**를 눌러 다시 빌드합니다.

## 4. 최종 확인 및 실행

배포가 완료되면 Netlify가 제공하는 URL(예: `https://xxxx.netlify.app`)로 접속합니다.

- **프론트엔드**: "Study SaaS - Angular Version" 화면이 보입니다.
- **백엔드**: `https://xxxx.netlify.app/api/health`로 접속했을 때 `{"status": "ok"}`가 나오면 성공입니다.

> [!TIP]
> 이제 GitHub의 `master` 브랜치에 코드를 푸시할 때마다 Netlify가 자동으로 다시 배포합니다.

