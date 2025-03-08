import {  useState } from "react"

function RefactorComponent({ children }) {
    const [x, setX] = useState(0);
    return(
        <>
            <button onClick={() => setX(x + 1 )} >x + 1</button>
            {children}
            {x}
        </>
    )
}

export default RefactorComponent;