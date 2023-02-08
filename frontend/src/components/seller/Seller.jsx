import React, {useEffect, useState} from 'react'
import img from "../images/Seller.jpg"
import Back from '../common/Back'
import "./Seller.css"
import API from '../../API'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import Swal from 'sweetalert2'


const Seller = () => {
  const [name,setName]=useState("");
  const[mobile,setMobile]=useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [details, setDetails] = useState("");

  useEffect(()=>{
    refreshSeller();
  },[]);

  const refreshSeller = () => {
    API.get("/")
        .then((res) => {
            setName("");
            setMobile("");
            setEmail("");
            setPurpose("");
            setDetails("");
        })
        .catch(console.error);
};


const onSubmit=(e) =>{
  e.preventDefault();
    let items = { name, mobile, email, purpose, details };
    API.post("seller/", items).then(() => popup(), refreshSeller());
};

function popup(){
  Swal.fire({
    position:'top-center',
    icon:'success',
    title:'Thankyou for contacting us',
    showConfirmButton:false,
    timer:1900
  })
}


  return (
    <>
    <Header/>
      <section className='seller'>
        <Back name='Contact Us' title='Want to sell or rent your property' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h3>Fillup The Form</h3> <br />
            
              <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/> <br/>
              <input type='number' placeholder='Mobile number' value={mobile} onChange={(e) => setMobile(e.target.value)} maxLength={10} /><br/>
              <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/><br/>

              <input type='text' placeholder='Rent/Sell' value={purpose} onChange={(e) => setPurpose(e.target.value)}/><br/>
            
            
           

            <textarea rows="10" cols="30" placeholder='Enter the details of your property' className="details"
            value={details} onChange={(e) => setDetails(e.target.value)} 
            ></textarea>
            <button type="submit" onClick={onSubmit}>Submit</button>
          </form>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Seller
