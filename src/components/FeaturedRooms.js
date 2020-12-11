import React, { Component } from 'react'
import { RoomContext } from '../Context'

export default class FeaturedRooms extends Component {
  static contextType = RoomContext
  render() {
    const { prop1, prop2 } = this.context
    return <div>Hello from FeaturedRooms</div>
  }
}
