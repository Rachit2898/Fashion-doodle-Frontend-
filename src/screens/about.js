import React from "react";

import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/getStarted");
  };

  return (
    <div class="bg-gradient-to-r lg:h-screen md:h-screen  from-[rgba(219,0,158,0.11)] to- lg:py-[5%] lg:pb-[5%] lg:pl-[9%] lg:pr-[20%] p-5">
      <div class=" rounded-lg bg-white  ">
        <div class="justify-between p-5  lg:p-0 bg-[#B9B4E9]">
          <div class="lg:pl-[60px] lg:pt-[50px]   ">
            <div class=" flex flex-col ">
              <p class="text-black text-xs mt-2 font-normal">
                Welcome to Drodel Fashion! We are a platform dedicated to
                connecting and empowering fashion designers, models,
                enthusiasts, and professionals in India.
              </p>

              <p class="text-black text-xs mt-2 font-normal">
                Our mission is to foster a vibrant and supportive community
                where fashion designers can showcase their talent, exchange
                ideas, collaborate on projects, and stay up-to-date with the
                latest industry trends. We believe in the power of collaboration
                and aim to create a space where designers can network, learn,
                and grow together.
              </p>

              <p class="text-black text-xs mt-3 font-normal">
                Whether you are an established fashion designer, an aspiring
                designer, or someone who simply appreciates the art of fashion,
                our community is the perfect place for you. Here, you can
                showcase your designs, receive feedback, and gain inspiration
                from fellow members.
              </p>
              <p class="text-black text-xs mt-3 font-normal">
                At the Drodel Fashion, you will find a rich array of resources,
                including articles, interviews, and tutorials, covering a wide
                range of topics such as design techniques, fabric selection,
                sustainable fashion, and industry news. We aim to provide
                valuable insights and knowledge to help you stay informed and
                navigate the dynamic world of fashion.
              </p>
              <p class="text-black text-xs mt-3 font-normal">
                Additionally, we regularly organize contests, workshops, and
                events to provide opportunities for designers to showcase their
                skills and connect with industry professionals. Through these
                initiatives, we strive to create a supportive and inclusive
                environment that celebrates the diversity and creativity of
                Indian fashion.
              </p>
              <p class="text-black text-xs mt-3 font-normal">
                We value the unique perspectives and contributions of every
                member and promote a culture of respect and collaboration. We
                encourage constructive discussions, sharing of ideas, and
                creating meaningful connections within our community.
              </p>
              <p class="text-black text-xs mt-3 font-normal">
                Join us today and become a part of the vibrant Drodel Fashion
                community. Together, let's inspire, innovate, and shape the
                future of fashion in India.
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
