# LetsStudySaaS 프로젝트 계획서

## 개요
이 프로젝트는 웹 서비스 배포 역량을 강화하기 위해 프론트엔드와 백엔드를 연동하고 Netlify에 배포하는 운영 가능한 서비스를 구축하는 것을 목표로 합니다.

## 기술 스택
- **Frontend**: Angular
- **Backend**: Python (FastAPI), Redoc
- **Database**: Supabase
- **Deployment**: Netlify (Frontend 정적 호스팅, Backend는 Netlify Functions를 통한 Serverless 배포)
- **VCS**: Github

## 기능 명세
- Angular 학습을 위한 Workbook 및 실습 화면 제공
- FastAPI 및 Redoc 학습을 위한 Workbook 및 실습 제공

## 프로젝트 구조
하나의 Github Repository에서 프론트엔드와 백엔드를 모두 관리하는 Monorepo(모노레포) 형태입니다.
- `Frontend/`: Angular 기반 UI
- `Backend/`: FastAPI 및 Netlify Functions 구동을 위한 파이썬 코드

## 배포 전략
프론트엔드는 Netlify의 빌드 시스템을 통해 배포되며, 파이썬 기반의 백엔드는 Netlify API 및 `mangum` 어댑터를 활용하여 Netlify Functions로 래핑되어 함께 배포됩니다.
