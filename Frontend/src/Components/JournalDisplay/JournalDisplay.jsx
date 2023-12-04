import React, { useEffect, useState } from 'react';
import './JournalDisplay.css';
import coloredImage from './MeditationBlue.png';
import blackImage from './MeditationBlack.png';
import sunBlack from './SunBlack.png';
import sunYellow from './SunYellow.png';
import JournalBanner from './JournalsBanner1.png';
import { supabase } from '../../database.js';

const JournalDisplay = () => {
    const [journalEntries, setJournalEntries] = useState([]);

    useEffect(() => {
        const fetchJournalEntries = async () => {
            try {
                const { data: { user } } = await supabase.auth.getUser()
                const userId = user.id;

                const response = await fetch(`http://localhost:3002/journal-entries?userId=${userId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setJournalEntries(data);
            } catch (error) {
                console.error('There was a problem fetching journal entries:', error);
            }
        };

        fetchJournalEntries();
    }, []);

    const generateRatingImages = (rating) => {
        const totalImages = 10;
        return Array.from({ length: totalImages }, (_, i) => i < rating ? coloredImage : blackImage);
    };

    const generateStressImages = (rating) => {
        const totalImages = 10;
        return Array.from({ length: totalImages }, (_, i) => i < rating ? sunYellow : sunBlack);
    };

    return (
        <div className="image-border-container">
            <div className="journal-display-container">
                <img className="journal-banner" src={JournalBanner} alt="logo"/>
                {journalEntries.map((entry, index) => (
                    <div key={index} className="journal-entry">
                <div className="left-column">
                    <div className="rating-images">
                        {generateRatingImages(entry.rating).map((imgSrc, idx) => (
                            <img key={idx} src={imgSrc} alt="" className="rating-image" />
                        ))}
                    </div>
                    <div className="rating-images">
                        {generateStressImages(entry.stressLevels).map((imgSrc, idx) => (
                            <img key={idx} src={imgSrc} alt="" className="rating-image" />
                        ))}
                    </div>
                    <div className="date-entered">
                    <p>Date: {new Date(entry.created_at).toLocaleDateString()}</p>
                    </div>
                </div>
                        <div className="right-column">
                            <p>{entry.entry}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JournalDisplay;