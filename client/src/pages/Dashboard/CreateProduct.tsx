import CustomInput from "@/components/CustomInput";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function CreateProduct() {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <SectionTitle title='Create Product' />
        <Button>Create Now</Button>
      </div>
      <div className='flex gap-3'>
        <div className='flex-1 p-3 border border-muted rounded-md flex flex-col gap-5'>
          <div className='flex gap-3 items-center'>
            <CustomInput
              label='product name'
              id='name'
              placeholder='product name:'
              type='text'
            />
            <CustomInput
              label='Price'
              id='price'
              placeholder='price:'
              type='number'
            />
          </div>
          <div className='grid w-full gap-1.5'>
            <Label htmlFor='Details'>Product Details</Label>
            <Textarea
              placeholder='Type your product details.'
              id='Details'
              rows={10}
            />
          </div>
        </div>
        <div
          className=' p-3 border border-muted rounded-md flex-1
        '
        ></div>
      </div>
    </div>
  );
}

export default CreateProduct;
