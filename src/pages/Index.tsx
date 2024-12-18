import { SearchBar } from "@/components/SearchBar";
import { CityCard } from "@/components/CityCard";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CITIES = [
  { name: "New York", properties: 8, image: "/lovable-uploads/53b53848-c5a7-4b9a-a419-bcde533343a0.png" },
  { name: "San Diego", properties: 6, image: "/lovable-uploads/53b53848-c5a7-4b9a-a419-bcde533343a0.png" },
  { name: "Miami", properties: 3, image: "/lovable-uploads/53b53848-c5a7-4b9a-a419-bcde533343a0.png" },
  { name: "Los Angeles", properties: 5, image: "/lovable-uploads/53b53848-c5a7-4b9a-a419-bcde533343a0.png" },
  { name: "Chicago", properties: 4, image: "/lovable-uploads/53b53848-c5a7-4b9a-a419-bcde533343a0.png" },
];

const PROPERTIES = [
  {
    title: "Luxury Family Home",
    price: "395,000",
    image: "/lovable-uploads/53b53848-c5a7-4b9a-a419-bcde533343a0.png",
    address: "1800-1818 79th St",
    beds: 4,
    baths: 3,
    sqft: 400,
    type: "sale" as const,
    featured: true,
  },
  {
    title: "Skyper Pool Apartment",
    price: "280,000",
    image: "/lovable-uploads/53b53848-c5a7-4b9a-a419-bcde533343a0.png",
    address: "1020 Bloomingdale Ave",
    beds: 4,
    baths: 2,
    sqft: 450,
    type: "sale" as const,
  },
  {
    title: "North Dillard Street",
    price: "250",
    image: "/lovable-uploads/53b53848-c5a7-4b9a-a419-bcde533343a0.png",
    address: "4330 Bell Shoals Rd",
    beds: 4,
    baths: 2,
    sqft: 400,
    type: "rent" as const,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#F8F7FF] to-[#F8F7FF] px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-gray-600">From as low as $10 per day with limited time offer discounts.</p>
          <h1 className="mb-8 text-4xl font-bold text-[#2B3C4E] md:text-5xl">
            Your <span className="text-[#FDB700]">Property</span>, Our Priority.
          </h1>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <SearchBar />
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button variant="outline" className="rounded-full border-gray-200 bg-white hover:bg-gray-50">
              Modern Villa
            </Button>
            <Button variant="outline" className="rounded-full border-gray-200 bg-white hover:bg-gray-50">
              Studio Apartment
            </Button>
            <Button variant="outline" className="rounded-full border-gray-200 bg-white hover:bg-gray-50">
              Town House
            </Button>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#2B3C4E]">Find Properties in These Cities</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <Button variant="ghost" className="gap-2 text-[#2B3C4E] hover:bg-gray-50">
            View All Cities <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {CITIES.map((city) => (
            <CityCard key={city.name} {...city} />
          ))}
        </div>
      </section>

      {/* Properties Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#2B3C4E]">Featured Properties</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-gray-200">
              All Properties
            </Button>
            <Button variant="outline" className="border-gray-200">
              For Sale
            </Button>
            <Button variant="outline" className="border-gray-200">
              For Rent
            </Button>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTIES.map((property) => (
            <PropertyCard key={property.title} {...property} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;