import { useState, useCallback } from "react";
import { Card, TextContainer, Text, LegacyCard, Tabs } from "@shopify/polaris";
import { Toast } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";
import axios from 'axios';

export function Personal() {

    const [values, setValues] = useState({
        hometown: '',
        nationality: '',
        languages: '',
        religion: '',
        other: '',
        private: ''
    })

    //   const navigate = useNavigate();

    const PersnolhandleChange = (event) => {
        setValues({ ...values, [event.target.name]: [event.target.value] })
    }
    const PersonlhandleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8081/addpersonal', values)
            .then(res => {
                // navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <Card title="Personal" sectioned>
                <form className="account-form" onSubmit={PersonlhandleSubmit}>
                    <label htmlFor="text">Hometown(s)</label><br />
                    <textarea type="text" label="Hometown" name="hometown" rows="4" cols="50" onChange={PersnolhandleChange} required />
                    <br />
                    <label htmlFor="text">Nationality / Passport / Visas</label><br />
                    <textarea type="text" label="Nationality" name="nationality" rows="4" cols="50" onChange={PersnolhandleChange} required />
                    <br />
                    <label htmlFor="text">Languages</label><br />
                    <textarea type="tel" label="Languages" name="languages" rows="4" cols="50" onChange={PersnolhandleChange} required />
                    <br />
                    <label htmlFor="text">Religion / Diet Restrictions</label><br />
                    <textarea type="text" label="Religion" name="religion" rows="4" cols="50" onChange={PersnolhandleChange} required />
                    <br />
                    <label htmlFor="text">Other</label><br />
                    <textarea type="text" label="Other" name="other" rows="4" cols="50" onChange={PersnolhandleChange} required />
                    <br />
                    <label htmlFor="text">Private Personal Details (Requires PIN To View)</label><br />
                    <textarea type="text" label="Private" name="private" rows="4" cols="50" onChange={PersnolhandleChange} required />
                    <br />
                    <br />
                    <button type="submit" className="btn-cards">Submit</button>
                </form>

            </Card>
        </>
    );
}