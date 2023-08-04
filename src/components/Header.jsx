import React from 'react'
import Filters from './Filters'

export default function Header({changeFilters}) {
  return (
    <>
    <div>React Shop 🛒</div>
      <Filters onChange={changeFilters} />
    </>
  )
}
