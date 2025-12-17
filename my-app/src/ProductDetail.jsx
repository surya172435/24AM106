import { useParams } from "react-router-dom";
import { Product as Productdata } from "./Productdata";
import { useContext } from "react"; 
import { CartContext } from "./CartContext";

const Product = () => {
  const { id } = useParams();
  const item = Productdata.find((p) => p._id === id);

  const { addToCart, removeFromCart, isInCart } = useContext(CartContext);

  
 

  if (!item) {
    return <h2>Product Not Found</h2>;
  }

  const inCart = isInCart(item._id);

return (
    <div style={{ padding: "20px" }}>
      <h1>{item.name}</h1>
      <img src={item.src} alt={item.name} width="300" />
      <p>Price: ₹{item.price}</p>
      <p>{item.desc}</p>

      {inCart ? (
        <button
          style={{ padding: "10px", background: "red", color: "white" }}
          onClick={() => removeFromCart(item._id)}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          style={{ padding: "10px", background: "green", color: "white" }}
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Product;

