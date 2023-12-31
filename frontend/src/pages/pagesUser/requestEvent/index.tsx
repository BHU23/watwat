import React from 'react';
import '../../../css/eventRequest.css';
import EventRequestHistory from '../../../componant/eventRequestHistory';
import {
BrowserRouter as Router,
Routes,
Route,
Link,
} from "react-router-dom";

function EventRequest() {
  return (
    <div className='warpper'>
      <div className="contant">
        <div className="heandcontantdata">
          <div className="heandpagedata title">กิจกรรมที่แจ้งขอจัด</div>
          <div className='heandpagedata addEvent'><Link to="./createEventRequest">+ ขอจัดกิจกรรม</Link></div>
        </div>
        <div className="eventRequestHistory" >
          <EventRequestHistory />
          <EventRequestHistory />
          <EventRequestHistory />
          <EventRequestHistory />
        </div>
      </div>
    </div>
    
  );
}

export default EventRequest;
