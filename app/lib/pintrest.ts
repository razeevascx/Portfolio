import axios from "axios";

export interface Pin {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  embedHtml?: string;
}

export interface PinterestUser {
  username: string;
  profileUrl: string;
}

// Sample pins data for demonstration - replace with actual pin IDs from user's profile
const SAMPLE_PIN_IDS = [
  "345932770615188244", // Replace with actual pin IDs
  "196801560420358616",
  "285204633718914955",
  "345932770615188245",
  "196801560420358617",
  "285204633718914956"
];

export async function getPinByOEmbed(pinUrl: string): Promise<Pin | null> {
  try {
    const response = await axios.get(
      `https://www.pinterest.com/oembed/?url=${encodeURIComponent(pinUrl)}&format=json`,
      { timeout: 5000 } // Add timeout to prevent hanging
    );
    
    const data = response.data;
    
    // Extract image URL from the embed HTML
    const imageMatch = data.html?.match(/data-pin-media="([^"]+)"/);
    const imageUrl = imageMatch ? imageMatch[1] : '';
    
    return {
      id: pinUrl.split('/').pop() || '',
      title: data.title || '',
      description: data.provider_name || '',
      imageUrl: imageUrl,
      link: pinUrl,
      embedHtml: data.html
    };
  } catch (error) {
    console.error(`Error fetching pin ${pinUrl}:`, error);
    return null;
  }
}

export async function getUserCreatedPins(username: string = "razeevpuree"): Promise<Pin[]> {
  // Since Pinterest RSS feeds are not accessible and API requires authentication,
  // we'll use a hybrid approach with known pin URLs and oEmbed
  
  const pinUrls = SAMPLE_PIN_IDS.map(id => `https://www.pinterest.com/pin/${id}/`);
  const pins: Pin[] = [];
  
  // Try to fetch a few pins, but don't wait too long
  const promises = pinUrls.slice(0, 3).map(async (pinUrl) => {
    try {
      const pin = await getPinByOEmbed(pinUrl);
      return pin;
    } catch (error) {
      console.error(`Failed to fetch pin: ${pinUrl}`, error);
      return null;
    }
  });

  try {
    const results = await Promise.allSettled(promises);
    results.forEach((result) => {
      if (result.status === 'fulfilled' && result.value) {
        pins.push(result.value);
      }
    });
  } catch (error) {
    console.error('Error fetching pins:', error);
  }
  
  return pins;
}

// Alternative implementation using Pinterest's widget embed approach
export function getPinterestEmbedWidget(username: string = "razeevpuree", boardName?: string): string {
  const baseUrl = `https://www.pinterest.com/${username}`;
  const url = boardName ? `${baseUrl}/${boardName}` : `${baseUrl}/_created/`;
  
  return `
    <div style="max-width: 100%; margin: 0 auto;">
      <a data-pin-do="embedUser" 
         data-pin-board-width="900" 
         data-pin-scale-height="400" 
         data-pin-scale-width="200" 
         href="${url}">
      </a>
      <script async defer src="//assets.pinterest.com/js/pinit.js"></script>
    </div>
  `;
}

// Get static pins with fallback data for better user experience
export async function getPins(): Promise<Pin[]> {
  // Start with fallback data to ensure immediate display
  const fallbackPins = getFallbackPins();
  
  try {
    // Try to get pins via oEmbed first, but don't wait too long
    const realPins = await Promise.race([
      getUserCreatedPins(),
      new Promise<Pin[]>((resolve) => setTimeout(() => resolve([]), 3000)) // 3 second timeout
    ]);
    
    if (realPins.length > 0) {
      return realPins;
    }
    
    // Return fallback data if API calls fail
    return fallbackPins;
  } catch (error) {
    console.error("Error fetching Pinterest data:", error);
    return fallbackPins;
  }
}

function getFallbackPins(): Pin[] {
  return [
    {
      id: "demo-1",
      title: "Creative Portfolio Design",
      description: "Modern portfolio layout inspiration with clean aesthetics",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=600&fit=crop&q=80",
      link: "https://www.pinterest.com/razeevpuree/",
    },
    {
      id: "demo-2", 
      title: "UI/UX Design Patterns",
      description: "Exploring creative design patterns and user interface layouts",
      imageUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=600&fit=crop&q=80",
      link: "https://www.pinterest.com/razeevpuree/",
    },
    {
      id: "demo-3",
      title: "Design System Components",
      description: "Beautiful UI components and consistent design systems",
      imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=600&fit=crop&q=80",
      link: "https://www.pinterest.com/razeevpuree/",
    },
    {
      id: "demo-4",
      title: "Color Palette Inspiration",
      description: "Curated color combinations for modern design projects",
      imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=600&fit=crop&q=80",
      link: "https://www.pinterest.com/razeevpuree/",
    },
    {
      id: "demo-5",
      title: "Typography & Layout",
      description: "Beautiful typography combinations and layout inspiration",
      imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=600&fit=crop&q=80",
      link: "https://www.pinterest.com/razeevpuree/",
    },
    {
      id: "demo-6",
      title: "Mobile App Design",
      description: "Modern mobile application interface design concepts",
      imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop&q=80",
      link: "https://www.pinterest.com/razeevpuree/",
    }
  ];
}
