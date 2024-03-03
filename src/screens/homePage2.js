import React from "react";

import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div class="bg-gradient-to-r lg:h-screen md:h-screen  from-[rgba(219,0,158,0.11)] to- lg:py-[5%] lg:pb-[5%] lg:pl-[9%] lg:pr-[20%] p-5">
      <div class=" rounded-lg bg-white  ">
        <div class="grid lg:grid-cols-2 justify-between p-5  lg:p-0 bg-[#B9B4E9]">
          <div class="lg:pl-[60px] lg:pt-[50px]w-[70%]  lg:w-[85%]   ">
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
            <div class=" flex flex-col ">
              <p class="text-black font-dm-sans text-2xl font-bold">
                Step 1: Choose Your Role
              </p>
              <p class="text-black font-dm-sans text-sm mt-2 font-normal">
                Are you a Model, User, or Designer? Select your role to get
                started.
              </p>
              <p class="text-black font-dm-sans text-2xl font-bold">
                Step 2: Explore and Connect
              </p>
              <p class="text-black font-dm-sans text-sm mt-2 font-normal">
                Discover a vibrant community of creators like you. Explore
                profiles, portfolios, and connect with others who share your
                interests.
              </p>
              <p class="text-black font-dm-sans text-2xl font-bold">
                Step 3: Showcase your Creations
              </p>
              <p class="text-black font-dm-sans text-sm mt-2 font-normal">
                Share your designs, outfits, or creations with the world. Post
                images, videos, or even virtual try-ons to inspire and
                collaborate with others.
              </p>
            </div>

            <div class=" h-10  mt-10 gap-5   flex my-5">
              <button
                onClick={handleLoginClick}
                class="text-black font-poppins  w-56 bg-[#fff] text-20 font-extrabold leading-normal"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signin")}
                class="text-black font-poppins w-56 bg-[#fff] text-20 font-extrabold leading-normal"
              >
                Signup
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
