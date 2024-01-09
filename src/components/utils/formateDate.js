export function formatDate(inputDateStr) {
  // Convert the string to a Date object
  var dateObject = new Date(inputDateStr);

  // Create an array of month names
  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the day, month, and year from the Date object
  var day = dateObject.getDate();
  var monthIndex = dateObject.getMonth();
  var year = dateObject.getFullYear();

  // Format the date in the desired style
  var formattedDate = day + " " + monthNames[monthIndex] + " " + year;

  return formattedDate;
}

export function extractYearFromDate(dateString) {
  const dateObject = new Date(dateString);
  const year = dateObject.getFullYear();
  return year;
}
