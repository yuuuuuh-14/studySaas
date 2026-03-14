import sys
import os

# 현재 파일(Backend/api/index.py)의 부모 디렉토리(Backend)를 path에 추가
current_dir = os.path.dirname(__file__)
parent_dir = os.path.abspath(os.path.join(current_dir, ".."))
sys.path.append(parent_dir)

try:
    from main import app
except ImportError as e:
    print(f"Parent directory: {parent_dir}")
    print(f"Import Error: {e}")
    raise

# Vercel ASGI handler
handler = app
app = app
