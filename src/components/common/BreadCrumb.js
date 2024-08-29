import Link from "next/link";
import home from "../../assets/images/icons/home-icon.png";

const HomeIcon = <div><img src={home.src} /></div>
const BreadCrumb = ({ linkData }) => {
  return (
    <div className="py-3 max-sm:text-xs max-sm:py-2 flex items-center relative z-[1] mobile-gap-x font-medium">
      <span className="flex items-center">
        <Link
          href={"/"}
          className="hover:text-blue-900 hover:font-medium bg-white"
        >
          {/* {HomeIcon} */}
          Home
        </Link>
        <span className="px-2">{" | "}</span>
      </span>
      {linkData.map((link, index) => {
        return (
          <span key={index} className="flex items-center">
            <Link
              href={link.href}
              className="hover:text-blue-900 hover:font-medium whitespace-nowrap"
            >
              {link.title}
            </Link>
            {index === linkData.length - 1 ? (
              ""
            ) : (
              <span className="px-2">{"|"}</span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
