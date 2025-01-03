// src/utils/microcms.js
const MICROCMS_BASE_URL = "https://sakamichiweb.microcms.io/api/v1";
const API_KEY = import.meta.env.PUBLIC_MICROCMS_API_KEY; 
// astro.config.mjs or .env などで設定しておく

export async function getProjectBySlug(slug) {
  const res = await fetch(`${BASE_URL}/projects?filters=slug[equals]${slug}`, {
    headers: {
      "X-API-KEY": API_KEY,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch project by slug");
  const data = await res.json();
  return data.contents?.[0] || null;
}

export async function getProjectBySlug(slug) {
  // slug でフィルターして 1 件取得
  const res = await fetch(`${MICROCMS_BASE_URL}/projects?filters=slug[equals]${slug}`, {
    headers: {
      "X-API-KEY": API_KEY,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch project by slug");
  const data = await res.json();
  if (data.contents && data.contents.length > 0) {
    return data.contents[0];
  }
  return null;
}

export async function getAbout() {
  const res = await fetch(`${MICROCMS_BASE_URL}/about`, {
    headers: {
      "X-API-KEY": API_KEY,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch about data");
  const data = await res.json();
  return data;
}
