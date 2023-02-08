import React, {useEffect , useState } from 'react';
import Table from 'react-bootstrap/esm/Table';
import API from '../../API';
import StaffFooter from '../footer/StaffFooter';
import StaffHead from '../staffHeader/StaffHead';
import './SellerDetails.css'

const SellerDetails = () => {
    const [sellerDetail, setSellerDetail] =useState([]);

    useEffect(() => {
        refreshSellerDetails();
    },[]);

    const refreshSellerDetails = () =>{
        API.get("/seller/")
            .then((res) => {
                setSellerDetail(res.data);
            })
            .catch(console.error);
    }
  return (
    <>
    <StaffHead/>
        <div className='table2'>
            <h2 className='heading1'>Seller Details</h2>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Mobile No</th>
                            <th>Email</th>                        
                            <th>Purpose</th>
                            <th>Details</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {sellerDetail.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.email}</td>
                                    <td>{item.purpose}</td>
                                    <td>{item.details}</td>
                                </tr>
                            );


                        })}

                    </tbody>
                </Table>
            </div>
            <StaffFooter/>
    </>
  )
}

export default SellerDetails