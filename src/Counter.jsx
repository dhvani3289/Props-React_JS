import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div style={{ backgroundColor: "#fcf6bd", textAlign: "center" }}>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>

        </>
    )
}

export default Counter;