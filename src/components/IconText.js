const IconText = ({ iconText, iconSrc, text1, text2, Icon }) => {
  return (
    <div className="flex items-start gap-3">
      <Icon className="text-theme animate-pulse" size={50} />
      <div className="flex flex-col ">
        <div className="mb-2">
          {iconText ? (
            <h3 className="text-highlight text-4xl font-bold">{iconText}</h3>
          ) : (
            <img
              src={iconSrc}
              className="w-10 h-10 object-contain"
              alt="locate Clinic"
            />
          )}
        </div>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
};
export default IconText;
