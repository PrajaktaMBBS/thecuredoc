export const SUPABASE_URL = "https://wsvgdwkicxojkkfdskdl.supabase.co";
export const SUPABASE_ANON_KEY =
  "sb_publishable_c5gHLHlzVkieyDKGA0K6BA_7HgGgC9-"; // Add your anon key here if needed for authentication
export const SUPABASE_STORAGE_BUCKET = "image";
export const PROFILE_IMAGE_KEY = "profile/doctor-profile.jpg"; // Replace with the exact key from your Supabase Storage object
export const BLOG_IMAGE_KEY = "Screenshot 2026-08-16 at 1.22.13 PM.png";

export const getSupabaseStoragePublicUrl = (storageKey) => {
  if (!storageKey) return "";
  const cleanKey = String(storageKey).replace(/^\/+/, "");
  return `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_STORAGE_BUCKET}/${cleanKey}`;
};
