import React from "react"
import Footer from "../../common/footer/Footer"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import "./style.css"

const Location = () => {
  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='Explore By Location' subtitle='Located in the heart of the city, these projects is gracefully designed to offer you a wholesome living experience. Transcend the comfort of your everyday schedule with  lifestyle indulgences that offer the best of both smart living and a convenient lifestyle. Live a blissful life and embrace its joyous moments with our smartly planned homes that you have dreamt of.' />

          <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Location
