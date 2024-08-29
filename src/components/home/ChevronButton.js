import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

const ChevronButton = ({ text, bg, color, link }) => {
    return (
        <Link href={link}
            className={`inline-flex items-center py-2 px-3 rounded-lg transition-all duration-300 ease-in-out ${bg} ${color}
                      hover:bg-highlight hover:text-white  hover:brightness-125 hover:shadow-lg group`}
        >
            {text}
            <IconChevronRight
                className={`border rounded-full px-3 h-6 ml-2 transition-transform duration-300 ease-in-out
                             group-hover:translate-x-1`}
                size={40}  // Adjusted the size to be more proportionate
            />

        </Link>
    );
}
export default ChevronButton;
