import React, { useState } from 'react';
import './JournalInput.css';
import { supabase } from '../../database.js';
import InputBanner from './InputBanner.png';

const JournalInput = () => { 

    document.body.style.backgroundColor = "#A5D8E1";

    const [journalEntry, setJournalEntry] = useState('');
    const [meditationRating, setMeditationRating] = useState('1');
    const [stressLevel, setStressLevel] = useState('1');
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      const parsedMeditationRating = parseInt(meditationRating, 10);
      const parsedStressLevel = parseInt(stressLevel, 10);

      const { data, error } = await supabase.auth.getUser();

      if (error) throw error;

      const userId = data.user.id;
  
      if (!userId) {
          console.error('User is not logged in');
          return;
      }

      try {
          const response = await fetch('http://localhost:3002/add-journal-entry', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  userId,
                  journalEntry,
                  meditationRating: parsedMeditationRating,
                  stressLevel: parsedStressLevel
              }),
          });
  
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
  
          // Handle success - maybe clear the form or show a success message
          console.log('Journal entry added successfully');
      } catch (error) {
          console.error('Error adding journal entry:', error);
      }
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
        <div className="image-border-container">
      <div className="journal-container">
          <img className="input-banner" src={InputBanner} alt="banner"/>
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label htmlFor="meditationRating">Rate Your Meditation Session: </label>
                  <div className="select">
                      <select id="meditationRating" value={meditationRating} onChange={e => setMeditationRating(e.target.value)}>
                          <option value="" disabled>How was your meditation?</option>
                          {meditationRatings.map(rating => (
                              <option key={rating.value} value={rating.value}>{rating.description}</option>
                          ))}
                      </select>
                  </div>
              </div>

              <div className="form-group">
                  <label htmlFor="stressLevel">And Your Stress Levels Today:</label>
                  <div className="select">
                      <select id="stressLevel" value={stressLevel} onChange={e => setStressLevel(e.target.value)}>
                          <option disabled>How stressed were you today? </option>
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
      </div>
      <script src="SelectBox.js"></script>
  </div>

    );

    
}

export default JournalInput;