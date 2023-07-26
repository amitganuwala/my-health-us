import { useState, useCallback } from "react";
import { Card, TextContainer, Text, LegacyCard, Tabs } from "@shopify/polaris";
import { Toast } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";
import axios from 'axios';

export function AccountBar() {

    const [values, setValues] = useState({
        first_name: '',
        last_name: '',
        phone_no: '',
        email: ''
      })
    
    //   const navigate = useNavigate();
    
      const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: [event.target.value] })
      }
      const handleSubmit = (event) => {
        event.preventDefault();
    
        axios.post('http://localhost:8081/addaccount', values)
          .then(res => {
            // navigate('/');
          })
          .catch(err => console.log(err));
      }

    return (
        <>
            <Card title="Account" sectioned>
                <form  className="account-form" onSubmit={handleSubmit}>
                    <label htmlFor="text">First Name</label><br />
                    <input type="text" label="First Name" name="first_name" onChange={handleChange} required/>
                    <br />
                    <label htmlFor="text">Last Name</label><br />
                    <input type="text" label="Last Name" name="last_name" onChange={handleChange} required/>
                    <br />
                    <label htmlFor="text">Phone Number</label><br />
                    <input type="tel" label="Phone Number" name="phone_no" onChange={handleChange} required/>
                    <br />
                    <label htmlFor="text">Email</label><br />
                    <input type="text" label="Email" name="email" onChange={handleChange} required/>
                    <br />
                    <br />
                    <button type="submit" className="btn-cards">Submit</button>
                </form>
               
            </Card>
        </>
    );
}