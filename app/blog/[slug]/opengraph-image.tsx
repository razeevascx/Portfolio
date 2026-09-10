import { ImageResponse } from "next/og";
import { getBlogPostBySlug } from "@/lib/notion/blog";

export const alt = "Blog post";
export const runtime = "nodejs";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        color: "#fff",
        padding: "60px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: "52px", fontWeight: "800" }}>
        {post?.title ?? "Blog post"}
      </div>

    </div>,
    { ...size },
  );
}
