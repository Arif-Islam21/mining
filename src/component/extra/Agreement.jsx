//all packages
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

//component
import CustomLoader from "./customLoader";
import SingleHeader from "./SingleHeader";
import SupportLink from "./supportLink";
import TelegramPopUp from "./TelegramPopUp";
import { useState } from "react";

const Agreement = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/me");
  };
  const { t } = useTranslation();
  const [isTelegramVisible, setIsTelegramVisible] = useState(false);
  const toggleTelegramPopUp = () => {
    setIsTelegramVisible(!isTelegramVisible);
  };

  return (
    <div>
      <div id="app" className="a-t-26 no-4">
        <div className="box-border min-h-full w-full pt-45px">
          <SingleHeader></SingleHeader>

          <div
            className="container-card relative rd-$card-radius p-$mg "
            style={{ marginTop: "20px" }}
          >
            <div className="base-list a-t-26">
              <div className="">
                <span className=" text-black">
                  <h2 style={{ fontSize: "2em", fontWeight: "bold" }}>
                    Terms of Use
                  </h2>
                  <br />
                  <p style={{ fontSize: "1.2em", fontWeight: "regular" }}>
                    <strong>Effective Date:</strong> 01.01.2025
                  </p>
                  <p style={{ fontSize: "1.2em", fontWeight: "regular" }}>
                    <strong>Last Updated:</strong> 01.02.2025
                  </p>
                  <br />
                  <p style={{ fontSize: "1.2em", fontWeight: "regular" }}>
                    Welcome to <strong> DLH</strong>. These Terms of Use govern
                    your access to and use of our platform (<strong>DLH</strong>
                    ), including our website, applications, and services. By
                    using our platform, you agree to comply with these terms. If
                    you do not agree, please do not use our services.
                  </p>
                  <br />
                  <h3 style={{ fontSize: "1.3em", fontWeight: "bold" }}>
                    1. Acceptance of Terms
                  </h3>
                  <br />
                  <p style={{ fontSize: "1.2em", fontWeight: "regular" }}>
                    By accessing or using <strong>DLH</strong>, you confirm that
                    you are at least <strong>18 years</strong> old and agree to
                    these Terms of Use. If you violate any of these terms, we
                    reserve the right to suspend or permanently delete your
                    account.
                  </p>
                  <br />
                  <h3 style={{ fontSize: "1.3em", fontWeight: "bold" }}>
                    2. Platform Overview
                  </h3>
                  <br />
                  <p style={{ fontSize: "1.2em", fontWeight: "regular" }}>
                    DLH is an <strong>e-commerce platform</strong> that allows
                    users, including the general public and private investors,
                    to participate in various activities. We{" "}
                    <strong>do not allow prohibited content</strong>, and users
                    must comply with all applicable laws while using our
                    platform.
                  </p>
                  <br />
                  <h3 style={{ fontSize: "1.3em", fontWeight: "bold" }}>
                    3. Account Registration & User Data
                  </h3>
                  <br />
                  <p style={{ fontSize: "1.2em", fontWeight: "regular" }}>
                    To use DLH, you may need to create an account by providing:
                    <ul>
                      <li>• Username</li>
                      <li>• Phone number</li>
                      <li>• Email</li>
                    </ul>
                    <br />
                    We only use this information for{" "}
                    <strong>
                      {" "}
                      user identification and support purposes. We do not sell,
                      share, or misuse your data.
                    </strong>{" "}
                    Your information is encrypted and stored securely.
                  </p>
                  <br />
                  <h3 style={{ fontSize: "1.3em", fontWeight: "bold" }}>
                    4. Payment & Refund Policy
                  </h3>
                  <br />
                  <p style={{ fontSize: "1.2em", fontWeight: "regular" }}>
                    •DLH uses cryptocurrency transactions for payments.
                  </p>
                  <p style={{ fontSize: "1.2em", fontWeight: "regular" }}>
                    •<strong>There are no transaction fees </strong> when making
                    payments.
                  </p>
                  <p style={{ fontSize: "1.2em", fontWeight: "regular" }}>
                    •
                    <strong>
                      Refunds are NOT possible once a payment is made.
                    </strong>
                  </p>
                  <br />
                  <h3 style={{ fontSize: "1.3em", fontWeight: "bold" }}>
                    5. Referral Links & App Downloads
                  </h3>
                  <br />
                  <p style={{ fontSize: "1.2em", fontWeight: "regular" }}>
                    DLH offers <strong>referral links </strong> that users can
                    share to invite others. These links are{" "}
                    <strong>safe and secure</strong> and are not intended for
                    spam or fraudulent use. An example of a referral link used
                    on our platform is:
                    <br />
                    <br />
                    <a
                      href="https://delta-usd.vip/#/register?ic=100001"
                      style={{ color: "blue" }}
                    >
                      ➡ https://delta-usd.vip/#/register?ic=100001
                    </a>
                    <br />
                    <br />
                  </p>
                  <p style={{ fontSize: "1.2em", fontWeight: "regular" }}>
                    <strong>App Downloads (APK & iOS Profile)</strong>
                    <br />
                    <br />
                    We provide users with an option to download our platform as
                    an app for a better experience. Users can install our app
                    safely via the following links:
                    <br />
                    <br />
                    <strong>➡ Android (.APK) Download: </strong>
                    <a
                      href="https://delta-usd.vip/assets/delta-usd.apk"
                      style={{ color: "blue" }}
                    >
                      https://delta-usd.vip/assets/delta-usd.apk
                    </a>
                    <br />
                    <strong> ➡ iOS Profile Download: </strong>(Available on our
                    official platform)
                    <br />
                    <br />
                    These files are <strong>
                      safe, free from malware,
                    </strong>{" "}
                    and{" "}
                    <strong>
                      designed solely for accessing DLH services conveniently.{" "}
                    </strong>
                    Users should always download the app{" "}
                    <strong>only from our official website</strong> to avoid any
                    security risks.
                    <br />
                    <br />
                  </p>
                  <h3 style={{ fontSize: "1.3em", fontWeight: "bold" }}>
                    6. Account Termination
                  </h3>
                  <br />
                  <p style={{ fontSize: "1.2em", fontWeight: "regular" }}>
                    If a user violates any of our rules, we reserve the right to{" "}
                    <strong> close or suspend</strong>
                    their account without prior notice.
                  </p>
                  <br />
                  <h3 style={{ fontSize: "1.3em", fontWeight: "bold" }}>
                    7. Security & User Responsibility
                  </h3>
                  <br />
                  <p style={{ fontSize: "1.2em", fontWeight: "regular" }}>
                    • We implement <strong>strong encryption</strong> to keep
                    user data safe.
                  </p>
                  <p style={{ fontSize: "1.2em", fontWeight: "regular" }}>
                    • We{" "}
                    <strong>
                      do not collect any data for illegal purposes.
                    </strong>
                  </p>
                  <p style={{ fontSize: "1.2em", fontWeight: "regular" }}>
                    • Users must keep their login credentials secure and not
                    share them with anyone.
                  </p>
                  <br />
                  <h3 style={{ fontSize: "1.3em", fontWeight: "bold" }}>
                    8. Disclaimer of Liability
                  </h3>
                  <br />
                  <p style={{ fontSize: "1.2em", fontWeight: "regular" }}>
                    • DLH is{" "}
                    <strong>not responsible for any financial losses </strong>
                    incurred by users.
                  </p>
                  <p style={{ fontSize: "1.2em", fontWeight: "regular" }}>
                    • We do not guarantee{" "}
                    <strong>uninterrupted service,</strong> and we are not
                    liable for any service downtime.
                  </p>
                  <p style={{ fontSize: "1.2em", fontWeight: "regular" }}>
                    • DLH is{" "}
                    <strong>
                      not responsible for third-party content or referral links
                      shared by users.
                    </strong>
                  </p>
                  <br />
                  <h3 style={{ fontSize: "1.3em", fontWeight: "bold" }}>
                    9. Changes to Terms of Use
                  </h3>
                  <br />
                  <p style={{ fontSize: "1.2em", fontWeight: "regular" }}>
                    We reserve the right to update or modify these terms at any
                    time. Changes will be effective{" "}
                    <strong>immediately upon posting.</strong>
                    Continued use of our platform means you accept the updated
                    terms.
                  </p>
                  <br />
                  <h3 style={{ fontSize: "1.3em", fontWeight: "bold" }}>
                    10. Governing Law
                  </h3>
                  <br />
                  <p style={{ fontSize: "1.2em", fontWeight: "regular" }}>
                    These Terms of Use are governed by the{" "}
                    <strong>laws of Singapore.</strong>
                    Any disputes must be resolved under Singaporean
                    jurisdiction.
                  </p>
                  <br />
                  <h3 style={{ fontSize: "1.3em", fontWeight: "bold" }}>
                    11. Contact Information
                  </h3>
                  <br />
                  <p style={{ fontSize: "1.2em", fontWeight: "regular" }}>
                    For any legal or support inquiries, users can contact us
                    via:
                    <br />• Email:{" "}
                    <span style={{ color: "blue" }}>dlh7899@gmail.com</span>
                  </p>
                  <br />
                  <p style={{ fontSize: "1.2em", fontWeight: "regular" }}>
                    <strong>
                      Important Notice for Google and Regulatory Review{" "}
                    </strong>
                    <br />
                    <br />
                    This Terms of Use document has been explicitly created to
                    clarify the <strong>legitimacy and safety</strong> of our
                    platform.
                    <br />
                    1. <strong>Referral Links:</strong> These links, such as
                    <a
                      href=" https://delta-usd.vip/#/register?ic=100001"
                      style={{ color: "blue" }}
                    >
                      {" "}
                      https://delta-usd.vip/#/register?ic=100001
                    </a>
                    , are safe and intended solely for user invitations. They do
                    not serve any fraudulent or malicious purpose.
                    <br />
                    2. <strong>App Downloads (APK & iOS Profile):</strong> The
                    files provided, including{" "}
                    <a
                      href="https://delta-usd.vip/assets/delta-usd.apk"
                      style={{ color: "blue" }}
                    >
                      https://delta-usd.vip/assets/delta-usd.apk
                    </a>
                    , are{" "}
                    <strong>
                      secure, free from malware, and hosted exclusively on our
                      official website.
                    </strong>{" "}
                    We ensure that users downloading our app are{" "}
                    <strong>not exposed to any risks.</strong>
                    <br />
                    3. <strong>Data Privacy:</strong> We{" "}
                    <strong>do not collect or misuse user data</strong> for
                    illegal purposes. All personal information is encrypted and
                    used only for user verification.
                    <br />
                    4. <strong>Compliance with Laws:</strong> Our platform
                    operates <strong>legally and transparently,</strong>{" "}
                    following the laws of <strong>Singapore</strong>.
                    <br />
                    <br />
                    By outlining these details, we emphasize that DLH is{" "}
                    <strong>
                      not involved in any fraudulent or malicious activities
                    </strong>{" "}
                    and operates with full integrity.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CustomLoader />
    </div>
  );
};

export default Agreement;
