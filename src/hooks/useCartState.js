import { useEffect, useState, useRef, useCallback } from "react";

const useCartState = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const isTouchDevice = window.ontouchstart !== undefined;

  const handleOpen = useCallback(
    (e) => {
      e.stopPropagation();
      !isOpen && setIsOpen(true);
    },
    [isOpen]
  );

  const handleClose = useCallback(() => {
    isOpen && setIsOpen(false);
  }, [isOpen]);

  useEffect(() => {
    const elem = ref.current;
    if (!elem) return;

    if (isTouchDevice) {
      elem.addEventListener("mousedown", handleOpen);
      document.addEventListener("mousedown", handleClose);
    } else {
      elem.addEventListener("mouseenter", handleOpen);
      elem.addEventListener("mouseleave", handleClose);
    }

    return () => {
      if (isTouchDevice) {
        elem.removeEventListener("mousedown", handleOpen);
        document.removeEventListener("mousedown", handleClose);
      } else {
        elem.removeEventListener("mouseenter", handleOpen);
        elem.removeEventListener("mouseleave", handleClose);
      }
    };
  }, [handleOpen, handleClose, isTouchDevice]);

  return [ref, isOpen, isTouchDevice, handleClose];
};

export default useCartState;
