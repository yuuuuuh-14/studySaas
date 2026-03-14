# 🌐 LetsStudySaaS 따로 배포 가이드 (Vercel)

프론트엔드와 백엔드를 각각 별도의 Vercel 프로젝트로 배포하는 설정입니다.

---

## 🔵 1. 프론트엔드 배포 (Frontend)

1.  Vercel에서 **New Project** 생성 -> 저장소 선택.
2.  **Root Directory**: `Frontend`로 설정 (Edit 버튼 클릭 후 선택).
3.  **Build Settings**:
    *   Framework Preset: `Other` (또는 Angular 감지됨)
    *   Build Command: `yarn install && yarn build`
    *   Output Directory: `dist`
4.  **[중요] API 연결**:
    *   `Frontend/vercel.json` 파일 내의 `destination` 주소를 실제 배포된 **백엔드 Vercel URL**로 수정하여 푸시하세요. 그래야 프론트엔드에서 백엔드로 API 호출이 전달됩니다.

---

## 🟢 2. 백엔드 배포 (Backend)

1.  Vercel에서 **또 다른 New Project** 생성 -> 동일한 저장소 선택.
2.  **Root Directory**: `./` (기본값)로 설정.
3.  **Build Settings**:
    *   Build Command: `exit 0` (빌드 생략)
    *   Output Directory: (비워둠)
4.  **Environment Variables**:
    *   `SUPABASE_URL`: (Supabase 주소)
    *   `SUPABASE_KEY`: (Supabase API 키)

---

## ⚠️ 에러 해결 (cd Frontend 오류)
만약 빌드 중 `cd: Frontend: No such file or directory` 에러가 발생한다면, Vercel 설정에서 **Root Directory**가 이미 `Frontend`로 설정되어 있는데 **Build Command**에 또 `cd Frontend`가 포함되어 있기 때문입니다. 

**해결**: 설정의 Build Command를 `yarn install && yarn build`로 수정하세요.

---

## 4️⃣ 정상 작동 확인
- **백엔드**: `https://backend-url.vercel.app/api/health` -> `{"status": "ok"}`
- **프론트엔드**: `https://frontend-url.vercel.app` 접속 및 기능 확인.
