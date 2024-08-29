import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
  IconBrandYoutube,
} from "@tabler/icons-react";

const icons = [
  {
    name: IconBrandFacebookFilled,
    href: "https://www.facebook.com/drvityalayethindra",
  },
  {
    name: IconBrandInstagram,
    href: "https://www.instagram.com/vityala_yethindra/",
  },
  { name: IconBrandTwitterFilled, href: "https://x.com/yethindra001" },
  {
    name: IconBrandLinkedin,
    href: "https://www.linkedin.com/in/dr-yethindra-vityala-a46b96192/",
  },
  // { name: IconBrandYoutube, href: "https://www.youtube.com/channel/UCU1GzDFIK4do3CDS_A-KaMw" },
];

const SocialIcons = ({ space }) => {
  return (
    <div className={`flex space-x-6 mt-5`}>
      {icons.map((icon, index) => (
        <a
          key={index}
          href={icon.href}
          target="_blank"
          className="border rounded-full p-1 hover:bg-theme hover:text-primary"
        >
          <icon.name size={18} />
        </a>
      ))}
    </div>
  );
};
export default SocialIcons;
