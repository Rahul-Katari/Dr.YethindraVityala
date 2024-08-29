import { useState, useEffect } from 'react';
import { IconPhoneFilled } from '@tabler/icons-react';

const CallUs = () => {
  const [iconSize, setIconSize] = useState(60);

  useEffect(() => {
    const handleResize = () => {
      setIconSize(window.innerWidth <= 768 ? 40 : 60);
    };

    // Set initial size
    handleResize();

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex md:mt-10 mb-12 mt-10 justify-center">
      <div
        className="p-5 text-white bg-highlight rounded shadow-2xl flex items-center inline gap-6"
        style={{ background: "linear-gradient(90deg, #04092E 0%, #083090 100%)" }}
      >
        <IconPhoneFilled
          size={iconSize}
          className="rounded-full md:p-3 p-2 border border-2"
        />
        <div>
          <p className="md:text-xl">Call us now</p>
          <h2 className="md:text-3xl text-2xl font-semibold">
            <a href="tel:+918885544844">+91 88855 44844</a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CallUs;
