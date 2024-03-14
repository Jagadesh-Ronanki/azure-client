import { BadgeDollarSign } from "lucide-react"
import { DataTableColumnHeader } from "./data-table-column-header.jsx"

export const columns = [
  {
    accessorKey: "ProductName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Product Name" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("ProductName")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <BadgeDollarSign className="mr-2 h-4 w-4 text-muted-foreground" />
          <span>{row.getValue("Price")}</span>
        </div>
      )
    },
  }
]