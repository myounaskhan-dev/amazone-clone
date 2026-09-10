import React from "react";

const Cart = ({ cart, setCart }) => {
  const increaseQuantity = (id) => {
    setCart((oldCart) =>
      oldCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((oldCart) =>
      oldCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((oldCart) =>
      oldCart.filter((item) => item.id !== id)
    );
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold mb-6">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="bg-white p-10 text-center rounded-lg">
          <h2 className="text-2xl font-semibold">
            Your cart is empty 🛒
          </h2>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Cart Products */}
          <div className="lg:col-span-2 space-y-4">

            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-lg flex gap-5 items-center"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 object-cover rounded"
                />

                <div className="flex-1">
                  <h2 className="font-semibold text-lg">
                    {item.title}
                  </h2>

                  <p className="text-xl font-bold mt-2">
                    Rs. {item.price}
                  </p>

                  <div className="flex items-center gap-3 mt-3">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-200 px-3 py-1 rounded"
                    >
                      -
                    </button>

                    <span className="font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-gray-200 px-3 py-1 rounded"
                    >
                      +
                    </button>

                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 mt-3"
                  >
                    Remove
                  </button>
                </div>

              </div>
            ))}

          </div>

          {/* Summary */}
          <div className="bg-white p-6 rounded-lg h-fit">

            <h2 className="text-2xl font-bold">
              Order Summary
            </h2>

            <div className="flex justify-between mt-6">
              <span>Subtotal</span>
              <span>Rs. {totalPrice}</span>
            </div>

            <div className="flex justify-between mt-3">
              <span>Delivery</span>
              <span>Free</span>
            </div>

            <hr className="my-5" />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>Rs. {totalPrice}</span>
            </div>

            <button className="w-full bg-yellow-400 hover:bg-yellow-500 py-3 rounded-full font-bold mt-6">
              Proceed to Checkout
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default Cart;