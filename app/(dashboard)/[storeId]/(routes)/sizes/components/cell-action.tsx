"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SizeColumn } from "./columns";
import { Button } from "@/components/ui/button";
import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { AlertModal } from "@/components/modals/alert-modal";

interface CellActionProps{
  data:SizeColumn
}

export const CellAction: React.FC<CellActionProps> = ({
  data
}) =>{
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState( false);
  const [open, setOpen] = useState(false);

  const onCopy = (id: string) =>{
    navigator.clipboard.writeText(id);
    toast.success("Size id copied to clipboard")
  }
  const onDelete = async () => {
    try{
      setLoading(true)
      await axios.delete(`/api/${params.storeId}/sizes/${data.id}`)
      router.refresh();
      toast.success("size deleted")
    }catch {
      toast.error("Remove all products using this size");
    }finally{
      setLoading(false)
      setOpen(false)
    }
  }

  return(
    <>
    <AlertModal 
      isOpen={open}
      onClose={() => setOpen(false)}
      onConfirm={onDelete}
      loading={loading}
    />
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          Actions
        </DropdownMenuLabel>
         <DropdownMenuItem onClick={() => onCopy(data.id)}>
          <Copy className="mr-2 h-4 w-4"/>
          Copy Id
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push(`/${params.storeId}/sizes/${data.id}`)}>
          <Edit className="mr-2 h-4 w-4"/>
          Update
        </DropdownMenuItem>
         <DropdownMenuItem onClick={() => setOpen(true)}>
          <Trash className="mr-2 h-4 w-4"/>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </>
  )
}