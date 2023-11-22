import React, { useState } from 'react';
import './JournalInput.css';

const JournalInput = () => { 

    document.body.style.backgroundColor = "#A5D8E1";

    const [journalEntry, setJournalEntry] = useState('');
    const [meditationRating, setMeditationRating] = useState('1');
    const [stressLevel, setStressLevel] = useState('1');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Logic to send data to your backend or process it as needed
      console.log({ journalEntry, meditationRating, stressLevel });
    };

    const meditationRatings = [
        { value: 1, description: "1. Just Breathe In" },
        { value: 2, description: "2. Finding My Zen" },
        { value: 3, description: "3. Mindful Moments" },
        { value: 4, description: "4. Calm Currents" },
        { value: 5, description: "5. Balanced Bliss" },
        { value: 6, description: "6. Serenity Sprouting" },
        { value: 7, description: "7. Tranquil Tides" },
        { value: 8, description: "8. Meditative Magic" },
        { value: 9, description: "9. Zen Zenith" },
        { value: 10, description: "10. Enlightened Euphoria" },
      ];

    const stressRatings = [
        { value: 1, description: "1. Cool as a Cucumber" },
        { value: 2, description: "2. Easy Breezy" },
        { value: 3, description: "3. Mildly Muddled" },
        { value: 4, description: "4. Balancing Act" },
        { value: 5, description: "5. Mixed Bag" },
        { value: 6, description: "6. Tipping the scales" },
        { value: 7, description: "7. Heating Up" },
        { value: 8, description: "8. Near Boiling Point" },
        { value: 9, description: "9. Close to Meltdown" },
        { value: 10, description: "10. Total Burnout" },
    ]
      

    return (
        <div>
        <div className="journal-container">
        <h2 className="header"> A Space for Your Thoughts </h2>
        <form onSubmit={handleSubmit}>
        <div className="selectors">
            <div className="selector">
            <label htmlFor="meditationRating">How was your meditation today?</label>
            <select id="meditationRating" value={meditationRating} onChange={e => setMeditationRating(e.target.value)}>
            <option value="" disabled>How was your meditation today?</option>
                {meditationRatings.map(rating => (
                <option key={rating.value} value={rating.value}>{rating.description}</option>
                ))}
            </select>
            </div>
            
            <div className="selector">
            <label htmlFor="stressLevel">What's your stress level?</label>
            <select id="stressLevel" value={stressLevel} onChange={e => setStressLevel(e.target.value)}>
                <option disabled>Select Level</option>
                {stressRatings.map(rating => (
                <option key={rating.value} value={rating.value}>{rating.description}</option>
                ))}
            </select>
            </div>
        </div>

  <textarea className="text-box" value={journalEntry} onChange={e => setJournalEntry(e.target.value)} />
  <button type="submit" className="button-59">Submit</button>
</form>
        </div>
        <script src="SelectBox.js"></script>
      </div>
    );

    
}

export default JournalInput;