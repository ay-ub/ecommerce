import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const CustomInput = ({
  label,
  id,
  placeholder,
  type = "text",
}: {
  label: string;
  id: string;
  placeholder?: string;
  type?: string;
}) => {
  return (
    <div className='grid w-full  items-center gap-1.5'>
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} placeholder={placeholder} />
    </div>
  );
};

export default CustomInput;
