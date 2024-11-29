import { Product } from "@/types/product";
import ProductsCard from "./ProductsCard";

function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className='products-list w-full '>
      {products.map((product, index) => (
        <ProductsCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductsList;
