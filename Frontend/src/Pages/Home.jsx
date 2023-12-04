import React from "react";
import JournalInput from "../Components/JournalInput/JournalInput"
import './Home.css'
import PageCalendar from "../Components/Calendar/Calendar"
import QuoteDisplay from "../Components/QuoteDisplay/QuoteDisplay"
import JournalDisplay from "../Components/JournalDisplay/JournalDisplay"
import { useNavigate } from 'react-router-dom';
import { supabase } from '../database.js';

const Home = () => {
    const navigate = useNavigate();

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
        <div className="grid-container">
        <button className="button-60" onClick={handleSignOut}> Sign Out</button>
        <div className="item1">
            <img className="page-banner" src="MindScribePink.png" alt="logo"/>
        </div>
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
    );
}

export default Home;