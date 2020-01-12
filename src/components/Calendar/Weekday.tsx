import React from 'react';

type WeekDay = {
  label: string,
  title: string
}

export default function Weekday({ label, title }: WeekDay) {
  return (
    <div aria-label={label} className="Weekday">
      {title}
    </div>
  );
};

