import React, { useEffect, useState } from "react"
import './Pages.css'


const Home = () => {

const [data, setData] = useState([])

useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json =>  setData(json.products))
    .catch((err) => console.log('error'));
}, [])

const products = data.map((item) => 

<div className="Product-item">
    <h4>{item.title}</h4>
    <div>{item.price}</div>
    <div>
        <img width='200px' src={item.images[0]} alt={item.title}/>
    </div>
</div>)

    return (
        <div className="Home-container">
        {products}
        </div>
    )
}

export default Home