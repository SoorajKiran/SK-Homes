import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/esm/Table';
import API from '../../API';
import StaffFooter from '../footer/StaffFooter';
import StaffHead from '../staffHeader/StaffHead';
import './ContactDetails.css'

const ContactDetails = () => {
    const [contactdetails, setContactdetails] = useState([]);

    useEffect(() => {
        refreshContactDetails();
    }, []);

    const refreshContactDetails = () => {
        API.get("/contact/")
            .then((res) => {
                setContactdetails(res.data);
            })
            .catch(console.error);

    }
    return (
        <>
        <StaffHead/>
            <div className='table1'>
                <h2 className='heading1'>Contact Details</h2>
                
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactdetails.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.subject}</td>
                                    <td>{item.description}</td>
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

export default ContactDetails