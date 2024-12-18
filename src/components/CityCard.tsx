import { MapPin } from "lucide-react";

interface CityCardProps {
  name: string;
  image: string;
  properties: number;
}

export const CityCard = ({ name, image, properties }: CityCardProps) => {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-lg transition-transform hover:shadow-lg">
      <div className="relative">
        <img src={image} alt={name} className="aspect-[3/4] w-full object-cover brightness-75" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="text-center text-white">
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