import { useState } from "react";

const useDisclouse = () => {
  const [isOpen, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
    console.log("Close Model" );
  };
  const onOpen = () => {
    setOpen(true);
    console.log("Open Model");

  };
  return { onClose, onOpen, isOpen };
};

export default useDisclouse;