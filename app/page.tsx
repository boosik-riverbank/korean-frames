import {fetchMetadata} from "frames.js/next";

export async function generateMetadata() {
  return {
    title: "Translate it to korean",
    // provide a full URL to your /frames endpoint
    other: await fetchMetadata(
        new URL(
            "/",
            process.env.VERCEL_URL
                ? `https://${process.env.VERCEL_URL}`
                : "http://localhost:3000"
        )
    ),
  };
}

export default function Home() {
  return (
      <div className="p-4">
        Korean simple frame!
      </div>
  );
}
