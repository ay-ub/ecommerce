import { ShoppingBag } from "lucide-react";
import Drower from "./Drower";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
const ShopingCard = () => {
  return (
    <Drower
      trigger={
        <span className='rounded-full p-2 bg-gray-100 dark:bg-slate-900 cursor-pointer flex items-center justify-center'>
          <ShoppingBag className='h-[1.2rem] w-[1.2rem]  ' />
        </span>
      }
      title={
        <>
          <span className='rounded-full p-2 bg-gray-100 dark:bg-slate-900 cursor-pointer flex items-center justify-center'>
            <ShoppingBag className='h-[1.2rem] w-[1.2rem]  ' />
          </span>
          <h3>Shopping Cart</h3>
          {/* <span onClick={clearCart()}>clear</span> */}
        </>
      }
    >
      <ScrollArea className='h-[calc(100vh-127px)] w-full p-4'>
        <ShopingProduct />
        <ShopingProduct />
        <ShopingProduct />
        <ShopingProduct />
        <ShopingProduct />
        <ShopingProduct />
        <ShopingProduct />
        <ShopingProduct />
        <ShopingProduct />
        <ShopingProduct />
        <ShopingProduct />
        <ShopingProduct />
      </ScrollArea>
      <Link to='/checkout' className='w-full'>
        <Button className='w-full'>
          <ShoppingBag className='h-[1.2rem] w-[1.2rem] ' /> Checkout
        </Button>
      </Link>
    </Drower>
  );
};
const ShopingProduct = () => {
  return (
    <div className='flex gap-2 items-center justify-between w-full my-3'>
      <div className='flex gap-2 items-center'>
        <img
          src='https://via.placeholder.com/150'
          alt='product'
          className='w-[50px] h-[50px] object-cover rounded-md'
        />
        <div className='flex flex-col'>
          <h4 className='text-sm font-semibold'>Product Name</h4>
          <span className='text-xs font-semibold'>
            $<span>100</span>
          </span>
        </div>
      </div>
      <div className='flex gap-2 items-center'>
        <button className='text-lg font-semibold'>-</button>
        <span className='text-lg font-semibold'>1</span>
        <button className='text-lg font-semibold'>+</button>
      </div>
    </div>
  );
};

export default ShopingCard;
