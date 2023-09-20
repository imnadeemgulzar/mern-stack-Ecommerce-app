import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [search, setSearch] = useState("");
  const getProducts = async () => {
    try {
      const result = await axios.get("https://dummyjson.com/products");
      const items = await result?.data?.products;
      setProducts(items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleSelect = e => {
    const category = e.target.value;
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter(item => item.category === selectedCategory)
    : products;

  const handleSearch = e => {
    const searched = e.target.value;
    setSearch(searched);
  };
  const searChedItem = filteredProducts.filter(item =>
    item?.title?.toLowerCase()?.includes(search?.toLowerCase()),
  );

  const showDetails = productId => {
    navigate(`/details/${productId}`);
  };

  return (
    <main>
      <div className="flex items-end justify-between mt-5">
        <input
          type="text"
          className="w-1/4 p-4 text-xl text-gray-100 bg-gray-800 border-none rounded-md outline-none"
          placeholder="Search"
          onChange={handleSearch}
          value={search}
        />
        <div className="flex items-center justify-between w-1/4 px-4 py-2 text-xl text-gray-100 bg-gray-800 rounded-md">
          <label htmlFor="choose category">Choose Category</label>
          <select
            name="choose-category"
            id="choose-category"
            className="border-1 px-6 py-2 ml-3 bg-gray-800 border-none outline-none"
            onChange={handleSelect}
          >
            <option value="">All</option>
            <option value="smartphones">smartphones</option>
            <option value="laptops">laptops</option>
            <option value="fragrances">fragrances</option>
            <option value="skincare">skincare</option>
            <option value="groceries">groceries</option>
            <option value="home-decoration">home-decoration</option>
          </select>
        </div>
      </div>
      <div className=" grid grid-cols-4 gap-10 my-6 overflow-hidden">
        {searChedItem.map(product => {
          return (
            <div
              onClick={() => showDetails(product.id)}
              key={product.title}
              className="h-[400px] p-4 rounded-lg shadow-md shadow-gray-400 cursor-pointer"
            >
              <img
                src={product.thumbnail}
                alt="img"
                className="h-[65%] w-full"
              />
              <div className=" text-slate-500 border-slate-200 flex items-center justify-between pt-2 my-4 text-xl font-semibold border-t-2">
                <h2 className="">{product.title}</h2>
                <p>{`$${product.price}`}</p>
              </div>
              <p className="my-2">{product.description}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
