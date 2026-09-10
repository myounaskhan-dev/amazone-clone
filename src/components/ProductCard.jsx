import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition">

      <img
        src={product.image}
        alt={product.title}
        className="w-full h-56 object-cover rounded-md"
      />

      <h2 className="text-lg font-semibold mt-3">
        {product.title}
      </h2>

      <p className="text-yellow-500 mt-2">
        ⭐ {product.rating}
      </p>

      <p className="text-2xl font-bold mt-2">
        Rs. {product.price}
      </p>

      <p className="text-sm text-gray-500">
        {product.category}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 py-2 rounded-full font-semibold"
      >
        Add to Cart
      </button>

    </div>
  );
};

export default ProductCard;