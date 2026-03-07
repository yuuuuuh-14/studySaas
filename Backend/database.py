import os
from typing import Optional
from supabase import create_client, Client

url: str = os.environ.get("SUPABASE_URL", "")
key: str = os.environ.get("SUPABASE_KEY", "")

# Disable init if not set, to avoid crashing during build/local without env vars
supabase: Optional[Client] = None
if url and key:
    supabase = create_client(url, key)

