export function convertTimeFormat(time) {
  // Split the input time into its components (hours, minutes, seconds)
  const [hours, minutes, seconds] = time.split(":");

  // Convert the hours to an integer
  let hour = parseInt(hours, 10);

  // Determine if the time is AM or PM
  const ampm = hour >= 12 ? "PM" : "AM";

  // Convert hour from 24-hour to 12-hour format
  hour = hour % 12;
  hour = hour ? hour : 12; // If hour is 0, set it to 12

  // Return the formatted time
  return `${hour.toString().padStart(2, "0")}:${minutes} ${ampm}`;
}
