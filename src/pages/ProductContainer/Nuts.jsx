import React from "react";
import ProductItem from "../../component/ProductItem";
import Loading from "../../component/Loading";
import Error from "../../component/Error";
import useFetch from "../../hooks/useFetch";

const Nuts = ({ isAddedInHomepage }) => {
  const marginClass = `${isAddedInHomepage ? "mt-20" : "mt-20"}`;
  const { data: products, error, isLoading } = useFetch("/api/products");

  const filteredProducts = products?.filter(
    (product) => product.category === "Nuts"
  );
  const updatedProducts = filteredProducts?.map((product) => ({
    ...product,
    updatedAt: product.updatedAt.toString(),
    createdAt: product.createdAt.toString(),
  }));

  return (
    <div className={`${marginClass} overflow-x-hidden`}>
      <div className="wrapper mb-20 flex flex-col gap-10">
        <h2 className="section-title">Browse all nuts</h2>
        {isLoading && <Loading isLoading={isLoading} />}
        {error && <Error error={error.message} />}
        <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {updatedProducts?.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nuts;
