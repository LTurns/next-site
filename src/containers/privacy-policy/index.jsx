import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@ui/button";

const PrivacyPolicyArea = ({ className, space }) => (
    <div
        className={clsx(
            "rn-privacy-policy-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row mb_dec--50">
                <div className="offset-lg-2 col-lg-8 ">
                    <div className="privacy-wrapper">
                        <h4>Date: 15-03-2022 V1</h4>
                            <p>
                            This privacy policy tells you about the information we collect from you when you use our website. In collecting this information, we are acting as a data controller and, by law, we are required to provide you with information about us, about why and how we use your data, and about the rights you have over your data.
                            </p>
                            <h4 class="my-5">
          Who are we?
        </h4>

        <p>
          We are CBS Products (KT), Ltd. Our address is Pillings Road, Oakham, Rutland, LE156QF. You can contact us by post at the above address, by email at <a
            class="email black--text"
            href="mailto: sales@cbsproducts.com"
          >sales@cbsproducts.com</a> or by telephone on  <a
            class="email black--text"
            href="tel:01572723665"
          >+44 (0) 1572 723 665</a>.
          We are not required to have a data protection officer, so any enquiries about our use of your personal data should be addressed to the contact details above.
        </p>

        <h4 class="my-5">
          When you use our website
        </h4>
        
        <p>
          When you use our website to browse our products and services and view the information we make available, a number of cookies are used by us and by third parties to allow the website to function, to collect useful information about visitors and to help to make your user experience better. For more information on this, please visit the <nuxt-link to="/cookiepolicy">
            cookie policy
          </nuxt-link> page.
        </p>

        <h4>When you submit an enquiry via our website</h4>

        <p>
          When you submit an enquiry via our website, we ask you for your name, contact telephone number and email address.
        </p>

        <p>We use this information to respond to your query, including providing you with any requested information about our products and services. We may also email you several times after your enquiry in order to follow up on your interest and ensure that we have answered your it to your satisfaction. We will do this based on our legitimate interest in providing accurate information prior to a sale.</p>

        <p>Your enquiry is stored and processed as an email which is hosted by Microsoft within the European Economic Area (EEA).</p>

        <p> We do not use the information you provide to make any automated decisions that might affect you.</p>

        <h4 class="my-5">
          Your rights as a data subject
        </h4>

        <p>By law, you can ask us what information we hold about you, and you can ask us to correct it if it is inaccurate. If we have asked for your consent to process your personal data, you may withdraw that consent at any time.</p>

        <p>If we are processing your personal data for reasons of consent or to fulfil a contract, you can ask us to give you a copy of the information in a machine-readable format so that you can transfer it to another provider.</p>

        <p>If we are processing your personal data for reasons of consent or legitimate interest, you can request that your data be erased.</p>

        <p>You have the right to ask us to stop using your information for a period of time if you believe we are not doing so lawfully. Finally, in some circumstances you can ask us not to reach decisions affecting you using automated processing or profiling.</p>

        <p>To submit a request regarding your personal data by email, post or telephone, please use the contact information provided above in the Who Are We section of this policy.</p>
        
        <h4 class="my-5">
          Your right to complain
        </h4>

        <p>If you have a complaint about our use of your information, we would prefer you to contact us directly in the first instance so that we can address your complaint. However, you can also contact the Information Commissioner’s Office via their website at <a href="www.ico.org.uk/concerns">www.ico.org.uk/concerns</a> or write to them at:</p>

        <ul>
          <li>Information Commissioner’s Office</li>
          <li>Wycliffe House</li>
          <li>Water Lane</li>
          <li>Wilmslow</li>
          <li>Cheshire</li>
          <li>SK9 5AF</li>
        </ul>

        <h4 class="my-5">
          Updates to this privacy policy
        </h4>

        <p>We regularly review and, if appropriate, update this privacy policy from time to time, as our services and use of personal data evolves. If we want to make use of your personal data in a way that we haven’t previously identified, we will contact you to provide information about this and, if necessary, to ask for your consent.</p>

        <p>We will update the version number and date of this document each time it is changed.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

PrivacyPolicyArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};
PrivacyPolicyArea.defaultProps = {
    space: 1,
};

export default PrivacyPolicyArea;
