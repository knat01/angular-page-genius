import { MapPin } from "lucide-react";

interface CityCardProps {
  name: string;
  image: string;
  properties: number;
}

export const CityCard = ({ name, image, properties }: CityCardProps) => {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="aspect-[3/4] w-full transform object-cover brightness-90 transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 to-transparent">
          <div className="text-center text-white transition-transform duration-300 group-hover:scale-105">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="mt-1 flex items-center justify-center gap-1 text-sm">
              <MapPin className="h-4 w-4" />
              {properties} Properties
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};