import os
from supabase import create_client, Client

url: str = os.environ.get("SUPABASE_URL", "")
key: str = os.environ.get("SUPABASE_KEY", "")

# Disable init if not set, to avoid crashing during build/local without env vars
supabase: Client | None = None
if url and key:
    supabase = create_client(url, key)
