import React, { useState } from 'react';
import "./App.css"
import iconButton from '/icon-arrow.svg';

function App() {
  const [buttonActive, setButtonActive] = useState(false);
  const [birthDay, setBirthDay] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthYear, setBirthYear] = useState('');

  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  const calculateAge = () => {
    if (birthDay > 31 || birthDay < 1 || birthMonth > 12 || birthMonth < 1) {
      alert("fecha incorrecta");
    } else {
      setButtonActive(!buttonActive);
      const today = new Date();


      let calculatedAge = {
        years: today.getFullYear() - birthYear,
        months: today.getMonth() + 1 - birthMonth,
        days: today.getDate() - birthDay
      };

      if (calculatedAge.days < 0) {
        const daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        calculatedAge.days += daysInLastMonth;
        calculatedAge.months--;
      }

      if (calculatedAge.months < 0) {
        calculatedAge.months += 12;
        calculatedAge.years--;
      }

      setAge(calculatedAge);
      console.log(age);
    }
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
            <img src={iconButton} alt="button" />
          </div>
          <div className='line'></div>
        </div>


        {age.years >= 0 && (
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
