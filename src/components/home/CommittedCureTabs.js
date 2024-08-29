import React from "react";
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import LaboratorySvg from "./LaboratorySvg";
import labTests from "../../assets/images/home/laboratory-tests.png";
import MoreBtn from "../common/MoreBtn";

const TabNames = [
  "Laboratory Tests",
  "Hormone Replacement Therapy",
  "Education",
  "Diet and Nutrition Counselling",
  "Hormone Replacement Therapy",
  "Education",
  "Diet and Nutrition Counselling",
];

const LaboratoryTestsTabScreen = () => (
  <div className="animate__animated animate__fadeInLeft" role="tabpanel">
    <div className="m-4">
      <div className="grid grid-cols-5 items-center">
        <div className="md:col-span-2 col-span-5 flex items-center justify-center">
          <img
            src={labTests}
            className="rounded-xl max-sm:h-[200px]"
            alt="Lab Tests"
          />
        </div>
        <div className="md:col-span-3 md:px-10 mt-4 col-span-5">
          <h1 className="text-theme text-xl font-medium">Laboratory Tests</h1>
          <p className="my-3">
            At Dr. Vasudeva Juvvadi Hospital, we understand the importance of
            accurate and reliable laboratory testing in diagnosing and
            monitoring your health. Our state-of-the-art laboratory is equipped
            with advanced technology and staffed by experienced professionals
            who are committed to providing you with precise results.
          </p>
          <p>
            From routine blood tests to specialized hormone assays, our
            laboratory offers a wide range of tests to assess your endocrine
            health and overall well-being. Whether youre undergoing a routine
            check-up or investigating a specific health concern, our laboratory
            tests play a crucial role in guiding your treatment plan.
          </p>
          <p>
            We strive to make the testing process as comfortable and convenient
            as possible for our patients. Our friendly staff will guide you
            through each step of the process, from sample collection to result
            interpretation, ensuring that you feel informed and supported
            throughout.
          </p>
          <p>
            At Dr. Vasudeva Juvvadi Hospital, you can trust that your
            laboratory tests are conducted with the highest standards of quality
            and accuracy. Your health is our top priority, and we are committed
            to providing you with the reliable information you need to make
            informed decisions about your care.
          </p>
          <MoreBtn
            btn={"theme"}
            btnText={"Read More"}
            href={"/"}
            align={"end"}
          />
        </div>
      </div>
    </div>
  </div>
);

const HormoneReplacementTherapyTabScreen = () => (
  <div className="animate__animated animate__fadeInLeft" role="tabpanel">
    <div className="m-4">
      <div className="grid grid-cols-5 items-center">
        <div className="md:col-span-2 col-span-5 flex items-center justify-center">
          <img
            src={labTests}
            className="rounded-xl max-sm:h-[200px]"
            alt="Lab Tests"
          />
        </div>
        <div className="md:col-span-3 md:px-10 mt-4 col-span-5 space-y-2">
          <h1 className="text-theme text-xl font-medium">
            Hormone Replacement Therapy (HRT)
          </h1>
          <p>
            Discover Hormone Replacement Therapy (HRT) at Dr. Vasudeva Juvvadi
            Hospital. Are you experiencing symptoms like hot flashes, mood
            swings, or fatigue? Youre not alone. Hormonal changes can affect
            both men and women as they age, leading to various discomforts. But
            there hope.
          </p>
          <p>
            Hormone Replacement Therapy (HRT) at Dr. Vasudeva Juvvadi Hospital
            offers a solution to help you regain balance and feel like yourself
            again. Our team of experts understands the challenges of hormonal
            imbalances and is here to guide you towards relief.
          </p>
          <h2 className="font-semibold">
            What is Hormone Replacement Therapy?
          </h2>
          <p>
            Hormone Replacement Therapy (HRT) is a treatment that aims to
            replenish hormone levels in the body, restoring balance and
            alleviating symptoms associated with hormonal imbalances. It
            involves the use of medications containing hormones like oestrogen,
            progesterone, or testosterone to supplement the body natural
            hormone production.
          </p>
          <h2 className="font-semibold">
            Benefits of Hormone Replacement Therapy
          </h2>
          <ol className="space-y-1 list-decimal ps-4">
            <li>
              <strong>Relief from Symptoms:</strong> HRT can help alleviate
              symptoms such as hot flashes, night sweats, mood swings, and
              fatigue, improving your overall quality of life.
            </li>
            <li>
              <strong>Bone Health:</strong> HRT can help maintain bone density
              and reduce the risk of osteoporosis, a condition characterized by
              brittle bones.
            </li>
            <li>
              <strong>Heart Health:</strong> For some individuals, HRT may help
              lower the risk of heart disease by improving cholesterol levels
              and blood vessel function.
            </li>
            <li>
              <strong>Improved Sleep:</strong> Restoring hormonal balance with
              HRT can lead to better sleep patterns and increased energy levels.
            </li>
            <li>
              <strong>Enhanced Well-being:</strong> By addressing hormonal
              imbalances, HRT can improve mood, cognitive function, and overall
              sense of well-being.
            </li>
          </ol>
          <h2 className="font-semibold">
            Is Hormone Replacement Therapy Right for You?
          </h2>
          <p>
            HRT may not be suitable for everyone, and it essential to discuss
            your individual health needs and concerns with our medical team.
            Well conduct a thorough evaluation, including a review of your
            medical history and symptoms, to determine if HRT is the right
            option for you.
          </p>
          <p>
            Take the first step towards feeling like yourself again with Hormone
            Replacement Therapy at Dr. Vasudeva Juvvadi Hospital. Our
            compassionate team is here to support you every step of the way,
            guiding you towards optimal hormonal balance and improved quality of
            life.
          </p>
          <MoreBtn
            btn={"theme"}
            btnText={"Read More"}
            href={"/"}
            align={"end"}
          />
        </div>
      </div>
    </div>
  </div>
);

