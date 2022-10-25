import React, {useEffect, useState} from "react";


function Beer(props) {

    const [beer, setBeer] = useState("")

    useEffect(() => {
        fetchData()
    }, [])
    const URL = "http://localhost:5000/nameOfYourArrayData/"
    let barcode = 2
    const fetchData = () => {
        fetch(URL + barcode)
            // fetch("http://localhost:5000/nameOfYourArrayData", {
            //      headers: {
            //          "Accept": "application/json"
            //     }
            // })
            .then(res => res.json())
            //.then(data => setBeer(data.value))
            .then(data => setBeer(data.value))
    }

    const beerHandler = () => {
        fetchData()
    }
    console.log(beer)
    return (
        <div>
            <p>{beer}</p>
            <button onClick={beerHandler}>New Beer</button>
        </div>
    )
}

export default Beer