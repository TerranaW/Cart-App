import { useState } from 'react';
import CartList from './components/cartList';
import Navbar from './components/navbar';

function App() {
  const [totalItems, setTotalItems] = useState(0);

  const handleItemCountChange = (count) => {
    setTotalItems(prevTotal => prevTotal + count);
  };

  return (
    <>
      <div>
        <Navbar totalItems={totalItems} />
        <CartList onItemCountChange={handleItemCountChange} />
      </div>
    </>
  );
}

export default App;
