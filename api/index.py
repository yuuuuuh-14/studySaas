import sys
import os

# Backend 디렉토리를 path에 추가하여 모듈을 찾을 수 있게 함
# root/api/index.py 기준 ../Backend
backend_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "Backend"))
sys.path.append(backend_path)

try:
    from main import app
except ImportError as e:
    print(f"Backend path: {backend_path}")
    print(f"Import Error: {e}")
    raise

# Vercel ASGI handler
handler = app
app = app
