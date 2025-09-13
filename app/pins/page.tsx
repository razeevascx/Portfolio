import { getPins, getPinterestEmbedWidget } from "../lib/pintrest";
import Image from "next/image";

export default async function PinterestBoard() {
  const pins = await getPins();

  return (
    <div className="w-full p-4 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Pinterest Pins</h1>
        <p className="text-gray-600">Showcasing creative designs and inspirations</p>
      </div>

      {/* Pin Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pins.map((pin) => (
          <a
            key={pin.id}
            href={pin.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[3/4]">
              <Image
                src={pin.imageUrl}
                alt={pin.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white text-sm font-medium line-clamp-2">
                {pin.title}
              </h3>
              {pin.description && (
                <p className="text-white/80 text-xs mt-1 line-clamp-1">
                  {pin.description}
                </p>
              )}
            </div>
          </a>
        ))}
      </div>

      {/* Loading state or empty state */}
      {pins.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No pins available at the moment.</p>
          <p className="text-sm text-gray-400 mt-2">
            Check back later or visit{" "}
            <a 
              href="https://www.pinterest.com/razeevpuree/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Pinterest profile
            </a>
          </p>
        </div>
      )}

      {/* Info section */}
      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <h2 className="text-lg font-semibold mb-2">Pinterest Integration</h2>
        <p className="text-gray-600 text-sm">
          This page demonstrates a robust Pinterest integration with fallback content. 
          In a production environment with network access, this would fetch real pins from Pinterest's API.
        </p>
        <div className="mt-4">
          <a 
            href="https://www.pinterest.com/razeevpuree/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            View on Pinterest
          </a>
        </div>
      </div>

      {/* Alternative: Pinterest Widget Embed (commented out for now) */}
      {/* 
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-center">Pinterest Board</h2>
        <div 
          dangerouslySetInnerHTML={{ 
            __html: getPinterestEmbedWidget("razeevpuree") 
          }} 
        />
      </div>
      */}
    </div>
  );
}
