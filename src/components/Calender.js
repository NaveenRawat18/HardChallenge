// Calendar.js
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/en-gb';

const localizer = momentLocalizer(moment);

const MyCalendar = ({ events, selectedDate, onDateSelect }) => {
  return (
    <div>
      <h2>Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        defaultView="month"
        views={['month', 'week', 'day']}
        selectable
        onSelectSlot={(slotInfo) => onDateSelect(slotInfo.start)}
      />
      <div>
        <p>Selected Date: {selectedDate ? moment(selectedDate).format('MMMM D, YYYY') : 'None'}</p>
      </div>
    </div>
  );
};

export default MyCalendar;
