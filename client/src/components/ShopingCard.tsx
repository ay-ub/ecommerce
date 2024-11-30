import { ShoppingBag, Trash2 } from "lucide-react";
import Drower from "./Drower";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import useCartStore from "@/store/CartStore";
import { Product } from "@/types/product";
import Icon from "./Icon";
import Alert from "./Alert";
const ShopingCard = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const clearCart = useCartStore((state) => state.clearCart);
  console.log("cart items = ", cartItems);
  return (
    <Drower
      trigger={
        <span className='rounded-full p-2 bg-gray-100 dark:bg-slate-900 cursor-pointer flex items-center justify-center'>
          <ShoppingBag className='h-[1.2rem] w-[1.2rem]  ' />
        </span>
      }
      title={
        <>
          <div className='flex items-center gap-2'>
            <span className='rounded-full p-2 bg-gray-100 dark:bg-slate-900 cursor-pointer flex items-center justify-center'>
              <ShoppingBag className='h-[1.2rem] w-[1.2rem]  ' />
            </span>
            <h3>Shopping Cart</h3>
          </div>
          <Icon onClick={() => clearCart()}>clear all</Icon>
        </>
      }
    >
      <ScrollArea className='h-[calc(100vh-127px)] w-full p-2'>
        {cartItems &&
          cartItems.map((item, index) => {
            return <ShopingProduct key={index} product={item} />;
          })}
      </ScrollArea>
      <Link to='/checkout' className='w-full'>
        <Button className='w-full'>
          <ShoppingBag className='h-[1.2rem] w-[1.2rem] ' /> Checkout
        </Button>
      </Link>
    </Drower>
  );
};
const ShopingProduct = ({ product }: { product: Product }) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  return (
    <div className='flex gap-2 items-center justify-between w-full my-3'>
      <div className='flex-1 flex gap-2 items-center'>
        <img
          src={product.image}
          alt={product.title}
          className='w-[40px] h-[40px] object-contain rounded-md'
        />
        <div className='w-full flex flex-col'>
          <h4 className='text-sm font-semibold line-clamp-1'>
            {product.title}
          </h4>
          <span className='text-xs font-semibold'>
            $<span>{product.price}</span>
          </span>
        </div>
      </div>
      <div className='flex gap-2 items-center bg-red-400 p-1'>
        <button className='text-lg font-semibold bg-blue-200'>-</button>
        <span className='text-lg font-semibold'>{product.quantity}</span>
        <button className='text-lg font-semibold bg-blue-200'>+</button>
      </div>
      <Alert
        onClick={() => {
          removeFromCart(product.id);
        }}
      >
        <Trash2 size={20} />
      </Alert>
    </div>
  );
};

export default ShopingCard;
