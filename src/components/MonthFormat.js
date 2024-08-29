const MonthFormat = (date) => {
  const options = {
    month: "long",
    day: "2-digit",
    year: "numeric",
  };

  const formattedDate = new Date(date.date).toLocaleDateString("en-US", options);

  // Extract the first letter of the month and capitalize it
  const month = formattedDate.split(' ')[0];
  const restOfDate = formattedDate.slice(month.length);

  return (
    <span className="text-sm">
      {month.charAt(0).toUpperCase() + month.slice(1) + restOfDate}
    </span>
  );
};
export default MonthFormat;
