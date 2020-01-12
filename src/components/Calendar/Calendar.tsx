import React, { useState } from 'react';
import FontAwesome from 'react-fontawesome';
import { getMonthName } from '../../helpers/dateHelper'
import Month from './Month';
import styled from 'styled-components';

type CalendarProps = {
  fullDate: any,
  onDayClick: (newDate: Date) => void
}

const Calendar = ({ fullDate, onDayClick }: CalendarProps) => {
  const [selectedMonthNum, selectMonthNumber] = useState(fullDate.getMonth());
  const [selectedYearNum, selectYearNumber] = useState(fullDate.getFullYear());
  const dateNumber = fullDate.getDate();
  const monthName = getMonthName(selectedMonthNum, selectedYearNum);

  function onPrev() {
    if (selectedMonthNum === 0) {
      selectMonthNumber(11);
      selectYearNumber(selectedYearNum - 1);
    } else {
      selectMonthNumber(selectedMonthNum - 1);
    }
  }

  function onNext() {
    if (selectedMonthNum === 11) {
      selectMonthNumber(0);
      selectYearNumber(selectedYearNum + 1);
    } else {
      selectMonthNumber(selectedMonthNum + 1);
    }
  }

  return (
    <Container>
      <MonthNameContainer>
        <Button onClick={() => onPrev()}>
          <FontAwesome
            className="super-crazy-colors"
            name="caret-left"
            size="lg"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          />
        </Button>
        <div>
          {monthName}
        </div>
        <Button onClick={() => onNext()}>
          <FontAwesome
            className="super-crazy-colors"
            name="caret-right"
            size="lg"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          />
        </Button>
      </MonthNameContainer>
      <Month
        date={dateNumber}
        month={selectedMonthNum}
        year={selectedYearNum}
        onDayClick={onDayClick}
      />
    </Container >
  );
}

export default Calendar;

const Container = styled.div`
  width: 400px;
  background-color: #fff;
  padding: 0px;
  box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05), 0 1px 3px 0 rgba(63 , 63, 63, 0.15);
`

const MonthNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  color: #4f4f4f;
  padding: 10px 20px;
  border-bottom: 1px solid #d1e3f8;
`

const Button = styled.button`
  padding: 0 10px;
  border: none;
  background-color: #fff;
  &&:hover {
    background-color: #f2f2f2;
  }
`;