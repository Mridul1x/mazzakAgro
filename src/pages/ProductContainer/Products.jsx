import Categories from "../../component/Categories";
import Error from "../../component/Error";
import Loading from "../../component/Loading";
import ProductItem from "../../component/ProductItem";
import useFetch from "../../hooks/useFetch";
import Nuts from "./Nuts";

const Products = ({ isAddedInHomepage }) => {
  const marginClass = `${isAddedInHomepage ? "mt-40" : "mt-20"}`;

  const { data: products, error, isLoading } = useFetch("/api/products");

  return (
    <div>
      <Categories></Categories>
      <div className={`${marginClass} overflow-x-hidden`}>
        <div className="wrapper mb-20  flex flex-col gap-10">
          <h2 className="section-title">Browse all products</h2>
          {isLoading && <Loading isLoading={isLoading} />}

          {error && <Error error={error.message} />}
          {products && (
            <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {products.map((product) => (
                <ProductItem key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Nuts isAddedInHomepage={true}></Nuts>
    </div>
  );
};

export default Products;
