import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useFilter } from "@/context/FilterContext";

interface Product {
  category: string;
}

interface FetchResult {
  products: Product[];
}

const Sidebar: React.FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    setKeyword,
  } = useFilter();

  const [categories, setCategories] = useState<string[]>([]);
  const [keywords, _setKeywords] = useState<string[]>([
    "apple",
    "watch",
    "fashion",
    "trend",
    "shoes",
    "shirt",
  ]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const result: FetchResult = await response.json();
        const uniqueCategories = Array.from(
          new Set(result.products.map((product) => product?.category))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("ERROR: fetching product", error);
      }
    };

    fetchCategories();
  }, []);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value ? parseFloat(value) : undefined);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxPrice(value ? parseFloat(value) : undefined);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleKeywordClick = (keyword: string) => {
    setKeyword(keyword);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setKeyword("");
  };

  return (
    <div className="w-64 h-screen p-5 border-r">
      <h1 className="mt-4 mb-10 text-2xl font-bold">Sabr Store</h1>
      <section>
        <input
          type="text"
          id="search-query"
          placeholder="Search Product"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-2 border-2 rounded sm:mb-0"
        />
        <div className="flex items-center justify-center">
          <input
            type="text"
            id="min"
            placeholder="Min"
            value={minPrice ?? ""}
            onChange={handleMinPriceChange}
            className="w-full px-5 py-3 mb-3 mr-2 border-2"
          />
          <input
            type="text"
            id="max"
            value={maxPrice ?? ""}
            onChange={handleMaxPriceChange}
            placeholder="Max"
            className="w-full px-5 py-3 mb-3 mr-2 border-2"
          />
        </div>

        <div id="category-section" className="mb-5">
          <h2 className="mb-3 text-xl font-semibold">Categories</h2>
        </div>
        <div id="category-list">
          {categories.map((category, index) => (
            <label className="block mb-2" key={index}>
              <input
                type="radio"
                name="category"
                id="category"
                value={category}
                onChange={() => handleCategoryChange(category)}
                checked={selectedCategory === category}
                className="mr-2 w-[16px] h-[16px]"
              />
              {category.toUpperCase()}
            </label>
          ))}
        </div>

        <div id="keywords-section" className="mt-4 mb-5">
          <h2 className="mb-3 text-xl font-semibold">Keywords</h2>
          <div>
            {keywords.map((keyword, index) => (
              <button
                key={index}
                onClick={() => handleKeywordClick(keyword)}
                className="block w-full px-4 py-2 mb-2 text-left border rounded cursor-pointer hover:bg-accent/50"
              >
                {keyword.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <Button onClick={handleResetFilters} className="w-full mt-2 rounded">
          Reset Filter
        </Button>
      </section>
    </div>
  );
};

export default Sidebar;
