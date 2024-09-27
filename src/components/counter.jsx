import { useState } from 'react';

function Counter({ onChange, onItemCountChange }) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);
        onChange(newCount);
        onItemCountChange(1);
    };

    const handleDecrement = () => {
        if (count === 0) return;
        const newCount = count - 1;
        setCount(newCount);
        onChange(newCount);
        onItemCountChange(-1);
    };

    return (
        <div className="flex items-center space-x-4 mb-2">
            <button
                onClick={handleDecrement}
                className="bg-white text-black font-bold w-10 h-10 rounded-full border-2 border-yellow-500 hover:bg-yellow-500 transition flex items-center justify-center"
            >
                -
            </button>
            <span className="text-lg font-semibold">{count}</span>
            <button
                onClick={handleIncrement}
                className="bg-white text-black font-bold w-10 h-10 rounded-full border-2 border-yellow-500 hover:bg-yellow-500 transition flex items-center justify-center"
            >
                +
            </button>
        </div>
    );

}

export default Counter;
