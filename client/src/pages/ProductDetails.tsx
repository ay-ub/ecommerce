// import ProductsList from "@/components/ProductsList";
import SectionTitle from "@/components/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ProductDetails() {
  const { productId } = useParams<{ productId: string }>();
  const fetckProductById = useProductsStore((state) => state.fetchProductById);
  const loading = useProductsStore((state) => state.loading);
  const product = useProductsStore((state) => state.currentProduct);
  useEffect(() => {
    if (productId) {
      fetckProductById(productId);
    }
  }, [productId]);

  return (
    (!loading && product.title !== "" && (
      <section className='container'>
        <div className='min-h-[calc(100vh-96px)] flex justify-between items-start gap-3 flex-col lg:flex-row'>
          <div>
            <EmblaCarousel
              slides={[
                product.image,
                product.image,
                product.image,
                product.image,
                product.image,
                product.image,
                product.image,
                product.image,
                product.image,
                product.image,
                product.image,
                product.image,
              ]}
            />
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
          <div className='flex items-center justify-between p-3 md:px-8'>
            <SectionTitle title='Most popular products' />
            <button className='btn'>View all</button>
          </div>
          {/* <ProductsList /> */}
        </div>
      </section>
    )) || (
      <div className='h-screen flex justify-center items-center'>
        {loading ? <Loader /> : <span>no data</span>}
      </div>
    )
  );
}

export default ProductDetails;

import React, { useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";
import Loader from "@/components/Loader";
import useProductsStore from "@/store/ProductsStore";
type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className='embla  '>
      <div className='embla__viewport' ref={emblaMainRef}>
        <div className='embla__container'>
          {slides.map((img, index) => (
            <div className='embla__slide flex justify-center' key={index}>
              <img
                src={img}
                alt=''
                className=' h-[400px] aspect-square object-contain rounded-md'
              />
            </div>
          ))}
        </div>
      </div>
      <div className='embla-thumbs'>
        <div className='embla-thumbs__viewport' ref={emblaThumbsRef}>
          <div className='embla-thumbs__container m '>
            {slides.map((img, index) => (
              <Thumb
                img={img}
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

type PropTypeTh = {
  selected: boolean;
  index: number;
  onClick: () => void;
  img: string;
};

const Thumb: React.FC<PropTypeTh> = (props) => {
  const { selected, onClick, img } = props;

  return (
    <div
      className={"embla-thumbs__slide duration-300 p-3".concat(
        selected ? " embla-thumbs__slide--selected scale-110" : ""
      )}
    >
      <img
        onClick={onClick}
        src={`${img}`}
        alt='Your alt text'
        className={`embla-thumbs__slide__img cursor-pointer `}
      />
    </div>
  );
};
