import Link from "next/link";

const SpecialitiesCard = ({ spec, svg }) => {
  return (
    <a
      data-aos="zoom-in"
      href={`/${spec?.category ? "ent" : "gastrology"}/${spec?.slug_name}`} // Adjust the href as needed
      className="z-[1] rounded-lg shadow-3xl text-center justify-center md:p-3 p-2 py-4 md:py-6 relative specialities-card bg-white border-white border flex flex-col items-center"
    >
      <div
        dangerouslySetInnerHTML={{ __html:  spec.svg  }} className="specSvg"
      />
      <p className="pt-4 font-medium">{spec?.name}</p>
    </a>
  );
};

export default SpecialitiesCard;
