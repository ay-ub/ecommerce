import SectionTitle from "@/components/SectionTitle";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// import { Button } from "@/components/ui/button";
import CustomInput from "@/components/CustomInput";
function Checkout() {
  return (
    <section className='container flex flex-col  md:flex-row items-start justify-between gap-5 bg-gray-100 dark:bg-slate-800'>
      <div
        className={
          "p-7 rounded-md bg-white dark:bg-slate-950 min-h-[calc(100vh-120px)] flex-1"
        }
      >
        <h1 className='text-lg mb-4'>
          <SectionTitle title='User Information' />
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className='flex flex-col gap-5'
        >
          <div className='flex gap-5 items-center justify-between'>
            <CustomInput
              label='First Name'
              id='first-name'
              placeholder='First Name'
            />
            <CustomInput
              label='Last Name'
              id='last-name'
              placeholder='Last Name'
            />
          </div>
          <div className='flex gap-5 items-center justify-between'>
            <CustomInput
              label='telephone'
              id='telephone'
              placeholder='telephone'
              type='tel'
            />
            <CustomInput label='Address' id='address' placeholder='Address' />
          </div>
          <Select>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='city' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='1'>city 1</SelectItem>
              <SelectItem value='2'>city 2</SelectItem>
              <SelectItem value='3'>city 3</SelectItem>
            </SelectContent>
          </Select>
          <div className='grid w-full gap-1.5'>
            <Label htmlFor='message'>Your message</Label>
            <Textarea
              placeholder='Type your message here.'
              id='message'
              rows={7}
            />
          </div>
        </form>
      </div>
      <div className='p-7 rounded-md bg-white dark:bg-slate-950 min-h-[calc(100vh-120px)] w-5/12'>
        <SectionTitle title='Order Summary' />
      </div>
    </section>
  );
}

export default Checkout;