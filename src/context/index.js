import { createContext, useEffect, useState } from "react";
const ComputerContext = createContext();

// HOC provider component
const ComputerProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://json.extendsclass.com/bin/4b24f5d1ed36")
      .then((res) => res.json())
      .then(({ ProductCollection }) => {
        console.log(ProductCollection);
        setData(ProductCollection);
      });
  }, []);

  return (
    <ComputerContext.Provider value={{ data }}>
      {children}
    </ComputerContext.Provider>
  );
};
export { ComputerProvider, ComputerContext };
