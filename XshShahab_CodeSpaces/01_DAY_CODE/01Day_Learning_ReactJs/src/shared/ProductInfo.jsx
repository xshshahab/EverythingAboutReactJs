const ProductInfo = () => {
  const product = {
    name: "DELL Latitude 7490",
    price: 1200,
    isAvailable: "In Stock",
  };

  return (
    <div>
      <h1>Laptop Name: {product?.name}</h1>
      <h3>Laptop Price : ${product?.price}</h3>
      <h5>Laptop Availability: {product?.isAvailable}</h5>
    </div>
  );
};

export default ProductInfo;
