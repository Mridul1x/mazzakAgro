import React, { useEffect, useState } from "react";
import Categories from "../../component/Categories";
import axios from "axios";
import ProductItem from "../../component/ProductItem";
import Nuts from "./Nuts";

const Products = ({ isAddedInHomepage }) => {
  const marginClass = `${isAddedInHomepage ? "mt-40" : "mt-20"}`;
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/products");
        setProducts(response.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchProducts();
  }, []);
  if (error) {
    return (
      <div className="text-2xl font-semibold">
        Products are not currently available
      </div>
    );
  }

  return (
    <div>
      <Categories></Categories>
      <div className={`${marginClass} overflow-x-hidden`}>
        <div className="wrapper mb-20  flex flex-col gap-10">
          <h2 className="section-title">Browse all products</h2>
          <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Nuts isAddedInHomepage={true}></Nuts>
    </div>
  );
};

export default Products;
