import react, { useState } from "react"

const Timer = () => {

    const [count, setCount] = useState()
    
    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(count - 1)}></button>
            <button onClick={() => setCount(count + 1)}></button>
        </>
    )
}

export default Timer();