import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price || 0) * (item.qty || 1), 0);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.length > 0 && (
        <div>
          {cart.map((item) => (
            <div
              key={item._id}
              style={{
                border: "1px solid #3e61adff",
                padding: "15px",
                marginBottom: "10px",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h4>{item.name}</h4>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.qty}</p>
              </div>

              <button
                onClick={() => removeFromCart(item._id)}
                style={{
                  padding: "8px 15px",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              background: "#cf1313ff",
              borderRadius: "5px",
              textAlign: "right",
            }}
          >
            <h3>Total: ₹{calculateTotal()}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
