import { useState, useCallback } from "react";
import { Card, TextContainer, Text, LegacyCard, Tabs } from "@shopify/polaris";
import { Toast } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";
import axios from 'axios';

export function Contact() {
    const [values, setValues] = useState({
        name: '',
        relation: '',
        phoneno: '',
        email: ''
    })

    //   const navigate = useNavigate();

    const ContacthandleChange = (event) => {
        setValues({ ...values, [event.target.name]: [event.target.value] })
    }
    const ContacthandleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8081/addcontact', values)
            .then(res => {
                // navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <Card title="Contact" sectioned>
                <form className="contact-form" onSubmit={ContacthandleSubmit} >
                    <label htmlFor="text">Contact 1</label><br />

                    <input type="text" label="Name" name="name" placeholder="Name" onChange={ContacthandleChange} required />

                    <input type="text" label="relation" name="relation" placeholder="Relation" onChange={ContacthandleChange} required />

                    <input type="tel" label="Phone Number" name="phoneno" placeholder="phone no" onChange={ContacthandleChange} required />

                    <input type="text" label="Email" name="email" placeholder="Email" onChange={ContacthandleChange} required />
                    <br />
                    <br />
                    <button type="submit" className="btn-cards">Submit</button>
                </form>
                <hr/>
                <form className="contact-form" onSubmit={ContacthandleSubmit} >
                    <label htmlFor="text">Contact 2</label><br />

                    <input type="text" label="Name" name="name" placeholder="Name" onChange={ContacthandleChange} required />

                    <input type="text" label="relation" name="relation" placeholder="Relation" onChange={ContacthandleChange} required />

                    <input type="tel" label="Phone Number" name="phoneno" placeholder="phone no" onChange={ContacthandleChange} required />

                    <input type="text" label="Email" name="email" placeholder="Email" onChange={ContacthandleChange} required />
                    <br />
                    <br />
                    <button type="submit" className="btn-cards">Submit</button>
                </form>
                <hr/>
                <form className="contact-form" onSubmit={ContacthandleSubmit} >
                    <label htmlFor="text">Contact 3</label><br />

                    <input type="text" label="Name" name="name" placeholder="Name" onChange={ContacthandleChange} required />

                    <input type="text" label="relation" name="relation" placeholder="Relation" onChange={ContacthandleChange} required />

                    <input type="tel" label="Phone Number" name="phoneno" placeholder="phone no" onChange={ContacthandleChange} required />

                    <input type="text" label="Email" name="email" placeholder="Email" onChange={ContacthandleChange} required />
                    <br />
                    <br />
                    <button type="submit" className="btn-cards">Submit</button>
                </form>
                <hr/>
                <form className="contact-form" onSubmit={ContacthandleSubmit} >
                    <label htmlFor="text">Contact 4</label><br />

                    <input type="text" label="Name" name="name" placeholder="Name" onChange={ContacthandleChange} required />

                    <input type="text" label="relation" name="relation" placeholder="Relation" onChange={ContacthandleChange} required />

                    <input type="tel" label="Phone Number" name="phoneno" placeholder="phone no" onChange={ContacthandleChange} required />

                    <input type="text" label="Email" name="email" placeholder="Email" onChange={ContacthandleChange} required />
                    <br />
                    <br />
                    <button type="submit" className="btn-cards">Submit</button>
                </form>
                <hr/>
                <form className="contact-form" onSubmit={ContacthandleSubmit} >
                    <label htmlFor="text">Contact 5</label><br />

                    <input type="text" label="Name" name="name" placeholder="Name" onChange={ContacthandleChange} required />

                    <input type="text" label="relation" name="relation" placeholder="Relation" onChange={ContacthandleChange} required />

                    <input type="tel" label="Phone Number" name="phoneno" placeholder="phone no" onChange={ContacthandleChange} required />

                    <input type="text" label="Email" name="email" placeholder="Email" onChange={ContacthandleChange} required />
                    <br />
                    <br />
                    <button type="submit" className="btn-cards">Submit</button>
                </form>

                
            </Card>
        </>
    );

}

