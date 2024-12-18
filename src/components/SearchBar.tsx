import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const SearchBar = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end">
      <div className="flex-1">
        <p className="mb-2 text-sm font-medium text-gray-600">Keyword</p>
        <Input
          type="text"
          placeholder="Enter keyword..."
          className="h-12 border-gray-200 bg-white"
        />
      </div>
      <div className="flex flex-1 gap-4">
        <div className="flex-1">
          <p className="mb-2 text-sm font-medium text-gray-600">Status</p>
          <Select>
            <SelectTrigger className="h-12 border-gray-200 bg-white">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="for-sale">For Sale</SelectItem>
              <SelectItem value="for-rent">For Rent</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <p className="mb-2 text-sm font-medium text-gray-600">Type</p>
          <Select>
            <SelectTrigger className="h-12 border-gray-200 bg-white">
              <SelectValue placeholder="All Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Type</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" className="h-12 border-gray-200">
          Filter
        </Button>
        <Button className="h-12 bg-[#FDB700] px-8 text-[#2B3C4E] hover:bg-[#FDB700]/90">
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </div>
    </div>
  );
};