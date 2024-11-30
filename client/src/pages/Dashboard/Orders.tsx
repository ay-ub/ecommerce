import CustumTable from "@/components/CustumTable";
import SectionTitle from "@/components/SectionTitle";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Payment } from "./ProductList";

export type Order = {
  orderId: string;
  customerName: string;
  orderDate: string;
  status: "Pending" | "Processing" | "Delivered" | "Failed";
  totalAmount: number;
};

// eslint-disable-next-line react-refresh/only-export-components
export const data: Order[] = [
  {
    orderId: "ORD001",
    customerName: "John Doe",
    orderDate: "2024-11-20",
    status: "Delivered",
    totalAmount: 149.99,
  },
  {
    orderId: "ORD002",
    customerName: "Jane Smith",
    orderDate: "2024-11-21",
    status: "Processing",
    totalAmount: 89.49,
  },
  {
    orderId: "ORD003",
    customerName: "Emily Brown",
    orderDate: "2024-11-22",
    status: "Pending",
    totalAmount: 120.75,
  },
  {
    orderId: "ORD004",
    customerName: "Michael Johnson",
    orderDate: "2024-11-23",
    status: "Failed",
    totalAmount: 54.0,
  },
  {
    orderId: "ORD005",
    customerName: "Emma Wilson",
    orderDate: "2024-11-24",
    status: "Delivered",
    totalAmount: 299.99,
  },
  {
    orderId: "ORD006",
    customerName: "Lucas Miller",
    orderDate: "2024-11-25",
    status: "Processing",
    totalAmount: 245.5,
  },
  {
    orderId: "ORD007",
    customerName: "Olivia Davis",
    orderDate: "2024-11-26",
    status: "Pending",
    totalAmount: 74.3,
  },
  {
    orderId: "ORD008",
    customerName: "Liam Martinez",
    orderDate: "2024-11-27",
    status: "Failed",
    totalAmount: 102.25,
  },
];

// eslint-disable-next-line react-refresh/only-export-components
export const columns: ColumnDef<Order | Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "orderId",
    header: "Order ID",
    cell: ({ row }) => <div>{row.getValue("orderId")}</div>,
  },
  {
    accessorKey: "customerName",
    header: "Customer",
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue("customerName")}</div>
    ),
  },
  {
    accessorKey: "orderDate",
    header: "Order Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("orderDate"));
      return <div>{date.toLocaleDateString()}</div>;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <Button
        variant='ghost'
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Status
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <span className={`status ${row.getValue("status").toLowerCase()}`}>
        {row.getValue("status")}
      </span>
    ),
  },
  {
    accessorKey: "totalAmount",
    header: () => <div className='text-right'>Total</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalAmount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className='text-right font-medium'>{formatted}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const order = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(order.orderId)}
            >
              Copy Order ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Cancel Order</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

function Orders() {
  return (
    <div>
      <SectionTitle title='Orders' />
      <CustumTable columns={columns} data={data} />
    </div>
  );
}

export default Orders;
