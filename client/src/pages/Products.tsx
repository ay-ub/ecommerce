import ProductsList from "@/components/ProductsList";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
function Products() {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
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
    <section className='container flex items-start gap-3'>
      <div className='w-[300px] rounded-md dark:bg-slate-900 bg-gray-100 h-[calc(100vh-112px)] p-3'>
        <h1>Filters</h1>
        {/* progress input
         */}
        <div className='flex flex-col gap-3'>
          <label htmlFor='price'>Price</label>
          <input
            type='range'
            id='price'
            name='price'
            min='0'
            max='100'
            step='10'
          />
        </div>
      </div>
      <div className='flex-1'>
        <div className='flex justify-between items-center'>
          <SectionTitle title='ALL Products ' />
          <div className='category flex gap-1 items-center'>
            <Button
              variant={selectedCategory === "All" ? "secondary" : "outline"}
            >
              All
            </Button>
            {categories.map((category) => (
              <Button variant='outline' className='capitalize'>
                {category}
              </Button>
            ))}
          </div>
        </div>
        <ProductsList />
        <Pagination className='mt-3'>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href='#' />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#' isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href='#' />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}

export default Products;
