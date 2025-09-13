import axios from "axios";
import * as cheerio from "cheerio";

export interface Pin {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export async function getPins(): Promise<Pin[]> {
  try {
    const response = await axios.get(
      `https://www.pinterest.com/razeevpuree/feed.rss`
    );
    const $ = cheerio.load(response.data, { xmlMode: true });
    const pins: Pin[] = [];

    $("item").each((_, item) => {
      const $item = $(item);
      const description = $item.find("description").text();
      const imageMatch = description.match(/src="([^"]+)"/);

      pins.push({
        id: $item.find("guid").text(),
        title: $item.find("title").text(),
        description: description.replace(/<[^>]*>/g, ""),
        imageUrl: imageMatch ? imageMatch[1] : "",
        link: $item.find("link").text(),
      });
    });

    return pins;
  } catch (error) {
    console.error("Error fetching Pinterest data:", error);
    return [];
  }
}
