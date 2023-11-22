import React from "react";
import JournalInput from "../Components/JournalInput/JournalInput"
import './Home.css'
import PageCalendar from "../Components/Calendar/Calendar"


const Home = () => {
    return(
    <div>
    <div className="grid-container">
        <div className="item1">
            <img className="page-banner" src="SiteBanner.png" alt="logo"/>
        </div>
            <div className="item2">
            <JournalInput />
        </div>
        <div className="item3">
            <PageCalendar />
        </div>
    </div>
    </div>
    );
}

export default Home;