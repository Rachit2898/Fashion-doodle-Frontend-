import React, { useState, useRef } from "react";
import Search from "../images/search.png";
import Modal from "../components/post";
import { storage } from "../firebaseFile";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

function Selection() {
  const [fileInputVisible, setFileInputVisible] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setFileInputVisible(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const storageRef = ref(storage, `files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgresspercent(progress);
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL);
            setImgUrl(downloadURL);
          });
        }
      );
    }
  };

  const openPostHandler = () => {
    setIsModalOpen(true);
  };
  return (
    <div class="bg-gradient-to-r lg:h-full md:h-screen from-[rgba(0,131,176,0.37)] to-[rgba(219,0,158,0.11)] lg:py-[5%] lg:pl-[9%] lg:pr-[15%] p-5">
      <div class=" bg-white  relative flex">
        <div>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
        <div class="w-1/4 h-full bg-[#F7F7F7]">
          <div class=" flex items-center justify-center mt-20">
            <div className=" bg-[#FB1978] border-[#FB1978] w-28 rounded-full">
              <img
                src={require("../images/Ellipse.jpg")}
                alt="Search Icon"
                className="h-28 rounded-full    p-[3px]"
              />
            </div>
          </div>
          <div class="flex items-start justify-center py-10">
            <p class="text-[13px] font-[400]">Dwaye Jhonson</p>
          </div>
          <div class="flex items-start justify-center gap-3">
            <div class="flex items-center flex-col">
              <p class="text-[12px] font-[400]">Followers</p>
              <p class="text-[10px] font-[400]">700</p>
            </div>
            <div class="flex items-center flex-col">
              <p class="text-[12px] font-[400]">Posts</p>
              <p class="text-[10px] font-[400]">800</p>
            </div>
            <div class="flex items-center flex-col">
              <p class="text-[12px] font-[400]">Following</p>
              <p class="text-[10px] font-[400]">725</p>
            </div>
          </div>
          <div class="mt-10">
            <div class="flex items-center px-6 ">
              <div class="w-16 py-4">
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
              <div class="w-16 py-4">
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
              <div class="w-16 py-4">
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
              <div class="w-16 py-4">
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
              <div class="w-16 py-4">
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
              <div class="w-16 py-4">
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
        </div>
        <div class="w-full flex flex-col justify-around">
          <div class="w-full flex justify-around ">
            <div>
              <div class="flex items-center relative ">
                <div class="w-[100%]">
                  <img
                    src={Search}
                    alt="Search Icon"
                    class="absolute  w-5 ml-3 top-1/2 transform -translate-y-1/2"
                  />
                  <input
                    placeholder="Search"
                    class="border border-solid w-[100%] h-10 bg-[#EAE9E9] pl-12 py-2 rounded-md focus:outline-1"
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                // onClick={() => fileInputRef.current.click()}
                onClick={() => openPostHandler()}
                className="flex text-[#fff] bg-[#4600DB82] h-10 rounded px-10 justify-around items-center"
              >
                <div className="w-10">
                  <p className="font-[500] text-[20px]">+</p>
                </div>
                <div>
                  <p className="font-[300] text-[15px]">Create New Post</p>
                </div>
              </button>

              <input
                onChange={handleFileChange}
                multiple={false}
                ref={fileInputRef}
                type="file"
                hidden
              />
            </div>
            <div class=" items-center h-10 flex-row flex justify-center font-[Poppins]  gap-10  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 42 32"
                fill="none"
              >
                <g clip-path="url(#clip0_25_596)">
                  <path
                    d="M9.25714 28.9767L15.4216 24.6589C15.6382 24.4936 15.9298 24.4001 16.2344 24.3985H38.552C38.728 24.3986 38.897 24.3455 39.0231 24.2506C39.1491 24.1557 39.2221 24.0266 39.2265 23.8907V2.3178C39.2221 2.18194 39.1491 2.05278 39.0231 1.9579C38.897 1.86303 38.728 1.80994 38.552 1.80999H3.55802C3.38655 1.81338 3.22359 1.86838 3.10389 1.96325C2.98419 2.05812 2.91723 2.18535 2.91729 2.3178V23.8959C2.91726 23.9637 2.93481 24.0308 2.96891 24.0933C3.003 24.1558 3.05295 24.2124 3.11581 24.2597C3.17867 24.307 3.25317 24.3441 3.33491 24.3689C3.41665 24.3936 3.50398 24.4055 3.59174 24.4037H8.08697C8.39763 24.4044 8.69526 24.5002 8.91461 24.6701C9.13397 24.84 9.25715 25.0701 9.25714 25.31V28.9767ZM9.6517 17.2579C9.33867 17.2579 9.03846 17.3539 8.81711 17.5249C8.59576 17.6958 8.47141 17.9276 8.47141 18.1694C8.47141 18.4111 8.59576 18.6429 8.81711 18.8139C9.03846 18.9848 9.33867 19.0808 9.6517 19.0808H23.4881C23.8011 19.0808 24.1014 18.9848 24.3227 18.8139C24.544 18.6429 24.6684 18.4111 24.6684 18.1694C24.6684 17.9276 24.544 17.6958 24.3227 17.5249C24.1014 17.3539 23.8011 17.2579 23.4881 17.2579H9.6517ZM9.6517 6.8777C9.33867 6.8777 9.03846 6.97372 8.81711 7.14466C8.59576 7.31559 8.47141 7.54742 8.47141 7.78915C8.47141 8.03089 8.59576 8.26272 8.81711 8.43365C9.03846 8.60458 9.33867 8.70061 9.6517 8.70061H32.4887C32.6479 8.70721 32.8071 8.68869 32.9567 8.6462C33.1063 8.6037 33.2431 8.53811 33.3588 8.45343C33.4745 8.36875 33.5667 8.26675 33.6297 8.15366C33.6926 8.04057 33.7251 7.91877 33.7251 7.79566C33.7251 7.67256 33.6926 7.55076 33.6297 7.43767C33.5667 7.32458 33.4745 7.22258 33.3588 7.1379C33.2431 7.05322 33.1063 6.98763 32.9567 6.94514C32.8071 6.90264 32.6479 6.88412 32.4887 6.89072L9.6517 6.8777ZM9.6517 12.0678C9.35177 12.0802 9.06944 12.181 8.86282 12.3493C8.6562 12.5177 8.54104 12.7408 8.54104 12.9727C8.54104 13.2047 8.6562 13.4278 8.86282 13.5962C9.06944 13.7645 9.35177 13.8653 9.6517 13.8777H30.118C30.4179 13.8653 30.7002 13.7645 30.9069 13.5962C31.1135 13.4278 31.2286 13.2047 31.2286 12.9727C31.2286 12.7408 31.1135 12.5177 30.9069 12.3493C30.7002 12.181 30.4179 12.0802 30.118 12.0678H9.6517ZM16.6997 26.2136L8.94353 31.7006C8.78472 31.8361 8.57659 31.9313 8.34644 31.9738C8.1163 32.0164 7.87488 32.0041 7.65389 31.9388C7.43289 31.8735 7.24263 31.7581 7.10808 31.6077C6.97353 31.4574 6.90098 31.2792 6.89993 31.0964V26.2136H3.55802C2.76229 26.2129 1.99942 25.9685 1.43675 25.534C0.87409 25.0995 0.557594 24.5104 0.556702 23.8959L0.556702 2.3178C0.557594 1.70332 0.87409 1.1142 1.43675 0.679694C1.99942 0.245189 2.76229 0.000780822 3.55802 9.15527e-05L38.552 9.15527e-05C39.3478 0.00146438 40.1105 0.246009 40.6735 0.680292C41.2365 1.11458 41.554 1.70329 41.5567 2.3178V23.8959C41.554 24.5104 41.2365 25.0992 40.6735 25.5334C40.1105 25.9677 39.3478 26.2123 38.552 26.2136H16.6997Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_25_596">
                    <rect
                      width="41"
                      height="32"
                      fill="white"
                      transform="translate(0.556702 9.15527e-05)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 45 44"
                fill="none"
              >
                <g clip-path="url(#clip0_25_598)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.9277 0.00012207C27.2789 0.00012207 31.5324 1.2904 35.1503 3.70779C38.7682 6.12518 41.588 9.56111 43.2531 13.5811C44.9182 17.6011 45.3539 22.0245 44.505 26.2921C43.6561 30.5597 41.5608 34.4797 38.4841 37.5565C35.4073 40.6332 31.4873 42.7285 27.2197 43.5774C22.9521 44.4263 18.5287 43.9906 14.5087 42.3255C10.4887 40.6603 7.05279 37.8405 4.6354 34.2227C2.21801 30.6048 0.927734 26.3513 0.927734 22.0001C0.927734 16.1654 3.24558 10.5696 7.37139 6.44377C11.4972 2.31797 17.093 0.00012207 22.9277 0.00012207Z"
                    fill="#33A867"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.7083 20.6397H16.4896C16.696 20.6406 16.8936 20.7233 17.0392 20.8696C17.1849 21.0158 17.2666 21.2138 17.2666 21.4203V31.7865C17.2657 31.9926 17.1836 32.1901 17.0382 32.3361C16.8928 32.4822 16.6957 32.5652 16.4896 32.5671H12.7083C12.5016 32.5661 12.3036 32.4836 12.1574 32.3374C12.0112 32.1912 11.9287 31.9932 11.9277 31.7865V21.4203C11.9287 21.2135 12.0112 21.0155 12.1574 20.8693C12.3036 20.7231 12.5016 20.6406 12.7083 20.6397ZM22.627 12.8659C23.0352 10.7819 26.444 12.7012 26.6696 16.0563C26.72 17.249 26.6225 18.4433 26.3796 19.612H31.2529C33.276 19.6943 35.0449 21.1445 33.7952 23.5257C34.0817 24.5641 34.1247 25.7816 33.3512 26.265C33.4479 27.9014 32.9932 28.9183 32.1445 29.7204C32.1284 30.4673 31.9079 31.1954 31.5072 31.8259C30.8519 32.7497 30.3219 32.542 29.2907 32.542H21.055C19.7516 32.542 19.0426 32.1839 18.1904 31.1097V21.9323C20.6647 21.277 21.9681 17.9219 22.627 15.7197V12.8552V12.8659Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_25_598">
                    <rect
                      width="44"
                      height="44"
                      fill="white"
                      transform="translate(0.927734 0.00012207)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 42 42"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M41.7668 20.9995C41.7668 26.2499 39.793 31.0393 36.5468 34.6661C32.7932 38.8601 27.3382 41.4995 21.2668 41.4995C15.1954 41.4995 9.74041 38.8601 5.98672 34.6661C2.74062 31.0393 0.766785 26.2499 0.766785 20.9995C0.766785 9.67761 9.94495 0.499451 21.2668 0.499451C32.5886 0.499451 41.7668 9.67761 41.7668 20.9995ZM21.2667 5.23022C17.4928 5.23022 14.4334 8.28961 14.4334 12.0636C14.4334 15.8375 17.4928 18.8969 21.2667 18.8969C25.0406 18.8969 28.1 15.8375 28.1 12.0636C28.1 8.28961 25.0406 5.23022 21.2667 5.23022ZM11.4859 24.8284C10.7687 25.6237 10.2011 26.6143 9.0657 28.5954L8.8887 28.9043L8.88869 28.9043C8.6587 29.3056 8.5437 29.5063 8.49416 29.7279C8.42285 30.0469 8.47037 30.4342 8.6167 30.7265C8.71834 30.9296 8.86199 31.0793 9.14931 31.3789C12.3531 34.719 16.3725 36.7687 21.2667 36.7687C26.1609 36.7687 30.1803 34.719 33.3841 31.3789C33.6714 31.0793 33.8151 30.9296 33.9167 30.7265C34.063 30.4342 34.1105 30.0469 34.0392 29.7279C33.9897 29.5063 33.8747 29.3056 33.6447 28.9044L33.6447 28.9043L33.4677 28.5954C32.3323 26.6143 31.7647 25.6237 31.0475 24.8284C29.644 23.2719 27.7868 22.1957 25.7384 21.7519C24.6918 21.5251 23.5501 21.5251 21.2667 21.5251C18.9833 21.5251 17.8416 21.5251 16.795 21.7519C14.7466 22.1957 12.8894 23.2719 11.4859 24.8284Z"
                  fill="#292556"
                />
              </svg>
            </div>
          </div>
          <div class="flex w-full justify-between  pl-14  ">
            <div class="w-3/4">
              <div class=" flex justify-between ">
                <div>
                  <p class="text-[15px] font-[300]">Featured Posts</p>
                </div>
                <div class="bg-[#EAE9E9] w-28 flex items-center justify-center rounded-md h-7">
                  <p class="font-[275]  text-[12px] ">Popular Posts</p>
                </div>
              </div>
              <div class="mt-10 flex justify-center gap-16">
                <img
                  src={require("../images/rectangle1.png")}
                  alt="Search Icon"
                  class="h-32"
                />
                <img
                  src={require("../images/rectangle2.png")}
                  alt="Search Icon"
                  class="h-32"
                />
                <img
                  src={require("../images/rectangle3.png")}
                  alt="Search Icon"
                  class="h-32"
                />
                <img
                  src={require("../images/rectangle1.png")}
                  alt="Search Icon"
                  class="h-32"
                />
              </div>
              <div class=" flex justify-between mt-16">
                <div>
                  <p class="text-[15px] font-[300]">Latest Posts</p>
                </div>
              </div>
              <div class="mt-10 flex justify-center gap-16">
                <img
                  src={require("../images/rectangle1.png")}
                  alt="Search Icon"
                  class="h-36"
                />
                <img
                  src={require("../images/rectangle2.png")}
                  alt="Search Icon"
                  class="h-36"
                />
                <img
                  src={require("../images/rectangle3.png")}
                  alt="Search Icon"
                  class="h-36"
                />
              </div>
            </div>
            <div class="px-5 w-1/4">
              <img
                src={require("../images/rectangle4.png")}
                alt="Search Icon"
                class="h-64"
              />
              <div class="flex items-start justify-center py-2">
                <p class="text-[13px] font-[400]">Dwayne Johnson</p>
              </div>
              <div class="flex flex-row justify-between">
                <div class="flex">
                  <p class="text-[10px] font-[350]">800 Photos</p>
                </div>
                <div class="flex">
                  <p class="text-[10px] font-[350]">700 Followers</p>
                </div>
              </div>

              <div class="flex py-5">
                <p class="text-[10px] font-[350]">
                  vchsavjhvchjsavhcasvkjbcjak asgcghsajhvjhcvjkabckjasbkchas
                  fcghscahgvcjhasvjhcasvca vghsavcjvajsvcjagvbck
                  ashjkchahbcahlkfhalhfklhslvnlsn gssb.<b>Read more.</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Selection;
