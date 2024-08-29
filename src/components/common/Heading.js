const Heading = ({
  uppercase,
  center,
  aos,
  text,
  color
}) => {
  uppercase = uppercase && "uppercase";
  center = center && "mx-auto";
  aos = aos ? aos : "down";
  color = color ? `text-${color}` : 'text-theme'
  let gradient = color === 'text-white' ? '#054F59' : 'rgba(218, 237, 247, 0.21)'
  return (
    <h5
      className={`rounded-l-full mb-4 text-2xl font-semibold w-fit bg-no-repeat ${center} ${color}`}
      // style={{
      //   backgroundImage: `linear-gradient(90deg, #EB5E21 0%, ${gradient} 84.5%)`, backgroundSize: '70px'
      // }}
      data-aos="fade-left"
    >
      {text}
    </h5>
  );
};
export default Heading;
