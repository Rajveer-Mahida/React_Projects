import { useState } from "react";

const useDisclouse = () => {
  const [isOpen, setOpen] = useState(true);

  const onClose = () => {
    setOpen(false);
    console.log("Close");
  };
  const onOpen = () => {
    setOpen(true);
    console.log("Open" + isOpen);

  };
  return { onClose, onOpen, isOpen };
};

export default useDisclouse;