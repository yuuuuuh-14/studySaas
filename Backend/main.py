from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
try:
    from database import supabase
except ImportError:
    supabase = None

app = FastAPI(title="LetsStudySaaS Backend", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to LetsStudySaaS API"}

@app.get("/api/health")
def health_check():
    return {"status": "ok"}

# Vercel handles the 'app' object directly as an ASGI app.
