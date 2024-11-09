import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

function ProductsList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=10"
      );
      const products = await response.json();
      setProducts(products);
    };
    getProducts();
  }, []);
  return (
    <div className='products-list w-full '>
      {products.map((product, index) => (
        <ProductsCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductsList;
