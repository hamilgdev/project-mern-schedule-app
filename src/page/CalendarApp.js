import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './../styles/main.css';

import NavBar from '../components/NavBar';
import { messages } from '../helpers/calendar-messages-es';
import CalendarEvent from '../components/CalendarEvent';
import { useState } from 'react';
import CalendarModal from '../components/CalendarModal';

import { setOpenModal } from '../store/actions/uiAction';
import { useDispatch } from 'react-redux';

moment.locale('es');

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Title event',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    user: {
      _id: '123abc',
      name: 'Miltoncodeyt'
    }
  }
];

const CalendarApp = () => {
  const dispatch = useDispatch();

  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView') || 'month'
  );

  const onDoubleClick = (e) => dispatch(setOpenModal());

  const onSelectEvent = (e) => {
    console.log(e);
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'flex',
      color: 'white'
    };

    return { style };
  };

  return (
    <>
      <NavBar />
      <main className='calendar-screen'>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor='start'
          endAccessor='end'
          messages={messages}
          view={lastView}
          onView={onViewChange}
          onDoubleClickEvent={onDoubleClick}
          eventPropGetter={eventStyleGetter}
          components={{ event: CalendarEvent }}
        />
      </main>
      <CalendarModal />
    </>
  );
};

export default CalendarApp;
