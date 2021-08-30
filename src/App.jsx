import React, { useState } from 'react';


const App = () => {

    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();
    let day  = new Date().getDay();

    const [currDate, setCDate] = useState(date);
    const [currTime, setCTime] = useState(time);
    const [currDay, setCDay] = useState(day);
    
    const upTime = () => {
        time = new Date().toLocaleTimeString();
        date = new Date().toLocaleDateString();
        day  = new Date().getDay();
        switch (day) {
            case 0:
              day = "Sunday";
              break;
            case 1:
              day = "Monday";
              break;
            case 2:
              day = "Tuesday";
              break;
            case 3:
              day = "Wednesday";
              break;
            case 4:
              day = "Thursday";
              break;
            case 5:
              day = "Friday";
              break;
            case 6:
              day = "Saturday";
          }

        setCTime(time);
        setCDate(date);
        setCDay(day);
    }
    setInterval(upTime);

    return(
        <>
            <div>
                <h2 className="A"> {currDate} </h2>
                <h2 className="B"> {currTime} </h2>
                <h2 className="C"> {currDay} </h2>
            </div>
        </>

    );
};

export default App;