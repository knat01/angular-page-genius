import { MapPin } from "lucide-react";

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
    <div className="property-card">
      <div className="relative">
        <img src={image} alt={title} className="property-image" />
        <span
          className={`property-badge ${
            type === "sale" ? "bg-blue-600" : "bg-green-600"
          }`}
        >
          {type === "sale" ? "FOR SALE" : "FOR RENT"}
        </span>
        {featured && (
          <span className="property-badge right-3 left-auto bg-secondary">
            FEATURED
          </span>
        )}
      </div>
      <div className="property-details">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-lg font-semibold text-secondary">
            ${price}
            {type === "rent" && <span className="text-sm">/month</span>}
          </p>
        </div>
        <p className="mb-4 flex items-center text-sm text-gray-600">
          <MapPin className="mr-1 h-4 w-4" />
          {address}
        </p>
        <div className="flex justify-between border-t pt-4 text-sm text-gray-600">
          <span>{beds} Beds</span>
          <span>{baths} Baths</span>
          <span>{sqft} sqft</span>
        </div>
      </div>
    </div>
  );
};