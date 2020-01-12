import React from 'react';
import FontAwesome from 'react-fontawesome';
import { getMonthName } from '../../helpers/dateHelper'
import Month from './Month';
import styled from 'styled-components';

type CalendarProps = {
  fullDate: any,
  onDayClick: (newDate: Date) => void
}

const Calendar = ({ fullDate, onDayClick }: CalendarProps) => {
  const dateNumber = fullDate.getDate();
  const monthNumber = fullDate.getMonth();
  const yearNumber = fullDate.getFullYear();
  const monthName = getMonthName(monthNumber);
  return (
    <Container>
      <MonthNameContainer>
        <div>
          <FontAwesome
            className="super-crazy-colors"
            name="caret-left"
            size="lg"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          />
        </div>
        <div>
          {monthName}
        </div>
        <div>
          <FontAwesome
            className="super-crazy-colors"
            name="caret-right"
            size="lg"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          />
        </div>
      </MonthNameContainer>
      <Month
        date={dateNumber}
        month={monthNumber}
        year={yearNumber}
        onDayClick={onDayClick}
      />
    </Container>
  );
}

export default Calendar;

const Container = styled.div`
  width: 350px;
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