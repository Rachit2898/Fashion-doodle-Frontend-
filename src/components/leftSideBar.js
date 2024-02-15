import React from "react";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        class="flex items-center px-6   0 w-full"
        onClick={() => {
          navigate("/designers");
        }}
      >
        <div class="w-16 py-8">
          <img
            src={require("../images/feed.png")}
            alt="Search Icon"
            class="w-6"
          />
        </div>
        <div class="w-24 justify-start flex">
          <p class="text-[15px]">Feed</p>
        </div>
      </button>
      <button
        class="flex items-center px-6   0 w-full"
        onClick={() => {
          navigate("/explore");
        }}
      >
        <div class="w-16 py-8">
          <img
            src={require("../images/explore.png")}
            alt="Search Icon"
            class="w-6"
          />
        </div>
        <div class="w-24 justify-start flex">
          <p class="text-[15px]">Explore</p>
        </div>
      </button>
      <button
        class="flex items-center px-6   0 w-full"
        onClick={() => {
          navigate("/trending");
        }}
      >
        <div class="w-16 py-8 ">
          <img
            src={require("../images/multi-user.png")}
            alt="Search Icon"
            class="w-6"
          />
        </div>
        <div class="w-24 justify-start flex">
          <p class="text-[15px]">Trending</p>
        </div>
      </button>
      <button
        class="flex items-center px-6  w-full  "
        onClick={() => {
          navigate("/notifications");
        }}
      >
        <div class="w-16 py-8 ">
          <img
            src={require("../images/service-bell.png")}
            alt="Search Icon"
            class="w-6"
          />
        </div>
        <div class="w-24 justify-start flex">
          <p class="text-[15px]">Notifications</p>
        </div>
      </button>
      <button
        class="flex items-center px-6  w-full  "
        onClick={() => {
          navigate("/direct");
        }}
      >
        <div class="w-16 py-8">
          <img
            src={require("../images/envelope.png")}
            alt="Search Icon"
            class="w-6"
          />
        </div>
        <div class="w-24 justify-start flex">
          <p class="text-[15px]">Direct</p>
        </div>
      </button>
      <button
        class="flex items-center px-6  w-full  "
        onClick={() => {
          navigate("/notifications");
        }}
      >
        <div class="w-16 py-8">
          <img
            src={require("../images/wishlist.png")}
            alt="Search Icon"
            class="w-6"
          />
        </div>
        <div class="w-24 justify-start flex">
          <p class="text-[15px]">My Wishlist</p>
        </div>
      </button>
    </div>
  );
}

export default SideBar;
