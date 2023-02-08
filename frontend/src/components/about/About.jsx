import React from "react"
import Back from "../common/Back"
import Footer from "../common/footer/Footer"
import Header from "../common/header/Header"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
    <Header/>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Launched in 2005, SK Homes, India’s No. 1 property portal, deals with every aspect of the consumers needs in the real estate industry. It is an online forum where buyers, sellers and brokers/agents can exchange information about real estate properties quickly, effectively and inexpensively. Here, you can advertise a property, search for a property, browse through properties, build your own property microsite, and keep yourself updated with the latest news and trends making headlines in the realty sector.</p>
            <br/>
            <p>At present, SK Homes prides itself for having around nine lakh property listings spanning across 600+ cities in World. Of all, the website held over 5.7 lakh paid listings at the end of FY 2021-22. In addition to providing an online platform to real estate developers, brokers and property owners for listing their property for sale, purchase or rent,  we offers advertisement stints such as microsites, banners, home page links and project pages to the clients for better visibility and branding in the market.
              With the ever-evolving online search behaviour, SK Homes shares updated information pertinent to real estate activities, assisting prospective buyers to make informed buying decision. We make online property search easier, quicker and smarter!</p>

          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default About
