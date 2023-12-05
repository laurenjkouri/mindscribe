import React from 'react';

const TechnicalDocument = () => {
    return (
        <div>
            <h2>MindScribe</h2>
            <h3>Lauren Kouri</h3>
            <p><strong>Introduction:</strong> Mindscribe is a meditation journaling app which allows users to track the trends of their daily moods and the quality of their daily meditation.</p>
            
            <h4>Implementation Details:</h4>
            <p>The technology stack employed for this project consisted of Supabase, Node.js, Express, and React.</p>
            
            <h4>Backend Architecture:</h4>
            <p>The core of the backend architecture is Node.js and Express, a simple and minimal framework which allows management of requests to and from the frontend application.</p>
            
            <h4>Database Schema:</h4>
            <p>The database is managed using Supabase.</p>
            <ul>
                <li><strong>JournalEntries table:</strong> This table is designed to store user-generated journal entries. It is a fundamental part of the application, as it allows users to store their journal entries and is also utilized to display them within the web app. It includes fields such as userID in order to determine which entries are associated with a particular user. Additionally, it contains attributes for the entries themselves, the date which was entered, and the ratings for the user’s daily mood tracking.</li>
                <li><strong>Quotes table:</strong> The application contains a component for a randomly generated quote. This is implemented using a large amount of quotes stored within the database with attributes such as an id (used to be associated with a randomly generated number), author, and the quote itself.</li>
            </ul>
            
            <h4>Frontend Development:</h4>
            <p>The basis of the frontend is React.js, a JavaScript library for building complicated user interfaces. Since React has a component-focused architecture, it simplifies the process of creating a dynamic and simple user experience. The main features of the frontend include the journal entry interface, mood rating, and the journal display.</p>
        </div>
    );
};

export default TechnicalDocument;