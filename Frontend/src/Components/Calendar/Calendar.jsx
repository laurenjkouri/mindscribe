import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect } from 'react';
import { supabase } from '../../database.js';
import CalendarBanner from './CalendarBanner.png';

import './Calendar.css';

export default function PageCalendar() {
    const [value, onChange] = useState(new Date());
    const [journalDates, setJournalDates] = useState([]);

    useEffect(() => {
        const fetchJournalDates = async () => {
            let { data: journalEntries, error } = await supabase
                .from('journalEntries')
                .select('created_at');

            if (error) console.log("Error fetching journal entries:", error);
            else {
                const dates = journalEntries.map(entry => entry.created_at.split('T')[0]);
                setJournalDates(dates);
            }
        };

        fetchJournalDates();
    }, []);

    const hasJournalEntry = (date) => {
        const dateString = date.toISOString().split('T')[0];
        return journalDates.includes(dateString);
    };

    return (
        <div>
        <div className="Calendar">
        <div className="Sample__container">
            <main className="Sample__container__content">
                <Calendar
                    onChange={onChange}
                    showWeekNumbers
                    value={value}
                    tileClassName={({ date }) => hasJournalEntry(date) ? 'journal-day' : ''}
                />
            </main>
        </div>
    </div>
    </div>
    );
}