import banner from "../../assets/images/banners/privacy-policy.png";
import Accordion from "../common/Accordion";
import FaqAccordion from "../FaqAccordion";
const FaqS = () => {
  const faqs = [
    {
      question: "How do I book an appointment?",
      answer:
        "To book an appointment, simply call our hospital's authorised line or fill out our online appointment form. Our friendly staff will assist you in selecting a convenient date and time for your visit.",
    },
    {
      question: "What should I bring to my appointment?",
      answer:
        "Please bring any relevant medical records, insurance information, and a list of medications you are currently taking. If it's your first visit, arrive a few minutes early to complete any necessary paperwork.",
    },
    {
      question: "How do I consult with a doctor?",
      answer:
        "You can consult with a doctor by scheduling an appointment by calling our hospital number or filling out the appointment form. You can either meet the Doctor in person or take an online consultation.",
    },
    {
      question: "What should I expect during a consultation?",
      answer:
        "During your consultation, the doctor will ask you about your medical history, current symptoms, and any concerns you may have. They may also perform a physical examination or order tests to help diagnose your condition.",
    },
    {
      question: "Do I need a referral to see a specialist?",
      answer:
        "A referral isn't necessary for visiting, but a doctor's recommendation is considered. You can schedule your appointment directly with our specialist, either online or through call.",
    },
    {
      question: "What is telemedicine, and how does it work?",
      answer:
        "Telemedicine allows you to consult with a doctor remotely using video conferencing technology. You can discuss your health concerns and receive medical advice from the comfort of your home.",
    },
    {
      question: "How do I prepare for a medical procedure?",
      answer:
        "Your doctor will provide you with specific instructions on how to prepare for a medical procedure, including any dietary restrictions, medications to avoid, and pre-operative tests you may need to undergo.",
    },
    {
      question: "What are the risks associated with surgery?",
      answer:
        "All surgical procedures carry some level of risk, including infection, bleeding, and adverse reactions to anesthesia. Your doctor will discuss the potential risks and benefits of surgery with you before proceeding.",
    },
    {
      question: "How long will it take to recover from surgery?",
      answer:
        "The recovery time varies depending on the type of surgery and individual factors. Your doctor will provide you with post-operative care instructions and guidance on when you can expect to return to your normal activities.",
    },
    {
      question: "Can I drive after a procedure?",
      answer:
        "It's usually best not to drive immediately after a procedure, especially if you've had anesthesia or sedation. Better to ask someone to drive you home, and avoid using heavy machinery until you've fully recovered.",
    },
    {
      question: "How often should I schedule follow-up appointments?",
      answer:
        "The frequency of follow-up appointments depends on your medical condition and the type of treatment you are receiving. Your doctor will advise you when to schedule your next appointment during your consultation.",
    },
    {
      question: "What insurance plans do you accept?",
      answer:
        "We welcome various insurance plans, such as private insurance, Medicare, and Medicaid. If you need specific details about insurance coverage and payment options, contact our billing department.",
    },
    {
      question: "Do you offer financial assistance or payment plans?",
      answer:
        "We provide financial assistance programs and payment plans for eligible patients. Our financial advisors are here to assist you in discovering options and selecting a payment arrangement that suits your budget.",
    },
    {
      question: "Can I request a copy of my medical records?",
      answer:
        "Of course, you can request a copy of your medical records by completing a release of information form. Our medical records department will process your request and provide you with a copy of your records according to applicable laws and regulations.",
    },
    {
      question: "How can I provide feedback about my experience?",
      answer:
        "As we strive to improve our services, we appreciate your feedback. You can provide feedback by completing a satisfaction survey, speaking with a member of our patient services team, or contacting our administration office.",
    },
  ];

  return (
    <div>
      <div>
        <img src={banner.src} alt="banner" className="w-full" />
      </div>
      <section>
        <div className="max-w-4xl mx-auto">
          <div className="p-4 divide-y-2 divide-slate-500">
            {faqs.map((faq, index) => {
              return (
                <FaqAccordion
                  key={index}
                  title={faq.question}
                >{faq.answer}</FaqAccordion>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqS;
