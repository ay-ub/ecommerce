const ShopingProduct = () => {
  return (
    <div className='flex gap-2 items-center justify-between w-full my-3'>
      <div className='flex gap-2 items-center'>
        <img
          src='https://via.placeholder.com/150'
          alt='product'
          className='w-[50px] h-[50px] object-cover rounded-md'
        />
        <div className='flex flex-col'>
          <h4 className='text-sm font-semibold'>Product Name</h4>
          <span className='text-xs font-semibold'>
            $<span>100</span>
          </span>
        </div>
      </div>
      <div className='flex gap-2 items-center'>
        <button className='text-lg font-semibold'>-</button>
        <span className='text-lg font-semibold'>1</span>
        <button className='text-lg font-semibold'>+</button>
      </div>
    </div>
  );
};

export default ShopingProduct;
