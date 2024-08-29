import Link from "next/link";

const PageLinks = ({ links, size, weight, space }) => {
  return (
    <div
      className={`flex md:flex-row flex-col md:space-x-${
        space ? space : "4"
      } md:items-center md:text-${size} font-${weight}`}
    >
      {links.map((link) => (
        <Link
          href={link.href}
          className="top-banner-links relative hover:text-navHighlight hover:underline md:ms-4"
          key={link.name}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};
export default PageLinks;
