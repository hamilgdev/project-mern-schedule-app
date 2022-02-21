import React, { useState } from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import DateTimePicker from 'react-datetime-picker';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';

import Button from './Button';
import { setCloseModal } from '../store/actions/uiAction';

Modal.setAppElement('#root');

const now = moment().minutes(0).second(0).add(1, 'hours');
const last = now.clone().add(1, 'hours');

const CalendarModal = () => {
  const dispatch = useDispatch();

  const { modalOpen } = useSelector((state) => state.ui);

  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(last.toDate());

  const [formValues, setFormValues] = useState({
    title: 'Event',
    notes: '',
    startDate: now.toDate(),
    endDate: last.toDate()
  });

  const { title, notes, startDate, endDate } = formValues;

  const handleStartDate = (e) => {
    setDateStart(e);
    setFormValues({
      ...formValues,
      startDate: e
    });
  };

  const handleEndDate = (e) => {
    setDateEnd(e);
    setFormValues({
      ...formValues,
      endDate: e
    });
  };

  const hdnaleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const momentStart = moment(startDate);
    const momentEnd = moment(endDate);

    if (momentStart.isSameOrAfter(momentEnd)) {
      return Swal.fire(
        'Error',
        'Fecha fin debe ser mayor que fecha inicio',
        'error'
      );
    }

    if (title.trim().length < 2) {
      return Swal.fire(
        'Error',
        'El titulo debe tener almenos 2 caracteres',
        'error'
      );
    }
  };

  const handleCloseModal = () => dispatch(setCloseModal());

  return (
    <Modal
      isOpen={modalOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={handleCloseModal}
      className='modal'
      overlayClassName='modal-fondo'
      closeTimeoutMS={200}
    >
      <form className='my-4' autoComplete='off' onSubmit={handleSubmit}>
        <h2 className='mb-4 font-bold text-lg text-gray-600'>Nuevo evento</h2>
        <div className='mb-4'>
          <label className='mb-2 flex font-bold text-sm text-gray-500'>
            Fecha y hora inicio
          </label>
          <DateTimePicker
            onChange={handleStartDate}
            value={dateStart}
            className='px-4 py-2 w-full | rounded-sm text-sm bg-gray-100 border-0'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='dateEnd'
            className='mb-2 flex font-bold text-sm text-gray-500'
          >
            Fecha y hora fin
          </label>
          <DateTimePicker
            onChange={handleEndDate}
            value={dateEnd}
            minDate={dateStart}
            className='px-4 py-2 w-full | rounded-sm text-sm bg-gray-100 border-0'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='title'
            className='mb-2 flex font-bold text-sm text-gray-500'
          >
            Titulo y notas
          </label>
          <input
            id='title'
            className='px-4 py-2 w-full | rounded-sm text-sm bg-gray-100'
            type='text'
            name='title'
            value={title}
            onChange={hdnaleInputChange}
            placeholder='Titulo del evento'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='description'
            className='mb-2 flex font-bold text-sm text-gray-500'
          >
            Descrición
          </label>
          <textarea
            id='description'
            placeholder='Agregue una descrición'
            className='flex w-full p-4 | bg-gray-100'
            value={notes}
            name='notes'
            onChange={hdnaleInputChange}
          />
        </div>

        <Button type='outline' text='Guardar' theme='white' />
      </form>
    </Modal>
  );
};

export default CalendarModal;
