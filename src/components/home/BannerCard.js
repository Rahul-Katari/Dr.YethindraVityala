import { Link } from "react-router-dom";

const BannerCard = ({ imgSrc, title1, title2, href }) => {
  const to = href ? { to: href } : {};
  return (
    <>
      <Link {...to}>
        <div
          className="rounded border-4 md:p-3 p-2 md:m-4 m-2 pb-0 text-center shadow-3xl border-theme flex flex-col justify-between md:px-12"
          // data-aos="fade-left"
        >
          <div className="text-sm md:text-base">
            <h3 className=" font-medium max-sm:text-xs">{title1}</h3>
            <h3 className=" font-medium max-sm:text-xs">{title2}</h3>
          </div>
          <div className=" w-28 md:min-h-[115px] max-sm:w-20 max-sm:h-16 flex justify-center m-auto">
            <img
              src={imgSrc}
              alt="Card Image"
              className={
                title1 === "Health"
                  ? "h-full m-auto mb-0  max-sm:object-contain"
                  : "m-auto mb-0  max-sm:object-contain"
              }
            />
          </div>
        </div>
      </Link>
    </>
  );
};
export default BannerCard;
