import Logo from '../assets/KEANE-log.png'
import Cart from '../assets/carts.png'

function Navbar({ totalItems }) {

  return (
    <nav className="bg-black border-b-2 p-1 flex justify-between items-center sticky top-0 ">
      <img src={Logo} className="h-20" />
      <div className="text-white flex items-center">
        <span className="size-10 "><img src={Cart} alt="cart" /></span>
        <span className="-ml-2 mb-0  bg-red-500 rounded-full w-7 h-7 flex items-center justify-center text-white">
          {totalItems}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;