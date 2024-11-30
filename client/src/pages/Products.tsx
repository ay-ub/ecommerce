import Loader from "@/components/Loader";
import ProductsList from "@/components/ProductsList";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    category || "all"
  );

  const productsList = useFetch({
    url: category
      ? `https://fakestoreapi.com/products/category/${category}`
      : "https://fakestoreapi.com/products",
  });
  const navigate = useNavigate();
  const updateCategoryParams = (category: string) => {
    setSearchParams({ category });
  };

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
          <SectionTitle title={`${selectedCategory.toUpperCase()} Products`} />
          <CategoryList
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            updateCategoryParams={updateCategoryParams}
            navigate={navigate}
          />
        </div>
        {productsList.loading ? (
          <div className='flex justify-center'>
            <Loader />
          </div>
        ) : (
          (productsList.data && productsList.data.length > 0 && (
            <ProductsList products={productsList.data || []} />
          )) || <div className='flex justify-center'>No products found</div>
        )}
      </div>
    </section>
  );
}

export default Products;

const CategoryList = ({
  selectedCategory,
  setSelectedCategory,
  updateCategoryParams,
  navigate,
}: {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  updateCategoryParams: (category: string) => void;
  navigate: (path: string) => void;
}) => {
  // const [categories, setCategories] = useState<string[]>([]);
  const categories = useFetch({
    url: "https://fakestoreapi.com/products/categories",
  });

  return (
    <div className='category flex gap-1 items-center'>
      <Button
        variant={
          selectedCategory.toLowerCase() === "All".toLowerCase()
            ? "secondary"
            : "outline"
        }
        onClick={() => {
          setSelectedCategory("all");
          navigate(`/products`);
        }}
      >
        All
      </Button>
      {categories.data &&
        categories.data.map((category, i) => (
          <Button
            key={i}
            variant={
              selectedCategory.toLowerCase() === category.toLowerCase()
                ? "secondary"
                : "outline"
            }
            className={`capitalize`}
            onClick={() => {
              setSelectedCategory(category);
              updateCategoryParams(category);
            }}
          >
            {category}
          </Button>
        ))}
    </div>
  );
};
