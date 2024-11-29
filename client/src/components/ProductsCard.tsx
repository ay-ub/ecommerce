import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import useCartStore from "@/store/CartStore";
import { Product } from "@/types/product";

function ProductsCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div className='product-card  flex flex-col gap-3 items-center bg-white dark:bg-slate-950 rounded-md p-3'>
      <Link to={`/products/${product.id}`} className='product-card-link '>
        <img
          src={product.image}
          alt={product.title}
          className='product-image w-full h-64 object-contain hover:scale-105  duration-300'
          loading='lazy'
        />
      </Link>

      <div className='product-details w-full'>
        <h2 className='product-title'>
          {product.title.length > 20
            ? `${product.title.substring(0, 20)}...`
            : product.title}
        </h2>
        <p className='product-price font-semibold'>
          ${product.price.toFixed(2)}
        </p>

        <Button
          className='w-full mt-3 capitalize'
          onClick={() => {
            addToCart(product);
          }}
        >
          <ShoppingBag className='h-[1.2rem] w-[1.2rem] ' /> Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductsCard;
