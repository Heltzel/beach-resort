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
    minPrice,
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
  capacities = capacities.map((capacity, index) => {
    return (
      <option value={capacity} key={index}>
        {capacity}
      </option>
    )
  })
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

        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {capacities}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">Room price &euro;{price},-</label>
          <input
            type="range"
            name="price"
            id="price"
            className="form-control"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="size">Room size &#13217;</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              className="size-input"
              value={minSize}
              onChange={handleChange}
            />
            <input
              type="number"
              name="maxSize"
              id="maxSize"
              className="size-input"
              value={maxSize}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
      </form>
    </section>
  )
}
