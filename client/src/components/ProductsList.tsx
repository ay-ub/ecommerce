import ProductsCard from "./ProductsCard";

function ProductsList({
  products,
}: {
  products: { id: number; title: string; price: number; image: string }[];
}) {
  return (
    <div className='products-list w-full '>
      {products.map((product, index) => (
        <ProductsCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductsList;
