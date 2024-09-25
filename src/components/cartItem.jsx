import Counter from "./counter";

function CartItem({ image, price, title }) {

    return (
        <>
            <div className="bg-gray-700 p-4 rounded-lg flex justify-between items-center text-white mb-2">
                <img src={image} className="size-11" alt={title} />
                <h6>{title}</h6>
                <h6>{price}</h6>
                <Counter />
                <h6> </h6>
            </div>
        </>
    );
}

export default CartItem;
