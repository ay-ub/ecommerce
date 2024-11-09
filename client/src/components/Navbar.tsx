import { ModeToggle } from "./ModeToggle";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Icon from "./Icon";
// import { useTranslation } from "react-i18next";
function Navbar() {
  // const { t, i18n } = useTranslation();

  return (
    <header className='flex container items-center justify-between h-[80px] fixed right-0 top-0 dark:bg-black/85 bg-white/85  z-50'>
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
        <Sheet>
          <SheetTrigger>
            <span className='rounded-full p-2 bg-gray-100 dark:bg-slate-900 cursor-pointer flex items-center justify-center'>
              <ShoppingBag className='h-[1.2rem] w-[1.2rem]  ' />
            </span>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

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
  );
}

export default Navbar;
