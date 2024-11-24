import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
function ToggleLang() {
  return (
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
  );
}

export default ToggleLang;
