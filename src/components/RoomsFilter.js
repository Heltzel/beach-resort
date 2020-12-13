import React, { useContext } from 'react'
import { RoomContext } from '../Context'
import Title from '../components/Title'

// get all unique values
const getUniquevalues = (items, value) => {
  return [...new Set(items.map((item) => item[value]))]
}
export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext)
  const {
    handleChange,
    type,
    capacity,
    price,
    minprice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context

  let types = getUniquevalues(rooms, 'type')
  types = ['all', ...types]
  types = types.map((type, index) => {
    return (
      <option value={type} key={index}>
        {type}
      </option>
    )
  })
  let capacities = getUniquevalues(rooms, 'capacity')

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
      </form>
    </section>
  )
}
