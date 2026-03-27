export type InstagramMediaType = "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";

export type InstagramPost = {
  id: string;
  caption?: string;
  media_type: InstagramMediaType;
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
};

type InstagramApiResponse = {
  data: InstagramPost[];
  paging?: { cursors: { before: string; after: string }; next?: string };
};

const INSTAGRAM_API = "https://graph.instagram.com";

export async function fetchInstagramPosts(
  limit = 12
): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return [];

  try {
    const fields =
      "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";
    const url = `${INSTAGRAM_API}/me/media?fields=${fields}&limit=${limit}&access_token=${token}`;

    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (!res.ok) {
      console.error("Instagram API error:", res.status, await res.text());
      return [];
    }

    const data: InstagramApiResponse = await res.json();
    return data.data ?? [];
  } catch (err) {
    console.error("Failed to fetch Instagram posts:", err);
    return [];
  }
}
