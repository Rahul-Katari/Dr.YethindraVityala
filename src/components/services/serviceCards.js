"use client"

import { ASSET_URL } from "@/services/api";
import Link from "next/link";
import Heading from "../common/Heading";

const ServiceCards = ({ services, categories, category }) => {
    return (
        <>
            {categories.map((treat, index) => {
                return (
                    <div key={index} className="my-10" data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
                        <Heading text={treat} center={true} />
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-10 gap-4 mobile-gap-x">
                            {services?.filter((service) =>
                                service.category ? service.category === index + 1 : ""
                            )?.map((service, index) => (
                                <Link href={`${category ? "/gastroenterology" : "/ent"}/${service.slug_name}`} data-aos="zoom-in" data-aos-delay={`${index * 100}`} className="" key={index}>
                                    <div
                                        className="bg-theme overflow-hidden text-white rounded-full flex items-center gap-4 hover:translate-x-0 hover:bg-highlight group relative"
                                    >
                                        <div className="absolute inset-0 bg-highlight rounded-full transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></div>

                                        <div className="bg-highlight rounded-full p-2 z-[1]">
                                            <img
                                                src={ASSET_URL + service.icon}
                                                className="p-2 h-12 w-12"
                                            />
                                        </div>
                                        <div className="z-[1]">{service.name}</div>
                                    </div>
                                </Link>
                            ))
                            }
                        </div>
                    </div >
                )
            })}
        </>
    )

}
export default ServiceCards;