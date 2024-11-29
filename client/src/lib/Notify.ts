import { toast } from "sonner";

function Notify(content: string, type: string) {
  switch (type) {
    case "success":
      toast.success(content);
      break;
    case "error":
      toast.error(content);
      break;
    case "info":
      toast(content);
      break;
    case "warning":
      toast.warning(content);
      break;
    default:
      console.warn(`Unknown toast type: ${type}`);
      toast(content);
  }
}

export default Notify;
