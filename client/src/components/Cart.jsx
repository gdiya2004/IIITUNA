import React from "react";
import { useCartContext } from "../../Contexts/cardcontext";

export const Cart = () => {
  const { cart, total_amount, removeItem } = useCartContext();

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <p>
                <strong>Service:</strong> {item.service}
              </p>
              <p>
                <strong>Price:</strong> ₹{item.price}
              </p>
              <p>
                {/* <strong>Quantity:</strong> {item.quantity} */}
              </p>
              <button onClick={() => removeItem(item.id)} style={styles.removeButton}>
                ❌ Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{total_amount}</h3>
        </>
      )}
    </div>
  );
};

// Simple styles
const styles = {
  cartItem: {
    border: "1px solid #ddd",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
  },
  removeButton: {
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Cart;
