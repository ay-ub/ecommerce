// import { Card } from "@/components/ui/card";
import SectionTitle from "@/components/SectionTitle";
import { useRef } from "react";
import ProductsList from "@/components/ProductsList";
import { Button } from "@/components/ui/button";
import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

function Home() {
  const shopingByCat = useRef<HTMLDivElement>(null);
  // const [categories, setCategories] = useState<string[]>([]);
  // useEffect(() => {
  //   const getCategories = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://fakestoreapi.com/products/categories"
  //       );
  //       const data = await response.json();
  //       setCategories(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getCategories();
  // }, []);
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <section className='px-4 flex flex-col gap-8'>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      {/* <section className='container' ref={shopingByCat}>
        <div className='px-8'>
          <SectionTitle title='Shop by Category' className='flex-1 ' />
        </div>
        <div
          className='categories flex gap-3 items-center flex-wrap justify-start px-8
            '
        >
          {categories.map((category) => (
            <CategoryCard key={category} category={category} />
          ))}
        </div>
      </section> */}

      <section ref={shopingByCat}>
        <div className='flex items-center justify-between px-8'>
          <SectionTitle title='New arrivals' />
          <Button variant={"outline"} className='capitalize'>
            View all
          </Button>
        </div>

        <ProductsList />
      </section>

      <section>
        <div className='flex items-center justify-between px-8'>
          <SectionTitle title='Most popular' />
          <Button variant={"outline"} className='capitalize'>
            View all
          </Button>
        </div>
        <ProductsList />
      </section>
    </section>
  );
}

export default Home;

// const CategoryCard = ({ category }: { category: string }) => {
//   return (
//     <Card className='flex items-center justify-center h-32 w-32 rounded-full'>
//       {category}
//     </Card>
//   );
// };
