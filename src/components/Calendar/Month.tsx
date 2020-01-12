import React, { useState } from 'react';
import Weekday from './Weekday';
import Day from './Day';
import { abbreviationFromWeekday, getWeeksForMonth } from '../../helpers/dateHelper';
import styled from 'styled-components';

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

type MonthProps = {
  date: any,
  month: any,
  year: any,
  onDayClick: (newDate: Date) => void
}

const Month = (props: MonthProps) => {
  const [hoveredDate, onHoverDate] = useState(null);
  const { month, year } = props;
  const renderWeek = (fullDate: any, dayIndex: any) => {
    const { onDayClick } = props;

    if (fullDate === null) {
      return (
        <Day
          key={dayIndex}
          fullDate={null}
          onClick={() => { }}
          selected={false}
          hovering={null}
          onMouseEnter={() => { }}
          onMouseLeave={() => { }}
        />
      );
    }
    const date = fullDate.getDate();
    return (
      <Day
        key={dayIndex}
        fullDate={fullDate}
        onClick={onDayClick}
        selected={date === props.date}
        hovering={date === hoveredDate}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    )

    function handleMouseEnter(date: any) {
      onHoverDate(date);
    }

    function handleMouseLeave() {
      onHoverDate(null);
    }
  };

  const weekDaysMarkup = weekdays.map(weekday => {
    return (
      <Weekday
        key={weekday}
        title={abbreviationFromWeekday(weekday)}
        label={weekday}
      />
    )
  });

  const weeks: any = getWeeksForMonth(2, 2020);
  const weeksMarkup = weeks.map((week: any, index: any) => {
    return (
      <div role="row" className="Week" key={index}>
        {week.map(renderWeek)}
      </div>
    )
  })
  return (
    <MonthContainer>
      <WeekdayContainer>
        {weekDaysMarkup}
      </WeekdayContainer>
      {weeksMarkup}
    </MonthContainer>
  );
}

export default Month;

const WeekdayContainer = styled.div`
  display: flex;
`;

const MonthContainer = styled.div`
  padding: 10px;
`;