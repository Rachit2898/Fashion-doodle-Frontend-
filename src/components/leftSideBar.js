import React from "react";

function SideBar() {
  return (
    <div>
      <div class="flex items-center px-6 ">
        <div class="w-16 py-8">
          <img
            src={require("../images/feed.png")}
            alt="Search Icon"
            class="w-6"
          />
        </div>
        <div class="w-24">
          <p class="text-[15px]">Feed</p>
        </div>
      </div>
      <div class="flex items-center px-6 ">
        <div class="w-16 py-8">
          <img
            src={require("../images/explore.png")}
            alt="Search Icon"
            class="w-6"
          />
        </div>
        <div class="w-24">
          <p class="text-[15px]">Explore</p>
        </div>
      </div>
      <div class="flex items-center px-6 ">
        <div class="w-16 py-8">
          <img
            src={require("../images/multi-user.png")}
            alt="Search Icon"
            class="w-6"
          />
        </div>
        <div class="w-24">
          <p class="text-[15px]">Trending</p>
        </div>
      </div>
      <div class="flex items-center px-6 ">
        <div class="w-16 py-8">
          <img
            src={require("../images/service-bell.png")}
            alt="Search Icon"
            class="w-6"
          />
        </div>
        <div class="w-24">
          <p class="text-[15px]">Notifications</p>
        </div>
      </div>
      <div class="flex items-center px-6 ">
        <div class="w-16 py-8">
          <img
            src={require("../images/envelope.png")}
            alt="Search Icon"
            class="w-6"
          />
        </div>
        <div class="w-24">
          <p class="text-[15px]">Direct</p>
        </div>
      </div>
      <div class="flex items-center px-6 ">
        <div class="w-16 py-8">
          <img
            src={require("../images/wishlist.png")}
            alt="Search Icon"
            class="w-6"
          />
        </div>
        <div class="w-24">
          <p class="text-[15px]">My Wishlist</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
