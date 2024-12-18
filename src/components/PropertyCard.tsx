import { MapPin, Bed, Bath, Move } from "lucide-react";

interface PropertyCardProps {
  title: string;
  price: string;
  image: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  type: "sale" | "rent";
  featured?: boolean;
}

export const PropertyCard = ({
  title,
  price,
  image,
  address,
  beds,
  baths,
  sqft,
  type,
  featured,
}: PropertyCardProps) => {
  return (
    <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:shadow-xl">
      <div className="relative">
        <img src={image} alt={title} className="aspect-[4/3] w-full object-cover" />
        <div className="absolute left-4 top-4 flex gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase text-white ${
              type === "sale" ? "bg-blue-600" : "bg-green-600"
            }`}
          >
            For {type === "sale" ? "Sale" : "Rent"}
          </span>
          {featured && (
            <span className="rounded-full bg-[#FDB700] px-3 py-1 text-xs font-semibold uppercase text-[#2B3C4E]">
              Featured
            </span>
          )}
        </div>
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-xl font-bold text-[#2B3C4E]">{title}</h3>
          <p className="text-lg font-semibold text-[#FDB700]">
            ${price}
            {type === "rent" && <span className="text-sm text-gray-600">/month</span>}
          </p>
        </div>
        <p className="mb-4 flex items-center text-sm text-gray-600">
          <MapPin className="mr-1 h-4 w-4" />
          {address}
        </p>
        <div className="flex justify-between border-t pt-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Bed className="h-4 w-4" /> {beds} Beds
          </span>
          <span className="flex items-center gap-1">
            <Bath className="h-4 w-4" /> {baths} Baths
          </span>
          <span className="flex items-center gap-1">
            <Move className="h-4 w-4" /> {sqft} sqft
          </span>
        </div>
      </div>
    </div>
  );
};