import React from "react"
import "./Filters.css"
import { useState } from "react"

export default function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)

  const handleChangeMinPrice = (event) => {
    // algo Malo hay aqui
    // dos fuentes de la verdad
    setMinPrice(event.target.value)
    onChange(prevState => ({
      ...prevState,
      minPrice: event.target.value,
    }))
  }

  const handleChangeCategory = (event) => {
    onChange(prevState => ({
      ...prevState,
      category: event.target.value,
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio a partir de:</label>
        <input type="range" id="price" min="0" max="1000"
          onChange={handleChangeMinPrice}
        />
        <span>{minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select id="category"
          onChange={handleChangeCategory}
          >
          <option value="all">Todas</option>
          <option value="laptops">Computadores</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  )
}
