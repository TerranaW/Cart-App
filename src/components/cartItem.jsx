import Counter from "./counter";
import { useState } from 'react';

function CartItem({ image, price, title, onItemCountChange }) {
    const [totalPrice, setTotalPrice] = useState(0);

    const handleCountChange = (count) => {
        setTotalPrice(count * price);
    };

    return (
        <div className="flex flex-col sm:flex-row items-center border rounded-lg p-4 shadow-md hover:bg-yellow-100">
            <img src={image} alt={title} className="w-32 h-32 object-cover rounded mr-4" />
            <div className="flex flex-col flex-grow mr-4">
                <h6 className="text-lg font-semibold mb-1">{title}</h6>
                <h6 className="text-gray-600 mb-2">$ {price}</h6>
            </div>
            <div className="flex flex-col items-center">
                <Counter price={price.toFixed(2)} onChange={handleCountChange} onItemCountChange={onItemCountChange} />
            </div>

            <div className="flex flex-col items-end sm:flex-row">
                <h6 className="text-xl font-bold text-yellow-800 ml-4 bg-yellow-100 rounded-lg p-2 shadow-lg"> $ {totalPrice.toFixed(2)}</h6>
            </div>
        </div>
    );
}

export default CartItem;



