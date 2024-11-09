import ProductsList from "@/components/ProductsList";
import SectionTitle from "@/components/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ProductDetails() {
  //  get the product id from the url
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    price: 0,
    image: "",
    description: "",
    category: "",
  });
  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
        // scroll to top smoothly
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } catch (error) {
        console.log(error);
      }
    };
    getSingleProduct();
  }, [productId]);
  return (
    <section className='container'>
      <div className='min-h-[calc(100vh-96px)] flex justify-between items-start gap-3 flex-col md:flex-row'>
        <div className='flex-1 flex items-start justify-center gap-3 px-4 flex-col-reverse md:flex-row'>
          <div className='images flex  md:flex-col gap-1'>
            <Thembnail image={product.image} title={product.title} />
            <Thembnail image={product.image} title={product.title} />
            <Thembnail image={product.image} title={product.title} />
            <Thembnail image={product.image} title={product.title} />
          </div>
          <div className='flex justify-center items-center '>
            <img
              src={product.image}
              alt={product.title}
              className=' h-[500px] aspect-square object-contain rounded-md'
            />
          </div>
        </div>

        <div className='flex-1 flex flex-col gap-3'>
          <p className='opacity-60'>
            {product.category.length > 20
              ? `${product.category.substring(0, 20)}...`
              : product.category}
          </p>
          <h3 className='text-3xl font-bold'>{product.title}</h3>
          <div className='review flex gap-1'>
            <span className='text-sm'>4.5</span>
            <span className='text-sm'>⭐</span>
            <span className='text-sm'>(200 reviews)</span>
          </div>
          <p className='flex items-end gap-3'>
            <del className='opacity-60 text-xl'>$129.00</del>
            <span className='text-3xl font-bold'>
              ${product.price.toFixed(2)}
            </span>
            <Badge className='text-sm' variant='secondary'>
              -23% discount
            </Badge>
          </p>

          <div>
            <h3 className='font-semibold text-xl'>Description</h3>
            <p>{product.description}</p>
          </div>
          <div className='flex gap-3'>
            <Button variant='secondary'>
              <ShoppingBag /> Add to Cart
            </Button>
            <Button>
              <DollarSign /> Buy Now
            </Button>
          </div>
        </div>
      </div>
      <div className='py-4'>
        <div className='flex items-center justify-between px-8'>
          <SectionTitle title='Most popular products' />
          <button className='btn'>View all</button>
        </div>
        <ProductsList />
      </div>
    </section>
  );
}

export default ProductDetails;

const Thembnail = ({ image, title }: { image: string; title: string }) => {
  return (
    <img
      src={image}
      alt={title}
      className='image w-32 cursor-pointer aspect-square bg-gray-200 dark:bg-slate-800 select-none rounded-md'
    />
  );
};
