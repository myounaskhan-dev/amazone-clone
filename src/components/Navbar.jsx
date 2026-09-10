import React from "react";

const Navbar = ({ cartCount }) => { 
   return (
    <nav className="bg-[#131921] text-white px-4 py-3">
      <div className="flex items-center gap-5">

        {/* Logo */}
        <div className="text-2xl font-bold">
          amazon<span className="text-orange-400">.clone</span>
        </div>

        {/* Location */}
        <div className="hidden md:block">
          <p className="text-xs text-gray-300">Deliver to</p>
          <p className="font-bold">Pakistan</p>
        </div>

        {/* Search */}
        <div className="flex flex-1 h-10">
          <select className="bg-gray-200 text-black px-2 rounded-l-md">
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Books</option>
          </select>

          <input
            type="text"
            placeholder="Search Amazon Clone"
            className="flex-1 px-4 text-black outline-none"
          />

          <button className="bg-orange-400 text-black px-5 rounded-r-md text-xl">
            🔍
          </button>
        </div>

        {/* Account */}
        <div className="hidden md:block">
          <p className="text-xs">Hello, sign in</p>
          <p className="font-bold">Account & Lists</p>
        </div>

        {/* Orders */}
        <div className="hidden md:block">
          <p className="text-xs">Returns</p>
          <p className="font-bold">& Orders</p>
        </div>

        {/* Cart */}
      <div className="text-2xl">
  🛒
  <span className="text-sm font-bold ml-1">
    Cart ({cartCount})
  </span>
</div>

      </div>
    </nav>
  );
};

export default Navbar;