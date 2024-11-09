function Icon({
  children,
  className,
  onClick,
  ref,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  ref?: React.RefObject<HTMLSpanElement>;
}) {
  return (
    <span
      ref={ref}
      onClick={onClick}
      className={`rounded-full p-2 bg-gray-100 dark:bg-slate-900 cursor-pointer ${className}`}
    >
      {children}
    </span>
  );
}

export default Icon;
