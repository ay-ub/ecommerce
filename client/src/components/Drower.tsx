import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
function Drower({
  children,
  title,
  trigger,
}: {
  children: React.ReactNode;
  title: React.ReactNode;
  trigger: React.ReactNode;
}) {
  return (
    <Sheet>
      <SheetTrigger>{trigger}</SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle className='flex gap-1 items-center'>{title}</SheetTitle>
          <SheetDescription className='flex flex-col gap-3 items-center'>
            {children}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default Drower;
