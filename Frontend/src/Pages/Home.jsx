import React from "react";
import JournalInput from "../Components/JournalInput/JournalInput"
import './Home.css'


const Home = () => {
    return(
    <div>
        <img className="page-banner" src="SiteBanner.png" alt="logo"/>
        <JournalInput />
    </div>
    );
}

export default Home;