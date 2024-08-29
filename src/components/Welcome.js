import ImageSlider from "./ImageSlider";
import cure from "../assets/images/home/comm-to-cure.png";

const Welcome = ({ img, title }) => {
  const images = [{ src: cure }, { src: cure }, { src: cure }];
  return (
    <div className="overflow-hidden bg-stone-100">
      <section className="lg:px-8 px-4">
        <div className="mx-auto md:grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5 items-center">
          <div className="lg:col-span-2 pb-4 md:pb-0  md:ps-8 welcome-image-slider max-w-[470px] ">
            <ImageSlider slidesToShow={1} images={images} />
          </div>
          <div className="lg:pr-8 lg:col-span-3">
            <div>
              <div>
                <h2
                  data-aos="fade-right"
                  className="text-base font-medium leading-7 text-content text-xl welcome flex items-center"
                >
                  Welcome
                </h2>
              </div>
              <p className="mt-1  tracking-tight text-theme text-2xl">
                {title}
              </p>
              <p className="md:mt-6 text-gray-600">
                At Dr. Manasa Hospital, our promise is simple: to walk beside
                you every step of your healing journey with unwavering
                dedication and compassion.
              </p>
              <p className="my-4  text-gray-600">
                were not just here to treat illnesses; were here to understand
                your concerns, ease your worries, and celebrate your victories.
                Your health and well-being are our top priorities, and well
                stop at nothing to ensure you receive the exceptional care you
                deserve.
              </p>
              <p className=" text-gray-600">
                Lets conquer challenges together, embrace hope, and pave the
                way to a brighter, healthier tomorrow. Youre not alone—were
                here for you, always.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Welcome;
