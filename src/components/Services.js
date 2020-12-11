import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free cocktails',
        info:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium',
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info:
          ' Lorem ipsum dolor sit amet consectetur elit. Molestiae laudantium, numquam dolore',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free shuttle',
        info:
          ' Lorem ipsum dolor sit amet consectetur adipisicing numquam dolore',
      },
      {
        icon: <FaBeer />,
        title: 'Strongest Beer',
        info: ' Lorem ipsum dolor sit ametelit. Molestiae laudantium,',
      },
    ],
  }
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}
