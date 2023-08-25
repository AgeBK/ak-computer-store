import { useEffect, useState, useRef } from "react";

const useHover = (props) => {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef();

  const handleEnter = () => {
    setIsHover(true);
  };

  const handleLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    const elem = ref.current;
    if (!elem) return;

    elem.addEventListener("mouseenter", handleEnter);
    elem.addEventListener("mouseleave", handleLeave);

    return () => {
      elem.removeEventListener("mouseenter", handleEnter);
      elem.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return [ref, isHover];
};

export default useHover;
