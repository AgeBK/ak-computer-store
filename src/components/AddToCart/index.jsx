import { useContext } from "react";
import { ComputerContext } from "../../context";
import Button from "../Button";

function AddToCart({ productId, productName, price }) {
  const { addToCart } = useContext(ComputerContext);
  const handleClick = () => addToCart(productId, productName, price);

  return (
    <Button css="cart" onClick={handleClick}>
      Add to cart
    </Button>
  );
}

export default AddToCart;
