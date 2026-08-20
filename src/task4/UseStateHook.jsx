import React, { useState } from "react";
export default function UseStateHook() {
    const [count, setCount] = useState(7);

    return (
        <div className="card">
            <h2>Counter</h2>
            <h1 className="count">{count}</h1>
            <div className="button-group">
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
}