import { useRef, useState } from "react";

function Counter() {
    const count = useRef<number>(0)
    const [show, setShow] = useState(0)


    function CountAdd() {
        count.current = count.current + 1;
    }

    function CountSubstract() {
        count.current = count.current - 1;
    }

    function ShowNumber() {
        setShow(count.current);
    }


    return (
        <div>
            <button type="button"
                className="counter"
                onClick={() => CountAdd()}>add
            </button>
            <button type="button"
                className="counter"
                onClick={() => ShowNumber()}>
                {show}
            </button>
            <button type="button"
                className="counter"
                onClick={() => CountSubstract()}>subtract
            </button>
        </div >
    )
}

export { Counter }