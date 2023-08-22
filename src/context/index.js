import { createContext, useEffect, useState } from "react";
const ComputerContext = createContext();

// HOC provider component
const ComputerProvider = ({ children }) => {
  console.log("ComputerProvider");
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("UE ComputerProvider");

    fetch("https://api.jsonbin.io/v3/b/64dac8e4b89b1e2299d0be92", {
      headers: {
        "X-Master-Key":
          "$2b$10$7wi868EeSSz3TOSGPYrDfOQ1QkIJVEMy61R.u9zI3hmwwk1aLTb7W",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.record.ProductCollection);
        setLoading(false);
        setData(data.record.ProductCollection);
      })
      .catch((err) => setError(true));
  }, []);

  const addToCart = (productId, productName, price) => {
    let qty = cart[productId] ? cart[productId].qty + 1 : 1;
    const obj = {
      ...cart,
      [productId]: { productId, productName, price, qty },
    };
    console.log(obj);
    setCart(obj);
  };

  return (
    <ComputerContext.Provider value={{ data, loading, error, addToCart, cart }}>
      {children}
    </ComputerContext.Provider>
  );
};
export { ComputerProvider, ComputerContext };
