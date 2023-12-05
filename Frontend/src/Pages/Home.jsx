import React from "react";
import JournalInput from "../Components/JournalInput/JournalInput"
import './Home.css'
import PageCalendar from "../Components/Calendar/Calendar"
import QuoteDisplay from "../Components/QuoteDisplay/QuoteDisplay"
import JournalDisplay from "../Components/JournalDisplay/JournalDisplay"
import { useNavigate } from 'react-router-dom';
import { supabase } from '../database.js';
import Dropdown from 'react-bootstrap/Dropdown'

const Home = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    const handleSignOut = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
            navigate('/login');
        } catch (error) {
            console.error('Error signing out: ', error);
        }
    };

    return(
        <div>
            <img className="page-banner" src="MindScribePink.png" alt="logo"/>
            <div className="grid-container">
            <button className="button-60" onClick={handleSignOut}> Sign Out</button>

            <Dropdown>
            <Dropdown.Toggle variant="" className="button-60">
                More
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => navigateTo('/advice')}>Meditation Advice</Dropdown.Item>
                <Dropdown.Item onClick={() => navigateTo('/help')}>Help</Dropdown.Item>
                <Dropdown.Item onClick={() => navigateTo('/technicaldocument')}>About the Site</Dropdown.Item>
                <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            
            <div className="item2">
                <JournalInput />
            </div>
            <div className="item4">
                <PageCalendar />
            </div>
            <div className="item3">
                <QuoteDisplay />
            </div>
            <div className="item5">
                <JournalDisplay /> 
            </div>
            </div>
        </div>
    );
}

export default Home;