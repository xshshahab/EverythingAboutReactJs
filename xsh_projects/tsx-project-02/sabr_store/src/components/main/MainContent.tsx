import { useFilter } from "@/context/FilterContext";
import axios from "axios";
import { Tally3 } from "lucide-react";
import React, { useEffect, useState } from "react";

const MainContent: React.FC = () => {
  const { searchQuery, selectedCategory, keyword, minPrice, maxPrice } =
    useFilter();

  const [products, setProducts] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const itemsPerPage = 12;

  useEffect(() => {
    let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
      (currentPage - 1) * itemsPerPage
    }`;

    if (keyword) {
      url = `https://dummyjson.com/search?q=${keyword}`;
    }

    axios
      .get(url)
      .then((response) => {
        setProducts(response?.data?.products);
      })
      .catch((error) => {
        console.error("ERROR! fetching data: ", error);
      });
  }, [currentPage, keyword]);

  return (
    <section className="xl:w-[55rem] lg:w-[55rem] sm:w-[40rem] xs:w-[20rem] p-5">
      <div className="mb-5">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div className="relative my-5">
            <button
              onClick={() => setDropdownOpen(true)}
              className="flex items-center px-4 py-2 rounded-full borer"
            >
              <Tally3 className="mr-2" />
              {filter === "all"
                ? "Filter"
                : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
            {dropdownOpen && (
              <div className="absolute w-full mt-2 border border-gray-300 rounded bg-accent sm:w-40">
                {["cheap", "expensive", "popular"].map((item) => (
                  <button
                    onClick={() => setFilter(item)}
                    className="block w-full px-4 py-2 text-left capitalize cursor-pointer hover:bg-accent/50"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="grid gap-5 grid-col sm:grid-cols-3 md:grid-cols-4">
          {/* BookCard */}
        </div>
      </div>
    </section>
  );
};

export default MainContent;
