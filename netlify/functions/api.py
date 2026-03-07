import sys
import os

# Backend 디렉토리를 path에 추가하여 모듈을 찾을 수 있게 함
# netlify/functions/api.py 기준 ../../Backend
sys.path.append(os.path.join(os.path.dirname(__file__), "../../Backend"))

try:
    from main import handler
except ImportError as e:
    # 로컬 테스트 시 또는 경로 문제 발생 시 디버깅을 위한 출력
    print(f"Import Error: {e}")
    raise
