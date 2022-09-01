import React, { useEffect, useState, Fragment } from 'react';

const Countdown = ({days, hours, seconds, minutes}) => {

    
    return (
   <>

  <div className="container">
     <div className="count">
    
      <div className="time">
        <div className="timer">
          <h2 id="days">{days}</h2>
        </div>
        <span>DAYS</span>
      </div>

      <div className="time">
        <div className="timer">
          <h2 id="hours">{hours}</h2>
        </div>
        <span>HOURS</span>
      </div>

      <div className="time">
        <div className="timer">
          <h2 id="minutes">{minutes}</h2>
        </div>
        <span>MINUTES</span>
      </div>

      <div className="time">
        <div className="timer">
          <h2 id="seconds">{seconds}</h2>
        </div>
       <span>SECONDS</span>
      </div>
  </div>
</div>
   
   </>
    );
};


export default Countdown;