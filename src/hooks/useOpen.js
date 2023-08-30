import { useEffect, useState, useRef } from "react";

const useOpen = (props) => {
  const [isOpen, setisOpen] = useState(false);
  const ref = useRef();

  const handleEnter = () => setisOpen(true);

  const handleLeave = () => setisOpen(false);

  const handleClick = () => (isOpen ? setisOpen(false) : setisOpen(true));

  useEffect(() => {
    const elem = ref.current;
    if (!elem) return;

    elem.addEventListener("mouseenter", handleEnter);
    elem.addEventListener("mouseleave", handleLeave);
    elem.addEventListener("onclick", handleClick);

    return () => {
      elem.removeEventListener("mouseenter", handleEnter);
      elem.removeEventListener("mouseleave", handleLeave);
      elem.removeEventListener("onclick", handleClick);
    };
  });

  return [ref, isOpen, handleClick];
};

export default useOpen;
