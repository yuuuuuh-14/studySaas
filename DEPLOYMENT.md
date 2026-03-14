# 🌐 LetsStudySaaS 분리 배포 가이드 (Vercel)

이 프로젝트는 프론트엔드와 백엔드가 각각 독립된 폴더(`Frontend/`, `Backend/`) 속에 자신만의 설정(`vercel.json`, `api/`)을 가지고 있습니다. Vercel에서 두 개의 프로젝트를 만들어 각각 배포하세요.

---

## 🔵 1. 프론트엔드 (Frontend) 배포
사용자 UI와 API 프록시를 담당합니다.

1.  Vercel에서 **New Project** 생성 -> 저장소 선택.
2.  **Root Directory**: **`Frontend`** 폴더를 선택하세요.
3.  **Build Settings**:
    *   Build Command: `yarn install && yarn build`
    *   Output Directory: `dist`
4.  **API 연결 설정**:
    *   배포 후 `Frontend/vercel.json`의 `destination` 주소를 실제 백엔드 주소로 수정하여 푸시하면 API가 연결됩니다.

---

## 🟢 2. 백엔드 (Backend) 배포
FastAPI 서버리스 함수를 배포합니다.

1.  Vercel에서 **또 다른 New Project** 생성 -> 저장소 선택.
2.  **Root Directory**: **`Backend`** 폴더를 선택하세요.
3.  **Build Settings**:
    *   Build Command: (비워둠)
    *   Output Directory: (비워둠)
4.  **Environment Variables**:
    *   `SUPABASE_URL`: (Supabase 주소)
    *   `SUPABASE_KEY`: (Supabase API 키)

---

## 📂 변경된 구조 요약
이제 모든 Vercel 설정이 각 폴더 안으로 들어갔습니다. 루프(Root)에는 배포 설정이 없습니다.

- `Frontend/`
  - `vercel.json` (프론트 전용)
  - `api/` (프론트 전용 함수 폴더)
- `Backend/`
  - `vercel.json` (백엔드 전용)
  - `api/index.py` (백엔드 엔트리 포인트)
  - `requirements.txt` (파이선 의존성)
