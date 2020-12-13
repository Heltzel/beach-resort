import React, { Component, createContext } from 'react'
import items from './data'

const RoomContext = createContext()
const RoomConsumer = RoomContext.Consumer

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minprice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  }
  // getData()

  componentDidMount() {
    // this.getData
    let rooms = this.formatData(items)
    let featuredRooms = rooms.filter((room) => room.featured)
    let maxPrice = Math.max(...rooms.map((room) => room.price))
    let maxSize = Math.max(...rooms.map((room) => room.size))

    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize: maxSize,
    })
  }
  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id
      let images = item.fields.images.map((image) => image.fields.file.url)
      let room = { ...item.fields, images: images, id: id }
      return room
    })
    return tempItems
  }

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms]
    return tempRooms.find((room) => room.slug === slug)
  }

  handleChange = (e) => {
    const target = e.target
    const value = e.type === 'checkbox' ? target.checked : target.value
    const name = e.target.name
    this.setState(
      {
        [name]: value,
      },
      this.filterrooms,
    )
  }

  filterrooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state

    let tempRooms = [...rooms]
    capacity = parseInt(capacity)
    price = parseInt(price)

    if (type !== 'all') {
      tempRooms = tempRooms.filter((room) => room.type === type)
    }
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity)
    }
    tempRooms = tempRooms.filter((room) => room.price <= price)
    this.setState({
      sortedRooms: tempRooms,
    })
  }

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

export function withRoomConsumer(Component) {
  return function consumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    )
  }
}

export { RoomContext, RoomConsumer, RoomProvider }
