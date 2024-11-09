import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import Navbar from "@/components/Navbar";
import { ArrowUp } from "lucide-react";
import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  const scrollToTopRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        scrollToTopRef.current?.classList.add("show-scroll-icon");
      } else {
        scrollToTopRef.current?.classList.remove("show-scroll-icon");
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
        ref={scrollToTopRef}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className='fixed bottom-6 right-6  z-[999] animate-bounce cursor-pointer'
      >
        <ArrowUp />
      </Icon>
    </div>
  );
}

export default HomeLayout;
