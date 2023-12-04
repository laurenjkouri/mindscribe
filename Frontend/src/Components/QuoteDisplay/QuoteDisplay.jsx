import React, { useState, useEffect } from 'react';
import { supabase } from '../../database.js';
import './QuoteDisplay.css';

const QuoteDisplay = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        const fetchRandomQuote = async () => {
            const randomId = Math.floor(Math.random() * 1664) + 1;
            console.log('Fetching quote with ID:', randomId);
            const { data, error } = await supabase
                .from('quotes')
                .select('*')
                .eq('id', randomId)
    
            if (error) {
                console.error('Error:', error);
                return;
            }
    
            if (data && data.length > 0) {
                console.log('Fetched data:', data[0].Author);
                setQuote(data[0].Quote);
                setAuthor(data[0].Author);
            } else {
                console.log('No data found');
            }
        };
    
        fetchRandomQuote();
    }, []);

    return (
        <div>
        <div className="quote-display">
            <p>"{quote}"</p>
            <p>- {author}</p>
        </div>
        </div>
    );
}

export default QuoteDisplay;