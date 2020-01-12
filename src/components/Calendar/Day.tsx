import React from 'react';

type DayProps = {
  fullDate: any,
  onClick: (newDate: Date) => void,
  selected: boolean,
  hovering: boolean | null,
  onMouseEnter: (date: any) => void,
  onMouseLeave: () => void
}

export default function Day(props: DayProps) {
  const {
    fullDate,
    onClick,
    selected,
    hovering,
    onMouseEnter,
    onMouseLeave
  } = props;
  const currentDate = new Date();
  if (fullDate === null) {
    return <div className="EmptyStateDay" />
  }
  const date = fullDate.getDate();
  let className = "Day";
  if (selected) {
    className = "Day Day--selected";
  } else if (hovering) {
    className = "Day Day--hovering";
  }
  return (
    <button
      className={className}
      onClick={() => onClick(date)}
      onMouseEnter={() => onMouseEnter(date)}
      onMouseLeave={() => onMouseLeave()}
    >
      {date}
      <div
        className={
          currentDate.getDate() === fullDate.getDate()
          && currentDate.getMonth() === fullDate.getMonth()
          && currentDate.getFullYear() === fullDate.getFullYear()
          ? "Point Point--current"
          : "Point"
        }
      />
    </button>
  );
};
