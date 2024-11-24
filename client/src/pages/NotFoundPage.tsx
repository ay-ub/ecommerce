import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
function NotFoundPage() {
  const navigate = useNavigate();
  const goToPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <div className='h-full flex justify-center items-center flex-col gap-3 text-3xl'>
      <h2 className='flex items-center justify-center gap-2 uppercase'>
        404 <Separator orientation='vertical' /> page not found
      </h2>
      <Button variant='secondary' className='uppercase' onClick={goToPrev}>
        go back
      </Button>
    </div>
  );
}

export default NotFoundPage;
