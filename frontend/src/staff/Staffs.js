import React from 'react';
import StaffHead from './staffHeader/StaffHead';
import './Staff.css'
import StaffFooter from './footer/StaffFooter';

const Staffs = () => {
  
  return (
    <div>
      <StaffHead/>
           
      <h1><b> WELCOME TO STAFF PANEL</b></h1>
      <img className='img1' src="../../images/admin.jpg" alt="adminpanel" />
      <StaffFooter/>
    </div>
  )
}

export default Staffs



