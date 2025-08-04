import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Meals.css"

const Meals = () => {

    const [items, setItems] = useState([]);

    let url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"


    useEffect(() => {
        axios.get(url).then(res => setItems(res.data.meals)).catch(error => console.log("ERROR : ", error))
    }, [])

    return (
        <main className='main-container'>
            {items.map(({ strMeal, strMealThumb, idMeal }) => {
                return <section key={idMeal} className='card-container'>
                    <img src={strMealThumb} alt={strMealThumb} />
                    <section className="content">
                        <p>{strMeal}</p>
                        <p>#{idMeal}</p>
                    </section>
                </section>
            })}
        </main>
    )
}

export default Meals