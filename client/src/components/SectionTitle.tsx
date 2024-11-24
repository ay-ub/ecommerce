function SectionTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className='relative py-2 mb-3'>
      <h1
        className={`text-xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 text-nowrap capitalize  ${className}`}
      >
        {title}
      </h1>
      <span
        className='absolute bottom-0 left-0 w-16 h-1 bg-primary rounded-full
      '
      ></span>
    </div>
  );
}

export default SectionTitle;
