import React from "react";

function BottomBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 z-50">
      <div className="flex items-center justify-around p-4">
        <div className="flex flex-col items-center">
          <img
            src={require("../images/feed.png")}
            alt="Feed Icon"
            className="w-6"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src={require("../images/explore.png")}
            alt="Explore Icon"
            className="w-6"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src={require("../images/multi-user.png")}
            alt="Trending Icon"
            className="w-6"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src={require("../images/service-bell.png")}
            alt="Notifications Icon"
            className="w-6"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src={require("../images/envelope.png")}
            alt="Direct Icon"
            className="w-6"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src={require("../images/wishlist.png")}
            alt="My Wishlist Icon"
            className="w-6"
          />
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
