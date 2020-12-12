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
  }
  // getData()

  componentDidMount() {
    // this.getData
    let rooms = this.formatData(items)
    let featuredRooms = rooms.filter((room) => room.featured)
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
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

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

export { RoomContext, RoomConsumer, RoomProvider }
