// import { ModeToggle } from "./ModeToggle";
import SearchBar from "./SearchBar";
import { Link, NavLink } from "react-router-dom";

import { Menu, ShoppingBag } from "lucide-react";
import Drower from "./Drower";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import ShopingProduct from "./ShopingProduct";
import ToggleLang from "./ToggleLang";

// import { useTranslation } from "react-i18next";
function Navbar() {
  // const { t, i18n } = useTranslation();

  return (
    <div className='fixed left-0 top-0 dark:bg-black/95 bg-white/95  z-50 w-full'>
      <header className='flex container items-center justify-between h-[80px] '>
        <div className='logo'>mylogo</div>
        <ul className='flex-1 items-center justify-center hidden md:flex'>
          <li>
            <NavLink to='/' className='font-semibold uppercase p-3 rounded-md'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/products'
              className='font-semibold uppercase p-3 rounded-md '
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className='font-semibold uppercase p-3 rounded-md'
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              className='font-semibold uppercase p-3 rounded-md'
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className='flex gap-2 items-center justify-end w-[335px]'>
          <SearchBar />
          {/* <ModeToggle /> */}
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
          <Drower
            trigger={
              <span className='rounded-full p-2 bg-gray-100 dark:bg-slate-900 cursor-pointer flex items-center justify-center md:hidden'>
                <Menu className='h-[1.2rem] w-[1.2rem] ' />
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
            <ScrollArea className='h-[calc(100vh-67px)] w-full p-4'>
              <ul className='flex flex-col gap-2'>
                <li>
                  <NavLink to='/category1' className='font-semibold uppercase'>
                    Category 1
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/category2' className='font-semibold uppercase'>
                    Category 2
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/category3' className='font-semibold uppercase'>
                    Category 3
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/category4' className='font-semibold uppercase'>
                    Category 4
                  </NavLink>
                </li>
              </ul>
            </ScrollArea>
          </Drower>
          <ToggleLang />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
