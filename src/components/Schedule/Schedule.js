import { useState} from 'react';
import { Form, Button } from "react-bootstrap"
import DatePicker from "react-datepicker";
import addDays from 'date-fns/addDays'
import "react-datepicker/dist/react-datepicker.css";
import 'react-dropdown/style.css';
import * as React from 'react';  
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import Select from 'react-select';
import './Schedule.css'
import Navbar from '../Navbar/Navbar.js';

const Schedule = () => {
  const [startDate, setStartDate] = useState(null);
  const [value, setValue] = React.useState(null);
  var comittee=[
    {
    value:1,
    label:"Approval"
    },
    {
    value:2,
    label:"Policy and Academic Planning"
    },
    {
    value:3,
    label:"Administration"
    },
    {
    value:4,
    label:"Finance"
    }
    ];

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  function booked(){
    alert("Your Meeting has been successfully booked");
  }
  return (
    <>
    <Navbar />
    <Form>
        <Form.Group className='form_grp'>
            {/* <h3>Enter date and time:</h3> */}
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              includeDateIntervals={[
                    {    start: addDays(new Date(),1), end: addDays(new Date(), 7) },
                    ]}
              showTimeSelect
              includeTimes={[
                setHours(setMinutes(new Date(), 0), 9),
                setHours(setMinutes(new Date(), 0), 12),
                setHours(setMinutes(new Date(), 0), 15),
                setHours(setMinutes(new Date(), 0), 18),
              ]}
              dateFormat="MMMM d, yyyy h:mm aa"
              placeholderText='Enter date and time'
              className='pick'
            />
        </Form.Group>

        <Form.Group className='form_grp'>
        <div>
          <label>
            <span>Venue:</span>
            <select value={value} onChange={handleChange}>
              <option default>Select</option>
              <option value="Auditorium 1">Auditorium 1</option>
              <option value="Auditorium 2">Auditorium 2</option>
              <option value="Auditorium 3">Auditorium 3</option>
              <option value="Auditorium 4">Auditorium 4</option>
              <option value="Auditorium 5">Auditorium 5</option>
              <option value="Auditorium 6">Auditorium 6</option>
              <option value="Auditorium 7">Auditorium 7</option>
            </select>
          </label>
        </div>
      </Form.Group>
      <Form.Group className='form_grp'>
          <span>Is canteen required:</span> 
        <Button className='grn'>YES</Button>
        <Button className='rd'>NO</Button>
      </Form.Group>
      <Form.Group className='form_grp'>
      <div>
		    <Select isMulti options ={comittee} className='loc' placeholder="Select Committee..."></Select>
	    </div>
      </Form.Group>
      <Button type="submit" block className='subbt' onClick={ booked }>Book the meeting</Button>
    </Form>
    </>
  );
};

export default Schedule