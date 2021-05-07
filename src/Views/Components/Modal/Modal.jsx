import './Modal.css';
import React, { useState } from 'react'
// import { format } from 'date-fns'
import { enGB } from 'date-fns/esm/locale'
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

const Modall = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [focus, setFocus] = useState(START_DATE)
  const handleFocusChange = newFocus => {
    setFocus(newFocus || START_DATE)
  }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      <div>
      {/* <p style={{color:'black'}}>Selected start date: {startDate ? format(startDate, 'dd MMM yyyy', { locale: enGB }) : 'none'}.</p>
      <p style={{color:'black'}}>Selected end date: {endDate ? format(endDate, 'dd MMM yyyy', { locale: enGB }) : 'none'}.</p>
      <p style={{color:'black'}}>Currently selecting: {focus}.</p> */}
      <DateRangePickerCalendar style={{width: '913px', height: '1272px'}}
        startDate={startDate}
        endDate={endDate}
        focus={focus}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        onFocusChange={handleFocusChange}
        locale={enGB}
      />
    </div>
        {children}
        <button class="ApplyCalender" type="button" onClick={handleClose}>
          Apply
        </button>
      </section>
    </div>
  );
};

export default Modall;