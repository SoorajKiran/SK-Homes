import React ,{useState} from 'react'
import "./staffHeader.css"
import { staffnav } from '../../components/data/Staffdata'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';


const StaffHead = () => {
    const [navList, setNavList] = useState(false)
  return (
   <>
  <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/logo.png' alt='' />
          </div>
          <h1><b>SK HOMES</b></h1>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {staffnav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
              <Button id="bt2" className='fa fa-sign-out'><Link to="/">LogOut</Link></Button>
            </ul>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
   </>
  )
}

export default StaffHead