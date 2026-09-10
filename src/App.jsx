import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./pages/Cart";
import products from "./components/products.jsx"

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart((oldCart) => {
      const existingProduct = oldCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return oldCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...oldCart, { ...product, quantity: 1 }];
    });
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar cartCount={cartCount} />

      <div className="p-6">

        <button
          onClick={() => setShowCart(!showCart)}
          className="bg-black text-white px-6 py-3 rounded-lg mb-6"
        >
          {showCart ? "← Continue Shopping" : `🛒 Go to Cart (${cartCount})`}
        </button>

        {showCart ? (
          <Cart cart={cart} setCart={setCart} />
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-6">
              Today's Deals
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </>
        )}

      </div>

    </div>
  );
}

export default App;