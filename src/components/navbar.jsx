
function Navbar({ totalItems }) {


  return (
    <nav className="bg-white border-b-2 p-4 flex justify-between items-center">
      <h2 className="text-yellow-500 text-xl font-bold">🛍️ Keane Fashion Store</h2>
      <div className="text-white flex items-center">
        <span className="size-11"><img src="./src/assets/carts.png" alt="cart" /></span>
        <span className="-ml-3 mb-0  bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white">
          {totalItems}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;