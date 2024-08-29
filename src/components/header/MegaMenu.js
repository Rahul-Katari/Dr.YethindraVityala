const MegaMenu = ({ categories, services, item }) => {
    return (
        <>
            {
                categories.map((category, index) => (
                    <div key={index}>
                        <h4 className="bg-highlight text-white rounded p-1 mb-3">
                            {category}
                        </h4>
                        <div className={`grid ${item.name !== "ENT" && "grid-cols-2"}`}>
                            {services
                                ?.filter(
                                    (service) =>
                                        service.category === index + 1
                                )
                                ?.map((service, index) => (
                                    <a
                                        key={index}
                                        href={
                                            item.href +
                                            "/" +
                                            service.slug_name
                                        }
                                        className="block text-sm font-medium xl:text-gray-900 text-white hover:text-theme p-1"
                                    >
                                        - {service.name}
                                    </a>
                                ))}
                        </div>
                    </div>))}
        </>
    )
}

export default MegaMenu;