import axios from "axios";
import { useEffect, useState } from "react";

export const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        const meals = res?.data?.meals || [];
        setItems(meals);
      })
      .catch((err) => {
        console.error("Error fetching meals:", err);
      });
  }, []);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => (
    <div
      key={idMeal}
      className="flex flex-col p-4 transition bg-gray-800 rounded-lg shadow-md hover:shadow-lg"
    >
      <img
        src={strMealThumb}
        alt={strMeal}
        className="object-cover w-full h-40 rounded-md"
      />
      <div className="mt-4">
        <p className="text-lg font-semibold text-white">{strMeal}</p>
        <p className="text-sm text-gray-400">#{idMeal}</p>
      </div>
    </div>
  ));

  return (
    <section className="px-6 py-10">
      <h1 className="mb-6 text-3xl font-bold text-center text-white">
        Unlok Meals Store
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {itemsList}
      </div>
    </section>
  );
};
