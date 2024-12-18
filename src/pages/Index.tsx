import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { CityCard } from "@/components/CityCard";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";

const CITIES = [
  { name: "New York", properties: 8, image: "/placeholder.svg" },
  { name: "San Diego", properties: 6, image: "/placeholder.svg" },
  { name: "Miami", properties: 3, image: "/placeholder.svg" },
  { name: "Los Angeles", properties: 5, image: "/placeholder.svg" },
  { name: "Chicago", properties: 4, image: "/placeholder.svg" },
];

const PROPERTIES = [
  {
    title: "Luxury Family Home",
    price: "395,000",
    image: "/placeholder.svg",
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
    image: "/placeholder.svg",
    address: "1020 Bloomingdale Ave",
    beds: 4,
    baths: 2,
    sqft: 450,
    type: "sale" as const,
  },
  {
    title: "North Dillard Street",
    price: "250",
    image: "/placeholder.svg",
    address: "4330 Bell Shoals Rd",
    beds: 4,
    baths: 2,
    sqft: 400,
    type: "rent" as const,
  },
];

const Index = () => {
  const [filter, setFilter] = useState<"all" | "sale" | "rent">("all");

  const filteredProperties = PROPERTIES.filter((property) => {
    if (filter === "all") return true;
    return property.type === filter;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 px-4 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-secondary">From as low as $10 per day with limited time offer discounts.</p>
          <h1 className="mb-8 text-4xl font-bold md:text-5xl">
            Your <span className="text-secondary">Property</span>, Our Priority.
          </h1>
          <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
            <SearchBar />
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button variant="ghost" className="rounded-full bg-white/10 hover:bg-white/20">
              Modern Villa
            </Button>
            <Button variant="ghost" className="rounded-full bg-white/10 hover:bg-white/20">
              Studio Apartment
            </Button>
            <Button variant="ghost" className="rounded-full bg-white/10 hover:bg-white/20">
              Town House
            </Button>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Find Properties in These Cities</h2>
            <p className="text-gray-600">Explore properties in popular cities</p>
          </div>
          <Button variant="outline">View All Cities</Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {CITIES.map((city) => (
            <CityCard key={city.name} {...city} />
          ))}
        </div>
      </section>

      {/* Properties Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Featured Properties</h2>
            <p className="text-gray-600">Explore our handpicked properties</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
            >
              All Properties
            </Button>
            <Button
              variant={filter === "sale" ? "default" : "outline"}
              onClick={() => setFilter("sale")}
            >
              For Sale
            </Button>
            <Button
              variant={filter === "rent" ? "default" : "outline"}
              onClick={() => setFilter("rent")}
            >
              For Rent
            </Button>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.title} {...property} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;