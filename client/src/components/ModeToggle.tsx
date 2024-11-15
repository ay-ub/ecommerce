import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import Icon from "./Icon";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div
      className='w-10 h-10 flex items-center justify-center
    '
    >
      {theme === "light" ? (
        <Icon
          onClick={() => {
            setTheme("dark");
          }}
        >
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100  transition-all dark:-rotate-90 dark:scale-0 ' />
        </Icon>
      ) : (
        <Icon
          className='rounded-full p-2 bg-gray-100 dark:bg-slate-900 cursor-pointer'
          onClick={() => {
            console.log("clicked");
            setTheme("light");
          }}
        >
          <Moon className='h-[1.2rem] w-[1.2rem] rotate-90 scale-0  transition-all dark:rotate-0 dark:scale-100 ' />
        </Icon>
      )}
    </div>
  );
}
