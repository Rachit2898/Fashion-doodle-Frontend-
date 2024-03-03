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
        <div class="grid lg:grid-cols-2 justify-between p-5  lg:p-0 bg-[#B9B4E9]">
          <div class="lg:pl-[60px] lg:pt-[50px] w-[70%]  lg:w-[85%]  ">
            <div>
              <p class="text-black font-dm-sans text-2xl font-bold">
                Droodle Fashion
              </p>
            </div>
            <div class="py-2">
              <p class="text-[#ffffff] font-poppins text-5xl font-medium leading-normal">
                Express your
              </p>
              <p class="text-[#000] font-poppins text-5xl font-medium leading-normal">
                inner self
              </p>
            </div>
            <div class=" flex ">
              <p class="text-black font-dm-sans text-xl mt-10 font-normal">
                We cherish the inner beauty of individuals with that dream we
                build a community to find epic personalities among individuals
              </p>
            </div>

            <div class=" h-10  mt-28 gap-5   flex my-5">
              <button
                onClick={() => navigate("/about")}
                class="text-black font-poppins  w-56 bg-[#fff] text-20 font-extrabold leading-normal"
              >
                About us
              </button>
              <button
                onClick={handleLoginClick}
                class="text-black font-poppins w-56 bg-[#fff] text-20 font-extrabold leading-normal"
              >
                Get started
              </button>
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
          <div class="flex  justify-end mt-5 lg:mt-0 bg-[#f9d7d7] ">
            <img
              src={require("../images/Logo.png")}
              class="lg:h-[83.7vh]  rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
