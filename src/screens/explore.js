import React from "react";
import Search from "../images/search.png";
import SideBar from "../components/leftSideBar";
import RightSideBar from "../components/rightSideBar";
import BottomBar from "../components/bottomBar";
export default function DesignersTab() {
  return (
    <div class="bg-gradient-to-r lg:h-full md:h-screen from-[rgba(0,131,176,0.37)] to-[rgba(219,0,158,0.11)] lg:py-[5%] lg:pl-[9%] lg:pr-[15%] p-5">
      <div class="rounded-lg bg-white pb-[3%]">
        <div class="flex border-b-[2px] h-16 border-b-black rounded-tl-md rounded-tr-md">
          <div class="flex w-96 justify-between px-10">
            <label class="inline-flex items-center">
              <span class="ml-2 text-[#000] font-normal font-poppins">
                Designer
              </span>
            </label>

            <label class="inline-flex items-center">
              <span class="ml-2 text-[#000]">Model</span>
            </label>

            <label class="inline-flex items-center">
              <span class="ml-2 text-[#000]">Enjoyer</span>
            </label>
          </div>
        </div>

        <div class="flex   ">
          <div class="lg:w-1/4 mt-24 hidden sm:block lg:flex lg:flex-col  z-50">
            <SideBar />
          </div>
          <div class="lg:w-1/2 sm:w-[100%] px-2 lg:px-0">
            <div class="lg:mx-8 sm:mx-0">
              <div class="flex items-center relative   mt-2">
                <div class="w-[100%]">
                  <img
                    src={Search}
                    alt="Search Icon"
                    class="absolute  w-5 ml-3 top-1/2 transform -translate-y-1/2"
                  />
                  <input
                    placeholder="Search"
                    class="border border-solid w-[100%] h-7 bg-[#EAE9E9] pl-12 py-2 rounded-md focus:outline-1"
                  />
                </div>
              </div>
            </div>

            <div class="bg-[white]   lg:mt-5">
              <div class="flex flex-row gap-5">
                <div class="flex flex-col py-5 gap-5">
                  <div>
                    <img
                      src={require("../images/shoes.png")}
                      alt="Search Icon"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../images/shoes.png")}
                      alt="Search Icon"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../images/shoes.png")}
                      alt="Search Icon"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../images/shoes.png")}
                      alt="Search Icon"
                    />
                  </div>
                </div>
                <div class="flex flex-col py-5   gap-5">
                  <div class="flex flex-col w-full h-full gap-5">
                    <div className="flex flex-col w-full  h-40 relative">
                      <div
                        className="absolute inset-0 flex items-center justify-center bg-contain bg-no-repeat"
                        style={{
                          backgroundImage: `url(${require("../images/girl.png")})`,
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="flex justify-center items-center gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 39 39"
                            fill="none"
                          >
                            <path
                              d="M11.3422 35.9573C13.8047 37.1633 16.5733 37.8405 19.5001 37.8405C29.757 37.8405 38.0716 29.5259 38.0716 19.2691C38.0716 9.01235 29.757 0.697632 19.5001 0.697632C9.24343 0.697632 0.928711 9.01235 0.928711 19.2691C0.928711 23.0765 2.07448 26.6163 4.04003 29.5625M11.3422 35.9573L0.928711 37.8405L4.04003 29.5625M11.3422 35.9573L11.3573 35.9548M4.04003 29.5625L4.043 29.5548"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <p class="text-white">1000</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 40 41"
                            fill="none"
                          >
                            <path
                              d="M2.99102 17.309H9.70896V35.1951H2.99102C2.61513 35.1951 2.25464 35.0459 1.98884 34.7799C1.72305 34.5142 1.57373 34.1536 1.57373 33.7779V18.7262C1.57373 18.3504 1.72305 17.9899 1.98884 17.7241C2.25464 17.4583 2.61513 17.309 2.99102 17.309Z"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9.70898 17.3079L16.9088 5.79951C17.1878 5.34465 17.5799 4.96979 18.0468 4.71148C18.5138 4.45316 19.0397 4.32022 19.5733 4.32553C19.9936 4.31036 20.4126 4.37959 20.8056 4.52913C21.1987 4.67868 21.5577 4.90548 21.8616 5.19616C22.1655 5.48685 22.4081 5.83548 22.5749 6.22151C22.7418 6.60751 22.8295 7.02305 22.833 7.44356V15.6922H35.2769C35.7366 15.7071 36.188 15.8191 36.6014 16.021C37.0149 16.2229 37.3809 16.5099 37.6754 16.8634C37.97 17.2168 38.1863 17.6285 38.3103 18.0716C38.4343 18.5146 38.4632 18.9788 38.3949 19.4338L36.1272 34.0602C36.0306 34.8419 35.6514 35.5614 35.0617 36.0834C34.472 36.6054 33.7117 36.8939 32.924 36.8948H14.3293C13.4442 36.8982 12.5705 36.6945 11.7782 36.2994L9.73733 35.2791"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9.70898 17.3082V35.1945"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <p className="text-white">1000</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col w-full  h-40 relative">
                      <div
                        className="absolute inset-0 flex items-center justify-center bg-contain bg-no-repeat"
                        style={{
                          backgroundImage: `url(${require("../images/girl.png")})`,
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="flex justify-center items-center gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 39 39"
                            fill="none"
                          >
                            <path
                              d="M11.3422 35.9573C13.8047 37.1633 16.5733 37.8405 19.5001 37.8405C29.757 37.8405 38.0716 29.5259 38.0716 19.2691C38.0716 9.01235 29.757 0.697632 19.5001 0.697632C9.24343 0.697632 0.928711 9.01235 0.928711 19.2691C0.928711 23.0765 2.07448 26.6163 4.04003 29.5625M11.3422 35.9573L0.928711 37.8405L4.04003 29.5625M11.3422 35.9573L11.3573 35.9548M4.04003 29.5625L4.043 29.5548"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <p class="text-white">1000</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 40 41"
                            fill="none"
                          >
                            <path
                              d="M2.99102 17.309H9.70896V35.1951H2.99102C2.61513 35.1951 2.25464 35.0459 1.98884 34.7799C1.72305 34.5142 1.57373 34.1536 1.57373 33.7779V18.7262C1.57373 18.3504 1.72305 17.9899 1.98884 17.7241C2.25464 17.4583 2.61513 17.309 2.99102 17.309Z"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9.70898 17.3079L16.9088 5.79951C17.1878 5.34465 17.5799 4.96979 18.0468 4.71148C18.5138 4.45316 19.0397 4.32022 19.5733 4.32553C19.9936 4.31036 20.4126 4.37959 20.8056 4.52913C21.1987 4.67868 21.5577 4.90548 21.8616 5.19616C22.1655 5.48685 22.4081 5.83548 22.5749 6.22151C22.7418 6.60751 22.8295 7.02305 22.833 7.44356V15.6922H35.2769C35.7366 15.7071 36.188 15.8191 36.6014 16.021C37.0149 16.2229 37.3809 16.5099 37.6754 16.8634C37.97 17.2168 38.1863 17.6285 38.3103 18.0716C38.4343 18.5146 38.4632 18.9788 38.3949 19.4338L36.1272 34.0602C36.0306 34.8419 35.6514 35.5614 35.0617 36.0834C34.472 36.6054 33.7117 36.8939 32.924 36.8948H14.3293C13.4442 36.8982 12.5705 36.6945 11.7782 36.2994L9.73733 35.2791"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9.70898 17.3082V35.1945"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <p className="text-white">1000</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full  h-40 relative">
                      <div
                        className="absolute inset-0 flex items-center justify-center bg-contain bg-no-repeat"
                        style={{
                          backgroundImage: `url(${require("../images/shoes.png")})`,
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="flex justify-center items-center gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 39 39"
                            fill="none"
                          >
                            <path
                              d="M11.3422 35.9573C13.8047 37.1633 16.5733 37.8405 19.5001 37.8405C29.757 37.8405 38.0716 29.5259 38.0716 19.2691C38.0716 9.01235 29.757 0.697632 19.5001 0.697632C9.24343 0.697632 0.928711 9.01235 0.928711 19.2691C0.928711 23.0765 2.07448 26.6163 4.04003 29.5625M11.3422 35.9573L0.928711 37.8405L4.04003 29.5625M11.3422 35.9573L11.3573 35.9548M4.04003 29.5625L4.043 29.5548"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <p class="text-white">1000</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 40 41"
                            fill="none"
                          >
                            <path
                              d="M2.99102 17.309H9.70896V35.1951H2.99102C2.61513 35.1951 2.25464 35.0459 1.98884 34.7799C1.72305 34.5142 1.57373 34.1536 1.57373 33.7779V18.7262C1.57373 18.3504 1.72305 17.9899 1.98884 17.7241C2.25464 17.4583 2.61513 17.309 2.99102 17.309Z"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9.70898 17.3079L16.9088 5.79951C17.1878 5.34465 17.5799 4.96979 18.0468 4.71148C18.5138 4.45316 19.0397 4.32022 19.5733 4.32553C19.9936 4.31036 20.4126 4.37959 20.8056 4.52913C21.1987 4.67868 21.5577 4.90548 21.8616 5.19616C22.1655 5.48685 22.4081 5.83548 22.5749 6.22151C22.7418 6.60751 22.8295 7.02305 22.833 7.44356V15.6922H35.2769C35.7366 15.7071 36.188 15.8191 36.6014 16.021C37.0149 16.2229 37.3809 16.5099 37.6754 16.8634C37.97 17.2168 38.1863 17.6285 38.3103 18.0716C38.4343 18.5146 38.4632 18.9788 38.3949 19.4338L36.1272 34.0602C36.0306 34.8419 35.6514 35.5614 35.0617 36.0834C34.472 36.6054 33.7117 36.8939 32.924 36.8948H14.3293C13.4442 36.8982 12.5705 36.6945 11.7782 36.2994L9.73733 35.2791"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9.70898 17.3082V35.1945"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <p className="text-white">1000</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <img
                        src={require("../images/shoes.png")}
                        alt="Search Icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/4 hidden sm:block lg:flex lg:flex-col  ">
            <RightSideBar />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <BottomBar />
      </div>
    </div>
  );
}
