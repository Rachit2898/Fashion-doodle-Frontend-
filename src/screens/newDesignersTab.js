import React from "react";

function NewDesignersTab() {
  return (
    <div class="bg-gradient-to-r lg:h-full md:h-screen from-[rgba(0,131,176,0.37)] to-[rgba(219,0,158,0.11)] lg:py-[5%] lg:pl-[9%] lg:pr-[15%] p-5">
      <div class="bg-gradient-to-t rounded-lg to-[#A0D5CB] from-[#6EB5D300] bg-white pb-[3%] relative">
        <div class="flex flex-col">
          <div class="relative">
            <img
              src={require("../images/cover.png")}
              alt="Search Icon"
              class="p-14"
            />
            <div class="absolute  left-24 transform -translate-y-28">
              <div class="flex justify-end items-center">
                <img
                  src={require("../images/user.jpg")}
                  class="rounded-full h-40"
                />
                <div class="w-full flex items-center">
                  <div class="ml-2">
                    <p class="text-2xl font-light">Designer Name</p>
                    <p class="text-sm font-light">723 Followers</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-end mr-20 -mt-10 gap-5">
              <div class="bg-[#4600DB82] rounded-full w-24 flex justify-center">
                <p class="text-white text-[15px] font-[300] px-5 py-1">
                  Follow
                </p>
              </div>
              <div class="bg-[#4600DB82] rounded-full w-24 flex justify-center">
                <p class="text-white text-[15px] font-[300] px-5 py-1">
                  Follow
                </p>
              </div>
              <div class="bg-[#3588FE] rounded-full w-30 flex justify-center">
                <p class="text-white text-[15px] font-[300] px-5 py-1">
                  New Design
                </p>
              </div>
            </div>
          </div>
          <div class="mt-14 flex justify-center gap-56">
            <div>
              <p>Followers</p>
            </div>
            <div>
              <p>Following</p>
            </div>
          </div>
          <div class="mt-10 flex justify-center gap-16">
            <img
              src={require("../images/shirt1.png")}
              alt="Search Icon"
              class="w-72 h-32"
            />
            <img
              src={require("../images/shirt2.png")}
              alt="Search Icon"
              class="w-72 h-32"
            />
            <img
              src={require("../images/shirt3.png")}
              alt="Search Icon"
              class="w-72 h-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewDesignersTab;
