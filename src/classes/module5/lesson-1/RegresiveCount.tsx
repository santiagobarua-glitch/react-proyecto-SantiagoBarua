interface RegresiveCountProps {
    initialSeconds: number
}

import { useEffect, useState } from "react";

function RegresiveCount({ initialSeconds }: RegresiveCountProps) {

    let number = localStorage.getItem("time") == null ? initialSeconds : Number(localStorage.getItem("time"))
    
    const [time, setTime] = useState(number)

    useEffect(() => {
        const id = setInterval(() => {
            setTime((actual) => {
                if (actual <= 1) {
                    clearInterval(id)
                    return 0
                }
                return actual - 1
            })
        }, 1000)
        return () => clearInterval(id)
    }, [time >= 1])

    useEffect(() => {
        localStorage.setItem("time", `${time}`)
    }, [time])

    return (
        <div>
            <button type="button"
                className="counter"
                onClick={() => setTime((time) => time = initialSeconds)}>ReStart</button>
            <p>{time}</p>
        </div>
    )
}

export default RegresiveCount
