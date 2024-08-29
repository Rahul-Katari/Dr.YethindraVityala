import React, { useEffect, useState } from "react";
import { IconArrowUp } from "@tabler/icons-react";

const Topscroll = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <div className="flex">
      {visible ? (
        <a
          className="rounded-full fixed bottom-5 right-10 top_scroll btn-theme text-white p-2"
          onClick={scrollToTop}
        >
          <IconArrowUp size={24} className="animate-bounce" />
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default Topscroll;
