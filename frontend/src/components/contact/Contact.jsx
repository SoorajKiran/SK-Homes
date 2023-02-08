import React, { useEffect, useState } from 'react'
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"
import API from "../../API"
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import Swal from 'sweetalert2'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const[mobile,setMobile]=useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    refreshContact();

  }, []);

  const refreshContact = () => {
    API.get("/")
        .then((res) => {
            setName("");
            setEmail("");
            setMobile("");
            setSubject("");
            setDescription("");
        })
        .catch(console.error);
};


const onSubmit = (e) => {
    e.preventDefault();
    let item = { name, email, subject, description };
    API.post("contact/", item).then(() => popup(), refreshContact());
};

function popup(){
  Swal.fire({
    position:'top-center',
    icon:'success',
    title:'Thankyou for Contacting. Our representative will get in touch with you shortly',
    showConfirmButton:false,
    timer:1900
  })
}


  return (
    <>
    <Header/>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
              <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br/>
              <input type='number' placeholder='Mobile number' value={mobile} onChange={(e) => setMobile(e.target.value)} maxLength={10} /><br/>
            </div>
            <input type='text' placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
            <textarea rows="10" cols="30" placeholder='Description' className="textarea"
             value={description} onChange={(e) => setDescription(e.target.value)} 
            ></textarea>
            <button type="submit" onClick={onSubmit}>Submit Request</button>
          </form>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Contact
