import React from "react";

import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/getStarted");
  };

  return (
    <div class="bg-gradient-to-r lg:h-full md:h-screen  from-[rgba(219,0,158,0.11)] to- lg:py-[5%] lg:pb-[5%] lg:pl-[9%] lg:pr-[20%] p-5">
      <div class=" rounded-lg bg-white  ">
        <div class="justify-between p-5  lg:p-0 bg-[#B9B4E9]">
          <div class="lg:pl-[60px] lg:pt-[50px]   ">
            <div class=" flex flex-col ">
              <p class="text-black text-xs mt-2 font-normal">
                This Privacy Policy outlines the practices of our website with
                regards to the collection, use, and protection of personal
                information. By accessing or using our website, you agree to the
                terms of this Privacy Policy.
              </p>
              <p class="text-black text-xs mt-2 font-bold">
                1.Information Collected
              </p>
              <p class="text-black text-xs mt-2 font-normal">
                a. User-Provided Information: When you create an account or use
                our website, you may provide us with personal information such
                as your name, email address, username, and profile information.{" "}
                <br />
                b.Automatically Collected Information: We may collect certain
                information automatically when you use our website, including
                your IP address, browser type, device information, and usage
                data.
                <br /> c. Cookies and Similar Technologies: We use cookies and
                similar technologies to enhance your experience and analyze
                usage patterns. You may configure your browser settings to
                reject cookies, but this may limit certain functionalities.
              </p>
              <p class="text-black text-xs mt-2 font-bold">
                2.Use of Information
              </p>
              <p class="text-black text-xs mt-2 font-normal">
                a. We may use the information collected to provide and improve
                our website, personalize your experience, communicate with you,
                and manage your account. <br />
                b. We may use your email address to send you notifications,
                updates, and relevant content. <br />
                c. We may analyze user data, trends, and preferences to improve
                our service, develop new features, and conduct research.
              </p>
              <p class="text-black text-xs mt-2 font-bold">
                3.Sharing of Information
              </p>
              <p class="text-black text-xs mt-2 font-normal">
                a. We may share your personal information with third-party
                service providers who assist with the operation of our website,
                such as hosting, data analysis, and customer support. <br />
                b. We may disclose information if required by law or as
                necessary to protect our legal rights, comply with legal
                processes, or respond to valid requests from public authorities.
                <br /> c.We may share de-identified or aggregated data that
                cannot be used to identify you with third parties for various
                purposes, including analytics, research, and marketing.
              </p>
              <p class="text-black text-xs mt-2 font-bold">4.Data Security</p>
              <p class="text-black text-xs mt-2 font-normal">
                a. We implement reasonable security measures to protect your
                personal information from unauthorized access, disclosure,
                alteration, or destruction. <br />
                b. However, no method of transmission over the internet or
                electronic storage is completely secure. Therefore, we cannot
                guarantee the absolute security of your information.
              </p>
              <p class="text-black text-xs mt-2 font-bold">
                5.Third-Party Links and Services
              </p>
              <p class="text-black text-xs mt-2 font-normal">
                Our website may contain links to third-party websites or
                services. We are not responsible for the privacy practices or
                content of those websites. We encourage you to review the
                privacy policies of any third-party websites or services that
                you visit.
              </p>
              <p class="text-black text-xs mt-2 font-bold">
                6.Children's Privacy
              </p>
              <p class="text-black text-xs mt-2 font-normal">
                Our website is not directed to individuals under the age of 18.
                We do not knowingly collect personal information from children.
                If we become aware that we have inadvertently collected
                information from a child under 18, we will take reasonable steps
                to delete the information as soon as possible.
              </p>
              <p class="text-black text-xs mt-2 font-bold">
                7.Changes to the Privacy Policy
              </p>
              <p class="text-black text-xs mt-2 font-normal">
                We may update this Privacy Policy from time to time. We will
                notify you of any significant changes by posting the updated
                Privacy Policy on our website. Your continued use of our website
                after any modifications indicates your acceptance of the revised
                Privacy Policy.
              </p>

              <p class="text-black text-xs mt-2 font-bold">8.Contact Us</p>
              <p class="text-black text-xs mt-2 font-normal">
                If you have any questions or concerns regarding these Terms,
                please contact us through the provided channels on our website.
              </p>
            </div>

            <div class=" h-10  flex items-center justify-center gap-2 mx-auto ">
              <button
                onClick={() => navigate("/terms")}
                class="text-black font-poppins text-xs underline leading-normal"
              >
                Terms & conditions
              </button>
              <text>&</text>
              <button
                onClick={() => navigate("/privacy")}
                class="text-black font-poppins text-xs underline leading-normal"
              >
                Privacy & Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
