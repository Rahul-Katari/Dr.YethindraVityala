const DateFormat = (date) => {
  return (
    <span>
      {new Date(date.date).toLocaleDateString("en-IN", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })}
    </span>
  );
};
export default DateFormat;
