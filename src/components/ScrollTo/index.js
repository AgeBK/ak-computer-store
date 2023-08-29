import { useEffect } from "react";
import {
  NavigationType,
  useLocation,
  useNavigationType,
} from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  //   const useBackButton = () => {
  //     const navType = useNavigationType();
  //     return navType === NavigationType.Pop;
  //   };

  console.log(pathname);

  useEffect(() => {
    console.log("ScrollToTop UE");
    document.documentElement.scrollTo(
      {
        top: 0,
      },
      [pathname]
    );
  });
}

export default ScrollToTop;
