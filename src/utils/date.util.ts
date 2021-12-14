const getDate = (d: string | number | Date): Date => new Date(d);

const getDateString = (d: string) =>
  new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(getDate(d));

const DateTime = {
  getDate,
  getDateString,
};

export default DateTime;
