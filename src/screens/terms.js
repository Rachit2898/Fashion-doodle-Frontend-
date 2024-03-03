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
                Terms and Conditions (hereinafter referred to as "Terms") govern
                your use of our website. By accessing or using our website, you
                agree to comply with these Terms. If you do not agree with these
                Terms, please refrain from using our website.
              </p>
              <p class="text-black text-xs mt-2 font-bold">
                1.User Responsibilities
              </p>
              <p class="text-black text-xs mt-2 font-normal">
                a. You must be at least 18 years old to use our website. If you
                are under 18, you are not permitted to create an account or use
                our website. <br />
                b. You are responsible for maintaining the confidentiality of
                your account credentials and for all activities conducted
                through your account.
                <br /> c. You agree not to engage in any activities that are
                unlawful, offensive, harmful to others, or in violation of these
                Terms.
              </p>
              <p class="text-black text-xs mt-2 font-bold">
                2.Content Ownership
              </p>
              <p class="text-black text-xs mt-2 font-normal">
                a. You retain ownership of any content you submit or post on our
                website. However, by posting content, you grant us a
                non-exclusive, royalty-free, worldwide license to use,
                reproduce, modify, and distribute the content for the purposes
                of operating and promoting our website. <br />
                b. You represent and warrant that you own or have the necessary
                rights to grant the license mentioned above and that your
                content does not infringe upon the rights of any third party.
              </p>
              <p class="text-black text-xs mt-2 font-bold">
                3.Prohibited Content and Activities
              </p>
              <p class="text-black text-xs mt-2 font-normal">
                a. You are strictly prohibited from posting or sharing any
                content that is illegal, harmful, defamatory, obscene, or
                infringing upon the rights of others. <br />
                b. You may not engage in any activities that disrupt or
                interfere with the proper functioning of our website or impose
                unreasonable burdens on our infrastructure.
                <br /> c.You may not use our website for any commercial or
                fraudulent purposes without our explicit permission.
              </p>
              <p class="text-black text-xs mt-2 font-bold">
                4.Intellectual Property
              </p>
              <p class="text-black text-xs mt-2 font-normal">
                a. All intellectual property rights pertaining to our website,
                including trademarks, logos, and copyrights, belong to us or our
                licensors. <br />
                b. You are prohibited from using our intellectual property
                without our prior written consent.
              </p>
              <p class="text-black text-xs mt-2 font-bold">
                5.Third-Party Content and Links
              </p>
              <p class="text-black text-xs mt-2 font-normal">
                a. Our website may contain links to third-party websites or
                services. We do not endorse or warrant the accuracy,
                completeness, or legality of any content or services provided by
                these third parties. <br />
                b. We are not responsible for any damages or losses incurred as
                a result of your use of third-party content or services.
              </p>
              <p class="text-black text-xs mt-2 font-bold">
                6.Disclaimer of Warranty and Limitation of Liability
              </p>
              <p class="text-black text-xs mt-2 font-normal">
                a. Our website is provided on an "as is" and "as available"
                basis. We do not warrant the accuracy, adequacy, or reliability
                of the website or its content. <br />
                b. We shall not be liable for any direct, indirect, incidental,
                consequential, or punitive damages arising out of your use or
                inability to use our website.
              </p>
              <p class="text-black text-xs mt-2 font-bold">7.Indemnification</p>
              <p class="text-black text-xs mt-2 font-normal">
                You agree to indemnify and hold us harmless from any claims,
                damages, losses, or expenses (including legal fees) arising out
                of your breach of these Terms or your violation of any rights of
                a third party.
              </p>
              <p class="text-black text-xs mt-2 font-bold">
                8.Modification and Termination
              </p>
              <p class="text-black text-xs mt-2 font-normal">
                We reserve the right to modify or terminate our website at any
                time without notice. We also reserve the right to modify these
                Terms without prior notice. Your continued use of our website
                after any modifications indicates your acceptance of the updated
                Terms.
              </p>
              <p class="text-black text-xs mt-2 font-bold">
                9.Governing Law and Jurisdiction
              </p>
              <p class="text-black text-xs mt-2 font-normal">
                These Terms shall be governed by and construed in accordance
                with the laws of India. Any disputes arising out of these Terms
                shall be subject to the exclusive jurisdiction of the courts of
                India.
              </p>
              <p class="text-black text-xs mt-2 font-bold">
                10.Entire Agreement
              </p>
              <p class="text-black text-xs mt-2 font-normal">
                These Terms constitute the entire agreement between you and us
                regarding your use of our website and supersede any prior or
                contemporaneous agreements.
              </p>
              <p class="text-black text-xs mt-2 font-bold">11.Contact Us</p>
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
