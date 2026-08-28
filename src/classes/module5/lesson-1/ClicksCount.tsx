import { useEffect, useState } from "react";

function ClicksCount() {
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        document.title = `${count}`
    }, [count])

    return (
        <div>
            <button type="button"
                className="counter"
                onClick={() => setCount((count) => count + 1)}>add
            </button>
            <p>{count}</p>
            <button type="button"
                className="counter"
                onClick={() => setCount((count) => count - 1)}>subtract
            </button>
        </div >
    )
}

export default ClicksCount 