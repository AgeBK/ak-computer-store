import { createContext, useEffect, useState } from "react";
const ComputerContext = createContext();

function ComputerProvider({ children }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState({});
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/64dac8e4b89b1e2299d0be92", {
      headers: {
        "X-Master-Key":
          "$2b$10$7wi868EeSSz3TOSGPYrDfOQ1QkIJVEMy61R.u9zI3hmwwk1aLTb7W",
      },
    })
      .then((res) => res.json())
      .then(({ record: { ProductCollection } }) => {
        setLoading(false);
        setData(ProductCollection);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  const addToCart = (productId, productName, price) => {
    let qty = cart[productId] ? cart[productId].qty + 1 : 1;
    const cartObj = {
      ...cart,
      [productId]: { productId, productName, price, qty },
    };
    setCart(cartObj);
    setProduct({ productName, date: Date.now() });
  };

  const removeFromCart = (productId, removeAll) => {
    const qty = cart[productId].qty;
    const cartObj = { ...cart };

    removeAll || qty === 1
      ? delete cartObj[productId]
      : cartObj[productId].qty--;

    setCart(cartObj);
  };

  const currency = (val) => {
    return val
      .toLocaleString("en-AU", {
        style: "currency",
        currency: "AUD",
      })
      .replace(".00", "") // just show $ if zero cents
      .substr(1);
  };

  const hyphenate = (text) => text.toLowerCase().replace(/ /gi, "-");
  const deHyphenate = (text) => text.toLowerCase().replace(/-/gi, " ");

  return (
    <ComputerContext.Provider
      value={{
        addToCart,
        cart,
        currency,
        data,
        deHyphenate,
        error,
        hyphenate,
        loading,
        removeFromCart,
        product,
      }}
    >
      {children}
    </ComputerContext.Provider>
  );
}
export { ComputerProvider, ComputerContext };
