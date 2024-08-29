export const Slots = (selDate, bookedSlots) => {
  const currentDate = new Date();
  
  // Ensure selDate is a Date object
  selDate = new Date(selDate);

  const isToday = selDate.toDateString() === currentDate.toDateString();

  const selectedHour = isToday ? currentDate.getHours() : 0;
  const selectedMinute = isToday ? currentDate.getMinutes() : 0;

  // Generate an array of times from the start hour onwards
  const times = [];
  const startHour = 9; // Start hour (9 AM)
  const endHour = 18; // End hour (6 PM)

  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      let period = "AM";
      let hour12 = hour;
      if (hour >= 12) {
        period = "PM";
        hour12 = hour === 12 ? 12 : hour - 12; // Correct handling for noon and midnight
      }
      if (hour12 === 0) {
        hour12 = 12; // 12:00 AM should be displayed as 12:00 PM
      }
      const time = `${hour12.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")} ${period}`;
      
      // Check if the time is in the future
      if (
        !isToday || // Include all times if selected date is not today
        hour > selectedHour ||
        (hour === selectedHour && minute > selectedMinute)
      ) {
        times.push(time);
      }
    }
  }

  const availableSlots = times.filter(slot => !bookedSlots?.includes(slot));
  return availableSlots;
};
