"use client";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";


interface OrderClientProps{
  data: OrderColumn[]
}
export const OrderClient: React.FC<OrderClientProps> = ({
  data
}) =>{
  return (
  <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage Orders for your store"
      />
      
    <Separator/>
    <DataTable searchKey="Products" columns={columns} data={data}/>
  </>
  )
}