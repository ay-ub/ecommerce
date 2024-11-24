import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import Navbar from "@/components/Navbar";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  const [showScrollIcon, setShowScrollIcon] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowScrollIcon(true);
      } else {
        setShowScrollIcon(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className='min-h-screen '>
      <Navbar />
      <div className='relative z-[10] pt-4 '>
        <Outlet />
        <Footer />
      </div>
      <Icon
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className={`fixed  right-6  cursor-pointer duration-300 ${
          showScrollIcon
            ? "z-[999] bottom-6 opacity-100"
            : "-z-[10] bottom-4 opacity-0"
        }`}
      >
        <ArrowUp />
      </Icon>
    </div>
  );
}

export default HomeLayout;
