import banner from "../../assets/images/banners/privacy-policy.png";
import BreadCrumb from "../common/BreadCrumb";
import Heading from "../common/Heading";
const breadCrumb = [{ href: "/privacyPolicy", title: "Privacy Policy" }];
const PrivacyPolicy = () => {
  return (
    <div>
      <div>
        <img src={banner.src} alt="banner" className="w-full banner-border-bottom" />
      </div>
      <div className="max-w-7xl container">
        <BreadCrumb linkData={breadCrumb} />
      </div>
      <section>
        <div className="max-w-7xl container mobile-gap-x">
          <div className="py-2 space-y-2">
            <Heading text={"Privacy Policy"} center={true} />

            <div className="text-gray-900">
              <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
              <p className="mb-4">
                This Privacy Policy explains how the practice of Dr. Yethindra Vityala (we, our, us) collects, uses, discloses, and
                protects your personal information. By using our services, you
                agree to the collection and use of information in accordance
                with this policy.
              </p>

              <h2 className="text-xl font-semibold mb-2">
                2. Information We Collect
              </h2>
              <p className="mb-4">
                We may collect and process the following types of information:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li className="mb-2">
                  <strong>Personal Identification Information:</strong> Name,
                  address, phone number, email address, date of birth, and other
                  identifiers.
                </li>
                <li className="mb-2">
                  <strong>Health Information:</strong> Medical history,
                  treatment records, prescriptions, and other health-related
                  information.
                </li>
                <li className="mb-2">
                  <strong>Financial Information:</strong> Insurance details,
                  billing information, and payment records.
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type,
                  operating system, and other technical information collected
                  through cookies and similar technologies.
                </li>
              </ul>

              <h2 className="text-xl font-semibold mb-2">
                3. How We Use Your Information
              </h2>
              <p className="mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li className="mb-2">
                  <strong>Healthcare Services:</strong> To provide, coordinate,
                  and manage your healthcare and related services.
                </li>
                <li className="mb-2">
                  <strong>Billing and Payments:</strong> To process your
                  insurance claims and payments for our services.
                </li>
                <li className="mb-2">
                  <strong>Communication:</strong> To communicate with you
                  regarding your treatment, appointments, and follow-up care.
                </li>
                <li className="mb-2">
                  <strong>Compliance and Legal Obligations:</strong> To comply
                  with legal requirements, court orders, and other governmental
                  requests.
                </li>
                <li>
                  <strong>Improvement of Services:</strong> To improve our
                  services, conduct research, and for training purposes.
                </li>
              </ul>

              <h2 className="text-xl font-semibold mb-2">
                4. Information Sharing and Disclosure
              </h2>
              <p className="mb-4">
                We do not sell or rent your personal information. We may share
                your information with:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li className="mb-2">
                  <strong>Healthcare Providers:</strong> Other doctors,
                  hospitals, and healthcare entities involved in your care.
                </li>
                <li className="mb-2">
                  <strong>Insurance Companies and TPAs:</strong> For the purpose
                  of processing insurance claims and obtaining payment.
                </li>
                <li className="mb-2">
                  <strong>Service Providers:</strong> Third parties that provide
                  services to us, such as billing, IT support, and data storage,
                  under strict confidentiality agreements.
                </li>
                <li>
                  <strong>Legal Authorities:</strong> When required by law,
                  regulation, or legal process, or to protect the rights,
                  property, or safety of our practice, patients, or others.
                </li>
              </ul>

              <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures
                to protect your personal information from unauthorized access,
                alteration, disclosure, or destruction. Despite these measures,
                no data transmission over the Internet or electronic storage is
                completely secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
              <p className="mb-4">
                You have certain rights regarding your personal information,
                including:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li className="mb-2">
                  <strong>Access:</strong> The right to request copies of your
                  personal data.
                </li>
                <li className="mb-2">
                  <strong>Correction:</strong> The right to request correction
                  of any inaccurate or incomplete data.
                </li>
                <li className="mb-2">
                  <strong>Deletion:</strong> The right to request deletion of
                  your personal data under certain circumstances.
                </li>
                <li className="mb-2">
                  <strong>Restriction:</strong> The right to request restriction
                  of processing your personal data.
                </li>
                <li>
                  <strong>Objection:</strong> The right to object to the
                  processing of your personal data.
                </li>
              </ul>
              <p className="mb-4">
                To exercise these rights, please contact us using the
                information provided below.
              </p>

              <h2 className="text-xl font-semibold mb-2">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to enhance your
                experience on our website. You can set your browser to refuse
                all or some cookies or to alert you when cookies are being sent.
                If you disable or refuse cookies, some parts of our website may
                become inaccessible or not function properly.
              </p>

              <h2 className="text-xl font-semibold mb-2">
                8. Changes to This Privacy Policy
              </h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated effective date. We
                encourage you to review this Privacy Policy periodically for any
                changes.
              </p>

              <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
              <p className="mb-4">
                If you have any questions or concerns about this Privacy Policy,
                please contact us at:
              </p>
              <p className="mb-4">
                <strong>Address:</strong> Citizens Hospital, 1-100/1/CCH,
                Citizens Hospital Rd, Near Aparna Cyber Life Nalagandla,
                Hyderabad, Telangana 500019
              </p>
              <p className="mb-4">
                <strong>Phone:</strong> <span>+91 8885544844</span>
              </p>
              <p>
                <strong>Email:</strong> juvvadivasudeva@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
