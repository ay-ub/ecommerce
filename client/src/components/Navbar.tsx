import { ModeToggle } from "./ModeToggle";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages, Menu, ShoppingBag } from "lucide-react";
import Drower from "./Drower";

// import { useTranslation } from "react-i18next";
function Navbar() {
  // const { t, i18n } = useTranslation();

  return (
    <div className='fixed left-0 top-0 dark:bg-black/95 bg-white/95  z-50 w-full'>
      <header className='flex container items-center justify-between h-[80px] '>
        <div className='logo'>mylogo</div>
        <ul className='flex-1 flex gap-4 items-center justify-center '>
          <li>
            <NavLink to='/' className='font-semibold uppercase'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/products' className='font-semibold uppercase'>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className='font-semibold uppercase'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className='font-semibold uppercase'>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className='flex gap-2 items-center justify-end w-[335px]'>
          <SearchBar />
          <ModeToggle />
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
              </>
            }
          >
            <ShopingProduct />
            <ShopingProduct />
            <ShopingProduct />
          </Drower>
          <Drower
            trigger={
              <span className='rounded-full p-2 bg-gray-100 dark:bg-slate-900 cursor-pointer flex items-center justify-center'>
                <Menu className='h-[1.2rem] w-[1.2rem]  ' />
              </span>
            }
            title={
              <>
                <span className='rounded-full p-2 bg-gray-100 dark:bg-slate-900 cursor-pointer flex items-center justify-center'>
                  <Menu className='h-[1.2rem] w-[1.2rem]  ' />
                </span>
                <h3>
                  Menu <span className='text-xs'>(Categories)</span>
                </h3>
              </>
            }
          >
            <ShopingProduct />
            <ShopingProduct />
            <ShopingProduct />
          </Drower>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className='rounded-full p-2 bg-gray-100 dark:bg-slate-900 cursor-pointer flex items-center justify-center'>
                <Languages className='h-[1.2rem] w-[1.2rem]  ' />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>French</DropdownMenuItem>
              <DropdownMenuItem>العربية</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
}

export default Navbar;

const ShopingProduct = () => {
  return (
    <div className='flex gap-2 items-center justify-between w-full'>
      <div className='flex gap-2 items-center'>
        <img
          src='https://via.placeholder.com/150'
          alt='product'
          className='w-[50px] h-[50px] object-cover rounded-md'
        />
        <div className='flex flex-col'>
          <h4 className='text-sm font-semibold'>Product Name</h4>
          <span className='text-xs font-semibold'>Price</span>
        </div>
      </div>
      <div className='flex gap-2 items-center'>
        <button className='text-xs font-semibold'>-</button>
        <span className='text-xs font-semibold'>1</span>
        <button className='text-xs font-semibold'>+</button>
      </div>
    </div>
  );
};
