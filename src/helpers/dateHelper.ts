const WEEK_LENGTH = 7;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export function getCurrentMonthName() {
  const d = new Date();
  const n = months[d.getMonth()];
  return `${n} ${d.getFullYear()}`
}

export function getMonthName(index: number) {
  return months[index];
}

export function abbreviationFromWeekday(weekday: string) {
  return weekday.substring(0, 1);
};

export function getWeeksForMonth(month: number, year: number) {
  const firstOfMonth = new Date(year, month, 1);
  const firstDayOfWeek = firstOfMonth.getDay();
  console.log('firstDayOfWeek-->', firstDayOfWeek);
  let weeks = [[]];

  let currentWeek: any = weeks[0];
  let currentDate = firstOfMonth;

  for (let i = 0; i < firstDayOfWeek; i++) {
    currentWeek.push(null);
  }

  while (currentDate.getMonth() === month) {
    if (currentWeek.length === WEEK_LENGTH) {
      currentWeek = [];
      weeks.push(currentWeek);
    }

    currentWeek.push(currentDate);
    currentDate = new Date(year, month, currentDate.getDate() + 1);
  }

  while (currentWeek.length < 7) {
    currentWeek.push(null)
  }

  return weeks;
}