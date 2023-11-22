import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import './Calendar.css';

export default function PageCalendar() {
    const [value, onChange] = useState(new Date());

    return (
        <div className="Calendar">
            <div className="Sample__container">
                <main className="Sample__container__content">
                    <Calendar onChange={onChange} showWeekNumbers value={value} />
                </main>
            </div>
        </div>
    );
}