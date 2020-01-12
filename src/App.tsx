import React, { useState } from 'react';
import { Calendar } from './components';
import "./App.css"

const App: React.FC = () => {
  const [selectedDate, selectDate] = useState(new Date);

  function handleDayClick(newDay: any) {
    selectDate(new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      newDay,
    ));
  }
  return (
    <div className="App">
      <Calendar fullDate={selectedDate} onDayClick={handleDayClick} />
    </div>
  );
}



export default App;
