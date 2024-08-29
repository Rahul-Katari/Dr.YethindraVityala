import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ExcellenceDetails from "@/components/pages/ExcellenceDetails";
import { getServiceDetails } from "@/services/api";

export const getServerSideProps = async ({ params }) => {

  // const response = await ApiService.get(`addservice/${params.id}?reqtype=api`);


  
  return {
    props: {
      params,
      // serviceData:response.result.data.service || []
    },
  };
};

const ServicePage = ({ params }) => {
  return (
    <>
      <Header />
      <ExcellenceDetails type={2} serviceId={params.id} />
      <Footer />
    </>
  );
};

export default ServicePage;
