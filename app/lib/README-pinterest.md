# Pinterest Integration Guide

## Overview
This document explains the Pinterest integration solutions implemented to fetch and display Pinterest pins.

## Problem
The original RSS feed approach (`https://www.pinterest.com/razeevpuree/feed.rss`) was not working because:
1. Pinterest has restricted public RSS feed access
2. Many feeds return empty responses
3. RSS feeds don't reliably provide created pins vs saved pins

## Solutions Implemented

### 1. Pinterest oEmbed API (Primary)
Uses Pinterest's official oEmbed endpoint to fetch individual pin data:
```typescript
const response = await axios.get(
  `https://www.pinterest.com/oembed/?url=${pinUrl}&format=json`
);
```

**Pros:**
- Official Pinterest API
- Reliable and stable
- Returns structured data
- No authentication required

**Cons:**
- Requires knowing specific pin URLs
- Rate limited
- Need to maintain list of pin IDs

### 2. Fallback Demo Data
When API calls fail, displays curated demo pins with relevant imagery:
```typescript
function getFallbackPins(): Pin[] {
  return [
    {
      id: "demo-1",
      title: "Pinterest Integration Demo",
      imageUrl: "https://images.unsplash.com/photo-...",
      // ...
    }
  ];
}
```

### 3. Pinterest Widget Embed (Alternative)
Option to embed Pinterest's official widget:
```typescript
export function getPinterestEmbedWidget(username: string): string {
  return `
    <a data-pin-do="embedUser" href="https://www.pinterest.com/${username}/_created/">
    </a>
    <script async defer src="//assets.pinterest.com/js/pinit.js"></script>
  `;
}
```

## Configuration

### Setting Up Pin IDs
To display actual pins, update the `SAMPLE_PIN_IDS` array in `pintrest.ts`:
1. Visit your Pinterest profile
2. Click on individual pins
3. Extract the pin ID from the URL (e.g., `https://www.pinterest.com/pin/123456789/`)
4. Add to the array

### Alternative: Widget Embed
To use the Pinterest widget instead:
1. Uncomment the widget section in `page.tsx`
2. The widget will automatically load your created pins
3. Customize styling via Pinterest's widget parameters

## Usage

### Basic Pin Fetching
```typescript
import { getPins } from "../lib/pintrest";

const pins = await getPins();
```

### Individual Pin by URL
```typescript
import { getPinByOEmbed } from "../lib/pintrest";

const pin = await getPinByOEmbed("https://www.pinterest.com/pin/123456789/");
```

### Widget Embed
```typescript
import { getPinterestEmbedWidget } from "../lib/pintrest";

const widgetHtml = getPinterestEmbedWidget("razeevpuree");
```

## Error Handling
The implementation includes comprehensive error handling:
- Graceful fallback to demo data
- Image loading error recovery
- Network timeout handling
- User-friendly empty states

## Future Improvements
1. **Pinterest API Integration**: Use official Pinterest API with proper authentication
2. **User Pin Discovery**: Implement web scraping for pin ID discovery
3. **Caching**: Add pin data caching to reduce API calls
4. **Real-time Updates**: Implement webhook or polling for new pins

## Troubleshooting

### No Pins Showing
1. Check network connectivity
2. Verify pin IDs are valid
3. Check browser console for errors
4. Fallback data should still display

### Images Not Loading
1. Pinterest images may have CORS restrictions
2. Fallback images from Unsplash should work
3. Check image URLs in browser console

### Widget Not Loading
1. Ensure Pinterest's script is loaded
2. Check for Content Security Policy restrictions
3. Verify widget HTML structure