// Add similar components for Education and DietAndNutritionCounselling

const EducationTabScreen = () => (
  <div className="animate__animated animate__fadeInLeft" role="tabpanel">
    <div className="m-4">
      <div className="grid grid-cols-5 items-center">
        <div className="md:col-span-2 col-span-5 flex items-center justify-center">
          <img
            src={labTests}
            className="rounded-xl max-sm:h-[200px]"
            alt="Education"
          />
        </div>
        <div className="md:col-span-3 md:px-10 mt-4 col-span-5 space-y-2">
          <h1 className="text-theme text-xl font-medium ">
            Empowering Education at Dr Vasudeva Juvvadi Center
          </h1>
          <p>
            At Dr. Vasudeva Juvvadi Hospital, we believe in the power of
            education to transform lives. That why were committed to
            contributing to education and empowering our community through
            knowledge and learning.
          </p>
          <h2 className="font-semibold">How We Contribute</h2>
          <ol className="space-y-1 list-decimal ps-4">
            <li>
              <strong>Health Education Programs:</strong> We organize
              informative sessions and workshops to educate individuals and
              families about various health topics, from preventive care to
              managing chronic conditions. These programs are designed to
              empower our community with the knowledge and skills needed to make
              informed decisions about their health.
            </li>
            <li>
              <strong>Healthcare Training:</strong> We offer training programs
              for healthcare professionals to enhance their skills and knowledge
              in specialized areas of medicine. By investing in the education of
              healthcare providers, we ensure that our community receives
              high-quality care from qualified and competent professionals.
            </li>
            <li>
              <strong>Scholarships and Grants:</strong> We provide financial
              support through scholarships and grants to deserving students
              pursuing careers in healthcare. By removing financial barriers to
              education, we enable talented individuals to fulfil their
              aspirations and contribute to the field of medicine.
            </li>
            <li>
              <strong>Community Engagement:</strong> We actively engage with
              schools, colleges, and community organizations to promote health
              literacy and encourage lifelong learning. Through collaborative
              efforts, we strive to create a culture of health and education
              within our community.
            </li>
          </ol>
          <h2 className="font-semibold">Why Education Matters</h2>
          <p>
            Education is the key to unlocking opportunities and achieving
            personal and professional growth. By investing in education, we
            empower individuals to lead healthier, happier lives and build a
            brighter future for themselves and their communities.
          </p>
          <p>
            Join us in our mission to empower education and transform lives.
            Whether through attending our educational programs, supporting our
            scholarship initiatives, or spreading awareness about the importance
            of education, every contribution counts.
          </p>
          <MoreBtn
            btn={"theme"}
            btnText={"Get Involved Today"}
            href={"/"}
            align={"end"}
          />
        </div>
      </div>
    </div>
  </div>
);

