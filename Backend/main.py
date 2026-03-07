from fastapi import FastAPI
from mangum import Mangum
from fastapi.middleware.cors import CORSMiddleware
from database import supabase

app = FastAPI(title="LetsStudySaaS Backend", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this.
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

# Create handler for Netlify Functions (AWS Lambda)
handler = Mangum(app)
