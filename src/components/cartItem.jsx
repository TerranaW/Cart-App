import Counter from "./counter";
import { useState } from 'react';

function CartItem({ image, price, title }) {
    const [totalPrice, setTotalPrice] = useState(0);
    const handleCountChange = (count) => {
        setTotalPrice(count * price);
    };

    return (
        <>
            <div className="bg-gray-700 p-4 rounded-lg flex justify-between items-center text-white mb-2">
                <img src={image} className="size-11" alt={title} />
                <h6>{title}</h6>
                <h6>$ {price}</h6>
                <Counter price={price} onChange={handleCountChange} />
                <h6>$ {totalPrice}</h6>
            </div>
        </>
    );
}

export default CartItem;