const DietAndNutritionCounsellingTabScreen = () => (
  <div className="animate__animated animate__fadeInLeft" role="tabpanel">
    <div className="m-4">
      <div className="grid grid-cols-5 items-center">
        <div className="md:col-span-2 col-span-5 flex items-center justify-center">
          <img
            src={labTests}
            className="rounded-xl max-sm:h-[200px]"
            alt="Diet and Nutrition"
          />
        </div>
        <div className="md:col-span-3 md:px-10 mt-4 col-span-5 space-y-2">
          <h1 className="text-theme text-xl font-medium">
            Nutrition Guidance for a Healthier You at Dr Vasudeva Juvvadi
            Center
          </h1>
          <p>
            Are you looking to improve your health and well-being through better
            nutrition? At Dr. Vasudeva Juvvadi Hospital, we offer expert Diet
            and Nutrition Counselling to help you achieve your wellness goals.
          </p>
          <h2 className="font-semibold">
            What is Diet and Nutrition Counselling?
          </h2>
          <p>
            Diet and Nutrition Counselling involves working with a qualified
            nutritionist or dietician to develop a personalized eating plan
            tailored to your individual needs and goals. Whether youre looking
            to lose weight, manage a medical condition, or simply adopt
            healthier eating habits, our team is here to support you on your
            journey to better health.
          </p>
          <h2 className="font-semibold">How We Can Help</h2>
          <ol className="space-y-1 list-decimal ps-4">
            <li>
              <strong>Personalized Nutrition Plans:</strong> Our experienced
              nutritionists will work closely with you to create a customized
              nutrition plan based on your unique dietary preferences,
              lifestyle, and health goals. Whether youre following a specific
              diet or looking for general guidance, well provide practical
              recommendations to help you make healthier food choices.
            </li>
            <li>
              <strong>Education and Support:</strong> We believe in empowering
              our patients with the knowledge and skills needed to make informed
              decisions about their nutrition. Through one-on-one counselling
              sessions, well educate you about the importance of balanced
              nutrition, portion control, and mindful eating practices. well
              also provide ongoing support and encouragement to help you stay
              motivated and on track towards achieving your goals.
            </li>
            <li>
              <strong>Medical Nutrition Therapy:</strong> For individuals with
              specific medical conditions such as diabetes, hypertension, or
              gastrointestinal disorders, we offer Medical Nutrition Therapy to
              manage symptoms and optimize health outcomes. Our team will work
              in collaboration with your healthcare provider to develop a
              nutrition plan tailored to your medical needs, ensuring safe and
              effective management of your condition.
            </li>
            <li>
              <strong>Lifestyle Modification:</strong> In addition to dietary
              recommendations, well also guide lifestyle modifications to
              support your overall health and well-being. This may include
              advice on physical activity, stress management, sleep hygiene, and
              other lifestyle factors that contribute to your overall health.
            </li>
          </ol>
          <h2 className="font-semibold">
            Why Choose Diet and Nutrition Counselling?
          </h2>
          <p>
            Good nutrition is essential for optimal health and well-being. By
            working with our team of experienced nutritionists, youll gain the
            knowledge, skills, and support needed to make positive changes to
            your diet and lifestyle. Whether your goal is to lose weight,
            improve your energy levels, or manage a medical condition, were
            here to help you achieve lasting results.
          </p>
          <p>
            Ready to take control of your health and nutrition? Contact us today
            to schedule a consultation with one of our experienced
            nutritionists. Together, well develop a personalized nutrition plan
            to help you reach your wellness goals and live your best life.
          </p>
          <MoreBtn
            btn={"theme"}
            btnText={"Take the First Step"}
            href={"/"}
            align={"end"}
          />
        </div>
      </div>
    </div>
  </div>
);

const CommittedCureTabs = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const onTabClick = (e, index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <Tabs
        activeTab={activeTab}
        onTabClick={onTabClick}
        hideNavBtnsOnMobile={false}
      >
        {TabNames.map((item, index) => (
          <Tab className="rounded flex items-center gap-x-4 text-sm" key={item}>
            <LaboratorySvg color={activeTab === index ? "White" : "#434343"} />
            {item}
          </Tab>
        ))}
      </Tabs>
      {/* Render the appropriate TabScreen based on activeTab */}
      {activeTab === 0 && <LaboratoryTestsTabScreen />}
      {activeTab === 1 && <HormoneReplacementTherapyTabScreen />}
      {activeTab === 2 && <EducationTabScreen />}
      {activeTab === 3 && <DietAndNutritionCounsellingTabScreen />}
      {activeTab === 4 && <HormoneReplacementTherapyTabScreen />}
      {activeTab === 5 && <EducationTabScreen />}
      {activeTab === 6 && <DietAndNutritionCounsellingTabScreen />}
      {/* Add similar condition for other tabs */}
    </div>
  );
};

export default CommittedCureTabs;
