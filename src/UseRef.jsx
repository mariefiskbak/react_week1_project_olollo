import React, {useEffect, useRef, useState} from 'react';

function UseRef(props) {
    const [inputValue, setInputValue] = useState("")
    //const [previousInputValue, setPreviousValue] = useState("")
    const previousInputValue = useRef("")
    const inputRef = useRef("Hello")
    const previousValue = useRef("")

    const changeHandler = (e) => {
        console.log(inputRef.current.value)
    }
    const focusHandler = () => {
        inputRef.current.focus()
    }

    useEffect(() => {
        previousInputValue.current = inputValue
        //previousValue.current = inputValue
    }, [inputValue])

    return (
        <div>
            <h1>Scan øllens stregkode</h1>
            <input ref={inputRef} onChange={changeHandler}/>
            <button onClick={focusHandler}>Focus</button>
            <input type="text" value={inputValue} onChange={(e) => {
                setInputValue(e.target.value)
            }}/>
            <p>Current Value: {inputValue}</p>
            <p>Previous Value: {previousInputValue.current}</p>

        </div>
    );
}

export default UseRef;