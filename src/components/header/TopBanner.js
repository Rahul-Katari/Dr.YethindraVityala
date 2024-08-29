import SocialIcons from "./SocialIcons";
import PageLinks from "./PageLinks";
import { IconPhone } from "@tabler/icons-react";

const topLinks = [
  { name: "Blogs", href: "/blogs" },
  // { name: "Careers", href: "/careers" },
  // { name: "Privacy Policy", href: "/privacyPolicy" },
  // { name: "Contact Us", href: "/contact" },
];
const TopBanner = () => {
  return (
    <div className="top-banner bg-primary">
      <div className=" justify-end text-white font-medium space-x-3 py-3 items-center hidden lg:flex max-w-7xl mx-auto">
        <div className="text-sm flex pe-2 items-center">
          Follow Us:
          <div className="ps-2">
            <SocialIcons space={"1"} />
          </div>
        </div>
        <PageLinks links={topLinks} weight={"medium"} />
      </div>
    </div>
  );
};
export default TopBanner;
