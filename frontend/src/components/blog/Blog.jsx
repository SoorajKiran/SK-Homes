import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/about.jpg"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"
import { Link } from "react-router-dom"

const Blog = () => {
  return (
    <>
    <Header/>
      <section className='blog-out mb'>
        <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
      <div className="books">
              <button className='book'>
              <Link to="/contact">Book A Visit</Link> </button>
            </div>
      <Footer/>
    </>
  )
}

export default Blog
