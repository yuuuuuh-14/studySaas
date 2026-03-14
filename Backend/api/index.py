from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

# 백엔드 루트에서 모듈을 찾을 수 있도록 설정 (database.py 등 참조용)
import sys
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

try:
    from database import supabase
except ImportError:
    supabase = None

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
def health_check():
    return {"status": "ok", "message": "Backend is running on Vercel"}

@app.get("/api/{full_path:path}")
def catch_all(full_path: str):
    return {"message": f"Path /api/{full_path} received"}

@app.get("/")
def read_root():
    return {"message": "LetsStudySaaS API Root"}

# Vercel이 인식할 수 있도록 app 객체 노출
handler = app
