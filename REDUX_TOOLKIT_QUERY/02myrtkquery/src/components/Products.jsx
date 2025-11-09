import { useGetAllProductsQuery } from "../app/service/apiData";

const Products = () => {
  const { data, isError, error, isLoading } = useGetAllProductsQuery();

  if (isError) {
    return <h2>ERROR! :{error}</h2>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {data?.products.map((product, index) => {
        return <div key={`${index} + ${product.id}`}>{product.title}</div>;
      })}
    </div>
  );
};

export default Products;
