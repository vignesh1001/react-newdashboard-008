import React from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
const localizer = momentLocalizer(moment);
const MyCalendar = (props) => (
  <div>
    <Calendar
      style={{ height: 500, width: '95%' }}
      localizer={localizer}
      events={[
        {
          id: 0,
          title: 'All Day Event very long title',
          allDay: true,
          start: new Date(2021, 3, 0),
          end: new Date(2021, 3, 1),
        },
        {
          id: 1,
          title: 'Long Event',
          start: new Date(2021, 9, 7),
          end: new Date(2021, 9, 10),
        },

        {
          id: 2,
          title: 'DTS STARTS',
          start: new Date(2021, 2, 13, 0, 0, 0),
          end: new Date(2021, 2, 20, 0, 0, 0),
        },

        {
          id: 3,
          title: 'DTS ENDS',
          start: new Date(),
          end: new Date(),
        },

        {
          id: 4,
          title: 'Some Event',
          start: new Date(2021, 10, 10, 0, 0, 0),
          end: new Date(2021, 10, 10, 0, 0, 0),
        },
      ]}
      startAccessor="start"
      endAccessor="end"
      defaultDate={moment().toDate()}
      selectable
      onSelectSlot={(item) => console.log('onSelectSlot', item)}
      onSelectEvent={(item) => console.log('onSelectEvent', item)}
    />
  </div>
);

export default MyCalendar;
