import { SearchBar } from "@/components/SearchBar";
import { CityCard } from "@/components/CityCard";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CITIES = [
  { name: "New York", properties: 8, image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2" },
  { name: "San Diego", properties: 6, image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625" },
  { name: "Miami", properties: 3, image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff" },
  { name: "Los Angeles", properties: 5, image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e" },
  { name: "Chicago", properties: 4, image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21" },
];

const PROPERTIES = [
  {
    title: "Luxury Family Home",
    price: "395,000",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
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
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    address: "1020 Bloomingdale Ave",
    beds: 4,
    baths: 2,
    sqft: 450,
    type: "sale" as const,
  },
  {
    title: "North Dillard Street",
    price: "250",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
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
      <section className="relative bg-gradient-to-br from-[#F8F7FF] via-white to-[#F8F7FF] px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="animate-fade-in">
            <p className="mb-2 text-gray-600">From as low as $10 per day with limited time offer discounts.</p>
            <h1 className="mb-8 text-4xl font-bold text-[#2B3C4E] md:text-5xl lg:text-6xl">
              Your <span className="bg-gradient-to-r from-[#FDB700] to-[#FF9900] bg-clip-text text-transparent">Property</span>, Our Priority.
            </h1>
          </div>
          <div className="rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
            <SearchBar />
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            {["Modern Villa", "Studio Apartment", "Town House"].map((tag) => (
              <Button
                key={tag}
                variant="outline"
                className="rounded-full border-gray-200 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-md"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-center justify-between">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-[#2B3C4E]">Find Properties in These Cities</h2>
            <p className="text-gray-600">Discover your perfect home in these prime locations.</p>
          </div>
          <Button
            variant="ghost"
            className="group gap-2 text-[#2B3C4E] transition-all duration-300 hover:bg-gray-50"
          >
            View All Cities{" "}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {CITIES.map((city, index) => (
            <div
              key={city.name}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CityCard {...city} />
            </div>
          ))}
        </div>
      </section>

      {/* Properties Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-center justify-between">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-[#2B3C4E]">Featured Properties</h2>
            <p className="text-gray-600">Handpicked properties that match your lifestyle.</p>
          </div>
          <div className="flex gap-2">
            {["All Properties", "For Sale", "For Rent"].map((filter) => (
              <Button
                key={filter}
                variant="outline"
                className="border-gray-200 transition-all duration-300 hover:scale-105 hover:bg-[#FDB700] hover:text-[#2B3C4E]"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTIES.map((property, index) => (
            <div
              key={property.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;