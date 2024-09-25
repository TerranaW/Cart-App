import React, { useState, useEffect } from 'react';
import CartItem from './cartItem'

function CartList() {
    const [items, setItems] = useState([])

    useEffect(() => {
        getItem()
    }, [])

    async function getItem() {
        try {
            let URL = "https://fakestoreapi.com/products?limit=5"
            const response = await fetch(URL)
            const data = await response.json()

            setItems(data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            {items.map((item, index) => (
                <CartItem key={index} title={item.title} price={item.price} image={item.image} />
            ))}
        </div>
    );
}

export default CartList;