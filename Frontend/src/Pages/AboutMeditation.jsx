import React from "react";
import JournalInput from "../Components/JournalInput/JournalInput"
import './Home.css'
import PageCalendar from "../Components/Calendar/Calendar"
import QuoteDisplay from "../Components/QuoteDisplay/QuoteDisplay"
import JournalDisplay from "../Components/JournalDisplay/JournalDisplay"


const AboutMeditation = () => {
    return(
        <div className="grid-container">
        <div className="item1">
            <img className="page-banner" src="MindScribePink.png" alt="logo"/>
        </div>
        </div>
    );
}

export default AboutMeditation;