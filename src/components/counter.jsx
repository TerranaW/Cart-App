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
        <div>
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
}

export default Counter;
