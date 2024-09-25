import { useState } from 'react';
function Counter({ onChange }) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
        onChange(count + 1);

    };

    const handleDecrement = () => {
        if (count == 0) return;
        setCount(count - 1);
        onChange(count - 1);
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