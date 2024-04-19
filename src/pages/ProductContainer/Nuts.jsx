import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductItem from "../../component/ProductItem";

const Nuts = ({ isAddedInHomepage }) => {
  const marginClass = `${isAddedInHomepage ? "mt-20" : "mt-20"}`;
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/products");
        const filteredProducts = response.data.filter(
          (product) => product.category === "Nuts"
        );
        const updatedProducts = filteredProducts.map((product) => ({
          ...product,
          updatedAt: product.updatedAt.toString(),
          createdAt: product.createdAt.toString(),
        }));
        setProducts(updatedProducts);
      } catch (err) {
        setError(err);
      }
    };
    fetchProducts();
  }, []);
  if (error) {
    return (
      <div className="text-2xl font-semibold">
        Nuts are not currently available
      </div>
    );
  }

  return (
    <div className={`${marginClass} overflow-x-hidden`}>
      <div className="wrapper mb-20 flex flex-col gap-10">
        <h2 className="section-title">Browse all nuts</h2>
        <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nuts;
