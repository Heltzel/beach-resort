import React, { Component, createContext } from 'react'
const RoomContext = createContext()

class RoomProvider extends Component {
  state = {}

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer
export { RoomProvider, RoomConsumer, RoomContext }
