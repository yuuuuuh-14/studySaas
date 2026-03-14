import sys
import os

# Backend 폴더를 Python 경로에 추가
# Vercel Root Directory가 'Backend'로 설정되어 있으면 현재 위치는 Backend/api 임
base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if base_dir not in sys.path:
    sys.path.append(base_dir)

try:
    # Backend/main.py 에서 app 인스턴스를 가져옴
    from main import app
except ImportError as e:
    print(f"Base Directory: {base_dir}")
    print(f"Current Sys Path: {sys.path}")
    print(f"Import Error: {e}")
    raise

# Vercel은 'app' 객체를 찾아 ASGI로 실행함
app = app
