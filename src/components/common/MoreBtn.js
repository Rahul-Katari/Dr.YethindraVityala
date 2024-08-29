import Link from "next/link";

const MoreBtn = ({ btnText, href, btn, align, round }) => {
  return (
    <div className={`flex justify-${align} m-4`} data-aos="fade-right">
      <Link href={href} className={`btn-${btn} rounded-${round}`}>
        {btnText}
      </Link>
    </div>
  );
};
export default MoreBtn;
