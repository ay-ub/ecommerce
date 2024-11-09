// import { ArrowDown } from "lucide-react";
// import { Card } from "@/components/ui/card";
import SectionTitle from "@/components/SectionTitle";
import { useEffect, useRef, useState } from "react";
import ProductsList from "@/components/ProductsList";
import { Button } from "@/components/ui/button";

function Home() {
  const shopingByCat = useRef<HTMLDivElement>(null);
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  return (
    <div className='px-4 flex flex-col gap-8'>
      {/* <section className='container bg-gray-100 dark:bg-slate-900  p-4 rounded-3xl h-[calc(100vh-112px)] relative '>
        <h1 className='text-4xl font-bold'>Home</h1>
        <p className='text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          tenetur, voluptates, quas, voluptatum dolorum quod tempore
          necessitatibus quidem quae quibusdam repellendus. Quisquam tenetur,
          voluptates, quas, voluptatum dolorum quod tempore necessitatibus
          quidem quae quibusdam repellendus.
        </p>
        <span
          className='absolute bottom-4 left-1/2 -translate-x-1/2 scrollToBtm  p-2 rounded-full border-2 animate-bounce cursor-pointer'
          onClick={() => {
            shopingByCat?.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ArrowDown />
        </span>
      </section> */}

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
    </div>
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
