import { getPins } from "../lib/pintrest";
import Image from "next/image";

export default async function PinterestBoard() {
  const pins = await getPins();

  return (
    <div className="w-full p-4">
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
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
