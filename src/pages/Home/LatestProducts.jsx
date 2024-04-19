import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import ProductCard from "../../component/ProductCard";

const LatestProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/products");
        setProducts(response.data.slice(0, 3)); // Get the first three products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="wrapper my-8">
      <h2 className="section-title text-center my-12">
        Latest Featured Products
      </h2>
      <div className="flex flex-col items-center">
        <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Link
          to="/products"
          className="mt-5  inline-block border  bg-black text-white py-2 px-6 hover:bg-rose-900  transition-colors duration-300 font-serif uppercase text-xl "
        >
          More
        </Link>
      </div>
    </div>
  );
};

export default LatestProducts;
