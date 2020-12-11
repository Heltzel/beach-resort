import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner'

export default function Rooms() {
  return (
    <Hero hero="roomsHero">
      <Banner title="our rooms" subtitle="">
        <Link to="/" className="btn-primary">
          back to homepage
        </Link>
      </Banner>
    </Hero>
  )
}
