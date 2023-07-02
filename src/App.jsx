import React, { useState } from 'react';
import "./App.css"
import button from '/icon-arrow.svg';

function App() {
  const [buttonActive, setButtonActive] = useState(false);
  const [birthDay, setBirthDay] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthYear, setBirthYear] = useState('');

  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  const calculateAge = () => {
    setButtonActive(!buttonActive);
    const today = new Date();
    let calculatedAge = {};

    let yearsDiff = today.getFullYear() - birthYear;

    const monthDiff = (today.getMonth() + 1) - birthMonth;


    const daysDiff = today.getDate() - birthDay;


    if (daysDiff < 0) {
      const prevMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      calculatedAge.days = prevMonthLastDay + daysDiff;
      yearsDiff = monthDiff <= 0 ? yearsDiff - 1 : yearsDiff;
    } else {
      calculatedAge.days = daysDiff;
    }

    if (monthDiff < 0) {
      calculatedAge.months = 12 + monthDiff;
      calculatedAge.years = yearsDiff - 1;
    } else if (monthDiff === 0) {
      calculatedAge.months = 11;
      calculatedAge.years = yearsDiff;
    } else {
      calculatedAge.months = monthDiff;
      calculatedAge.years = yearsDiff;
    }

    setAge(calculatedAge);
  };

  return (
    <div className="App">
      <div className='container'>
        <div className='input-container'>
          <div className='date-container'>
            <p>DAY</p>
            <input
              value={birthDay}
              onChange={(e) => setBirthDay(e.target.value)}
            />
          </div>

          <div className='date-container'>
            <p>MONTH</p>
            <input
              value={birthMonth}
              onChange={(e) => setBirthMonth(e.target.value)}
            />
          </div>

          <div className='date-container'>
            <p>YEAR</p>
            <input
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
            />
          </div>
        </div>

        <div className='button-container'>
          <div className={buttonActive ? "purple" : "button"} onClick={calculateAge}>
            <img src={button} alt="button" />
          </div>
          <div className='line'></div>
        </div>


        {age.years > 0 && (
          <div className='age-container'>
            <p>
              <span className='number-container'>{age.years}</span> years
            </p>
            <p>
              <span className='number-container'>{age.months}</span> months
            </p>
            <p>
              <span className='number-container'>{age.days}</span> days
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
