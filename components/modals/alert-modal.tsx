"use client"

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface AlertModalProps{
  isOpen:boolean;
  onClose:() => void;
  onConfirm: () => void;
  loading:boolean;
}
export const AlertModal:React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading
}) =>{
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() =>{
    setIsMounted(true);
  },[])

  if (!isMounted){
    return null;
  }
  return (
    <Modal
      title="Confirm"
      description="This action can not be undone."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-2 items-center justify-end w-full">
        <Button disabled={loading} variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={loading} variant="destructive" onClick={onConfirm}>Continue</Button>
      </div>
    </Modal>
  )

}