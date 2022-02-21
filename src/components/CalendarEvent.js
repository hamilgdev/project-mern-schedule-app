import React from 'react';

const CalendarEvent = ({ event }) => {
  const { title, user } = event;
  return (
    <div>
      <strong>{title}</strong>
      <i> - {user.name}</i>
    </div>
  );
};

export default CalendarEvent;
