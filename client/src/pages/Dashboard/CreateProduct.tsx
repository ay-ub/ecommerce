import CustomInput from "@/components/CustomInput";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product } from "@/types/product";

function CreateProduct() {
  const [product, setProduct] = useState<Product>({
    title: "",
    description: "string",
    price: 0,
    image: "",
    category: "",
    stockQuantity: 0,
    images: [],
  });
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = e.target.files;
      setProduct((prev) => ({
        ...prev,
        images: [...prev.images, ...Array.from(files)], // Convert FileList to array
      }));
    }
  };
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
          <Select>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Select a Category' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>North America</SelectLabel>
                <SelectItem value='est'>Eastern Standard Time (EST)</SelectItem>
                <SelectItem value='cst'>Central Standard Time (CST)</SelectItem>
                <SelectItem value='mst'>
                  Mountain Standard Time (MST)
                </SelectItem>
                <SelectItem value='pst'>Pacific Standard Time (PST)</SelectItem>
                <SelectItem value='akst'>
                  Alaska Standard Time (AKST)
                </SelectItem>
                <SelectItem value='hst'>Hawaii Standard Time (HST)</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Europe & Africa</SelectLabel>
                <SelectItem value='gmt'>Greenwich Mean Time (GMT)</SelectItem>
                <SelectItem value='cet'>Central European Time (CET)</SelectItem>
                <SelectItem value='eet'>Eastern European Time (EET)</SelectItem>
                <SelectItem value='west'>
                  Western European Summer Time (WEST)
                </SelectItem>
                <SelectItem value='cat'>Central Africa Time (CAT)</SelectItem>
                <SelectItem value='eat'>East Africa Time (EAT)</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Asia</SelectLabel>
                <SelectItem value='msk'>Moscow Time (MSK)</SelectItem>
                <SelectItem value='ist'>India Standard Time (IST)</SelectItem>
                <SelectItem value='cst_china'>
                  China Standard Time (CST)
                </SelectItem>
                <SelectItem value='jst'>Japan Standard Time (JST)</SelectItem>
                <SelectItem value='kst'>Korea Standard Time (KST)</SelectItem>
                <SelectItem value='ist_indonesia'>
                  Indonesia Central Standard Time (WITA)
                </SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Australia & Pacific</SelectLabel>
                <SelectItem value='awst'>
                  Australian Western Standard Time (AWST)
                </SelectItem>
                <SelectItem value='acst'>
                  Australian Central Standard Time (ACST)
                </SelectItem>
                <SelectItem value='aest'>
                  Australian Eastern Standard Time (AEST)
                </SelectItem>
                <SelectItem value='nzst'>
                  New Zealand Standard Time (NZST)
                </SelectItem>
                <SelectItem value='fjt'>Fiji Time (FJT)</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>South America</SelectLabel>
                <SelectItem value='art'>Argentina Time (ART)</SelectItem>
                <SelectItem value='bot'>Bolivia Time (BOT)</SelectItem>
                <SelectItem value='brt'>Brasilia Time (BRT)</SelectItem>
                <SelectItem value='clt'>Chile Standard Time (CLT)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className='grid w-full gap-1.5'>
            <Label htmlFor='description'>Product description</Label>
            <Textarea
              placeholder='Type your product description.'
              id='description'
              rows={10}
            />
          </div>
        </div>
        <div className=' p-3 border border-muted rounded-md flex-1'>
          <div className='flex flex-col gap-3'>
            <Label>
              Upload images <span className='text-red-500'>*</span>
            </Label>
            <div className='flex flex-col gap-3'>
              {/* <Label>Selec Image</Label> */}
              <div className='w-full h-32  rounded-lg border border-dashed duration-300 hover:border-primary'>
                <label
                  htmlFor='file'
                  className='file-upload-label h-full w-full cursor-pointer flex flex-col justify-center items-center select-none'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-cloud-upload'
                  >
                    <path d='M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242' />
                    <path d='M12 12v9' />
                    <path d='m16 16-4-4-4 4' />
                  </svg>
                  <div className='file-upload-design'>
                    <p>Drag and Drop</p>
                    <span>or </span>
                    <span className='text-primary cursor-pointer'>
                      Browse file
                    </span>
                  </div>
                  <input
                    id='file'
                    type='file'
                    accept='image/*'
                    onChange={(e) => handleFileChange(e)}
                    multiple
                    className='hidden'
                  />
                </label>
              </div>
            </div>
          </div>
          <div className='flex gap-3 justify-start p-1 flex-wrap mt-3'>
            {product.images.length > 0 ? (
              product.images.map((image, index) => (
                <div
                  key={index}
                  className='w-32 h-32  rounded-lg flex justify-center items-center relative'
                >
                  <img
                    src={URL.createObjectURL(image)}
                    alt='allInOne'
                    className='h-full object-cover rounded-lg '
                  />
                  {/* add remove img btn */}
                  <button
                    onClick={() => {
                      setProduct((prev) => ({
                        ...prev,
                        images: prev.images.filter(
                          (_, imgIndex) => imgIndex !== index
                        ),
                      }));
                    }}
                    className='absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex justify-center items-center hover:bg-red-600'
                  >
                    &times;
                  </button>
                </div>
              ))
            ) : (
              <div className='text-center'>Please select an image</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
