const array = '07:05:45PM';

function timeConversion(s) {
  // Write your code here
  let time = s.split(':');
  let hour = time[0];
  let minute = time[1];
  let second = time[2].slice(0, 2);
  let meridian = time[2].slice(2);
  if (meridian === 'PM') {
    if (hour !== '12') {
      hour = parseInt(hour) + 12;
    }
  }
  if (meridian === 'AM') {
    if (hour === '12') {
      hour = '00';
    }
  }
  return `${hour}:${minute}:${second}`;
}