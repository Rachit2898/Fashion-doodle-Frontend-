import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/modal";
import LeftSideBar from "../components/leftSideBar";
import Search from "../images/search.png";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import {
  getPostById,
  getAllPosts,
  likePost,
  incrementLikes,
  addCommentToPost,
  getCommentsById,
} from "../redux/features/post";
import { Provider, useDispatch, useSelector } from "react-redux";
import BottomBar from "../components/bottomBar";
import { Emoji } from "emoji-mart";

export default function DesignersTab() {
  const navigate = useNavigate();
  const [currentPostId, setCurrentPostId] = useState(null);
  const [showComments, setShowComments] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  const [comment, setComment] = useState("");
  const [id, setId] = useState(-1);
  const [show, setShow] = useState(false);
  const [commentId, setCommentId] = useState(-1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { postByIdData, allPostsData, getCommentsByIdData } = useSelector(
    (state) => ({
      ...state.post,
    })
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  function getTimeAgo(timestamp) {
    const now = new Date();
    const createdAt = new Date(timestamp);

    const timeDifferenceInSeconds = Math.floor((now - createdAt) / 1000);

    if (timeDifferenceInSeconds < 60) {
      return `${timeDifferenceInSeconds}s`;
    } else if (timeDifferenceInSeconds < 3600) {
      const minutes = Math.floor(timeDifferenceInSeconds / 60);
      return `${minutes}m`;
    } else if (timeDifferenceInSeconds < 86400) {
      const hours = Math.floor(timeDifferenceInSeconds / 3600);
      return `${hours}h`;
    } else {
      const days = Math.floor(timeDifferenceInSeconds / 86400);
      return `${days}d`;
    }
  }

  // Example usage:
  const timestamp = "2024-02-13T11:01:57.000Z";
  const formattedTimeAgo = getTimeAgo(timestamp);

  const likePostHandler = (id) => {
    dispatch(likePost({ userId: 6, postId: id }));
    dispatch(incrementLikes(id));
  };

  const emojisHandler = (emoji) => {
    setComment((prevComment) => prevComment + emoji.native);
  };

  const handleCommentType = (e, postId) => {
    setCurrentPostId(postId);
    setComment(e.target.value);
  };

  const handlePostComment = (postId) => {
    dispatch(
      addCommentToPost({
        content: comment,
        postId: postId,
        userId: 1,
      })
    );
    setComment("");
  };
  const commentsShowHandler = (id) => {
    dispatch(getCommentsById(id));
    setId(id);
    setShowComments((prev) => !prev);
  };

  console.log(getCommentsByIdData.Table);

  const openDeleteHandler = () => {};

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        <div>
          <Modal isOpen={isModalOpen} onClose={closeModal} id={commentId} />
        </div>
        <div class="flex   ">
          <div class="lg:w-1/4 mt-24 hidden sm:block lg:flex lg:flex-col  z-50">
            <LeftSideBar />
          </div>
          <div class="lg:w-1/2 sm:w-[100%] px-2 lg:px-0">
            <div class="mx-0 lg:mx-8">
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
            <div class="flex justify-between pt-4">
              <div>
                <div className=" bg-[#FB1978] border-[#FB1978] rounded-full">
                  <img
                    src={require("../images/Ellipse.jpg")}
                    alt="Search Icon"
                    className="h-12 rounded-full   p-[3px]"
                  />
                </div>
              </div>
              <div>
                <div className=" bg-[#FB1978] border-[#FB1978] rounded-full">
                  <img
                    src={require("../images/Ellipse.jpg")}
                    alt="Search Icon"
                    className="h-12 rounded-full   p-[3px]"
                  />
                </div>
                <div className="items-center flex justify-center">
                  <p class="text-[#000] text-[10px]">Jerry</p>
                </div>
              </div>
              <div>
                <div className=" bg-[#FB1978] border-[#FB1978] rounded-full">
                  <img
                    src={require("../images/Ellipse.jpg")}
                    alt="Search Icon"
                    className="h-12 rounded-full  p-[3px]"
                  />
                </div>
                <div className="items-center flex justify-center">
                  <p class="text-[#000] text-[10px]">Jerry</p>
                </div>
              </div>
              <div>
                <div className=" bg-[#FB1978] border-[#FB1978] rounded-full">
                  <img
                    src={require("../images/Ellipse.jpg")}
                    alt="Search Icon"
                    className="h-12 rounded-full   p-[3px]"
                  />
                </div>
                <div className="items-center flex justify-center">
                  <p class="text-[#000] text-[10px]">Jerry</p>
                </div>
              </div>
            </div>
            {allPostsData?.Posts?.map((item) => {
              return (
                <div class="bg-[#F8F5F5] py-3  mt-5">
                  {showEmojis === item.id && (
                    <div class="flex absolute z-50">
                      <Picker
                        data={data}
                        onEmojiSelect={(item) => {
                          emojisHandler(item);
                        }}
                      />
                    </div>
                  )}
                  <div class="flex justify-between px-8 ">
                    <div class="flex ">
                      <img
                        src={require("../images/Ellipse.jpg")}
                        alt="Search Icon"
                        className="h-8 rounded-full p-[3px]"
                      />
                      <div>
                        <p class="text-[12px] font-normal ">Jerry Mathews</p>
                        <p class="text-[10px] font-normal opacity-[0.6] ">
                          New York City,NY
                        </p>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <p class="text-[10px] font-normal opacity-[0.6] ">
                        {getTimeAgo(item.created_at)} ago
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center justify-center mt-2 px-16">
                    <img
                      src={item.imageUrls}
                      alt="Search Icon"
                      className="  p-[3px]"
                    />
                  </div>

                  <div class="flex gap-10 ml-5 ">
                    <button
                      onClick={() => {
                        likePostHandler(item.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none"
                      >
                        <rect
                          x="1.42773"
                          y="0.907593"
                          width="25"
                          height="25"
                          stroke="white"
                        />
                        <path
                          d="M7.92779 19.532V20.2931C7.92779 20.9136 7.42478 21.4166 6.80429 21.4166V21.4166C6.18379 21.4166 5.68079 20.9136 5.68079 20.2931V11.5341C5.68079 10.9136 6.18379 10.4106 6.80429 10.4106V10.4106C7.42478 10.4106 7.92779 10.9136 7.92779 11.5341V12.4293M7.92779 19.532L8.67716 20.2382C9.23034 20.7594 9.50692 21.0201 9.84583 21.2051C9.95403 21.2641 10.0789 21.3223 10.1937 21.367C10.5535 21.5073 10.9129 21.5491 11.6319 21.6326C12.6846 21.755 14.0056 21.8872 14.9278 21.9052C15.6213 21.9188 16.4378 21.873 17.2264 21.8048C18.5113 21.6935 19.1537 21.6379 19.7531 21.2741C19.9374 21.1623 20.1419 21.0035 20.2959 20.8526C20.7967 20.3619 21.0288 19.6986 21.4928 18.372L22.6872 14.9578C23.3122 13.1708 22.0683 11.2783 20.18 11.1433L18.1957 11.0015C17.5229 10.9534 17.0449 10.3259 17.1772 9.6644V9.6644C17.5548 8.34445 17.5539 7.20923 17.1744 6.01798C16.9509 5.31654 16.2669 4.90759 15.5456 4.90759C15.0405 4.90759 14.56 5.12385 14.3561 5.59644C13.9567 6.52225 13.2824 8.42595 12.2995 9.4312C10.8387 10.9252 9.76571 11.7936 7.92779 12.4293M7.92779 19.532V12.4293"
                          stroke="#292556"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p>{item.likesCount}</p>
                    </button>
                    <button onClick={() => commentsShowHandler(item.id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M7.42773 17.4076V17.4076C5.2186 17.4076 3.42773 15.6167 3.42773 13.4076V10.9076C3.42773 8.57296 3.42773 7.40564 3.90005 6.52201C4.27298 5.8243 4.84444 5.25284 5.54215 4.87991C6.42579 4.40759 7.5931 4.40759 9.92773 4.40759H14.9277C17.2624 4.40759 18.4297 4.40759 19.3133 4.87991C20.011 5.25284 20.5825 5.8243 20.9554 6.52201C21.4277 7.40564 21.4277 8.57296 21.4277 10.9076V10.9076C21.4277 13.2422 21.4277 14.4095 20.9554 15.2932C20.5825 15.9909 20.011 16.5623 19.3133 16.9353C18.4297 17.4076 17.2624 17.4076 14.9277 17.4076H12.4277"
                          stroke="#292556"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.42773 17.4076L6.42773 20.4076L12.4277 17.4076"
                          stroke="#292556"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p>{item.commentsCount}</p>
                    </button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M10.4277 10.4076L15.9277 7.40759M10.4277 14.4076L15.9277 17.4076M18.9277 21.4076V21.4076C20.5846 21.4076 21.9277 20.0644 21.9277 18.4076V18.4076C21.9277 16.7507 20.5846 15.4076 18.9277 15.4076V15.4076C17.2709 15.4076 15.9277 16.7507 15.9277 18.4076V18.4076C15.9277 20.0644 17.2709 21.4076 18.9277 21.4076ZM18.9277 9.40759V9.40759C20.5846 9.40759 21.9277 8.06445 21.9277 6.40759V6.40759C21.9277 4.75074 20.5846 3.40759 18.9277 3.40759V3.40759C17.2709 3.40759 15.9277 4.75074 15.9277 6.40759V6.40759C15.9277 8.06445 17.2709 9.40759 18.9277 9.40759ZM7.42773 15.9076V15.9076C9.36073 15.9076 10.9277 14.3406 10.9277 12.4076V12.4076C10.9277 10.4746 9.36073 8.90759 7.42773 8.90759V8.90759C5.49474 8.90759 3.92773 10.4746 3.92773 12.4076V12.4076C3.92773 14.3406 5.49474 15.9076 7.42773 15.9076Z"
                        stroke="#292556"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex ml-5">
                    <div className="w-8 h-8 rounded-full bg-[#B48E8E] ml-0 z-10"></div>

                    <div className="w-8 h-8 rounded-full bg-[#D9D9D9] ml-[-15px] z-20"></div>

                    <div className="w-8 h-8 rounded-full bg-yellow-500 ml-[-15px] z-30"></div>
                    <div class="items-start pl-5">
                      <p>Liked by dj dynamo and 500 others</p>
                    </div>
                  </div>
                  <div className="flex  bg-white m-5  flex-col  ">
                    <div className=" flex w-full flex-row  justify-between items-center rounded-t-lg border-b">
                      <button
                        onClick={() => setShowEmojis(item.id)}
                        class="ml-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                      <textarea
                        multiple
                        value={item.id === currentPostId ? comment : ""}
                        onChange={(e) => handleCommentType(e, item.id)}
                        onClick={() => {
                          setShowEmojis(null);
                        }}
                        type="text"
                        placeholder="Add a comment..."
                        className="border  h-10 flex items-center justify-center resize-none border-gray-300  p-2 w-5/6 border-none focus:outline-none focus:border-none rounded-l-md"
                      />
                      <button
                        onClick={() => handlePostComment(item.id)}
                        className=" text-white p-2 rounded-r-md"
                      >
                        <img
                          src={require("../images/post.png")}
                          alt="Search Icon"
                          className="h-5"
                        />
                      </button>
                    </div>
                    {showComments && id === item.id && (
                      <>
                        {getCommentsByIdData?.Table?.map((item) => {
                          return (
                            <div
                              className="flex px-4 my-2"
                              key={item.commentId}
                            >
                              <div className="mr-4">
                                <img
                                  src={require("../images/Ellipse.jpg")}
                                  className="w-10 h-10 rounded-full"
                                  alt="User Avatar"
                                />
                              </div>
                              <div className=" bg-[#f2f2f2] p-4 w-full rounded">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="font-semibold mr-2">
                                    Rachit
                                  </span>
                                  <div class="flex flex-col">
                                    <span className="text-gray-500 text-sm">
                                      {getTimeAgo(item.created_at)}
                                    </span>
                                  </div>
                                </div>
                                <div class="flex">
                                  <div class="flex w-[95%]">
                                    <p className="text-gray-700">
                                      {item.content}
                                    </p>
                                  </div>
                                  <button onClick={openModal}>
                                    <img
                                      src={require("../images/delete.png")}
                                      className="w-5 h-5 rounded-full"
                                      alt="User Avatar"
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div class="lg:w-1/4 hidden sm:block lg:flex lg:flex-col  ">
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
              <button onClick={() => navigate("/profile")}>
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
              </button>
            </div>
            <div class="bg-[#F8F5F5] mt-24 mx-4 py-5 px-6">
              <p class="font-[300]">Messages</p>
              <div class="flex items-center relative   mt-2">
                <div class="w-[100%]">
                  <img
                    src={Search}
                    alt="Search Icon"
                    class="absolute  w-5 ml-3 top-1/2 transform -translate-y-1/2"
                  />
                  <input
                    placeholder="Search"
                    class="border border-solid w-[100%] h-10 bg-[white] pl-12 py-2 rounded-md focus:outline-1"
                  />
                </div>
              </div>
              <div class="flex my-3 ">
                <img
                  src={require("../images/Ellipse.jpg")}
                  alt="Search Icon"
                  className="h-10 rounded-full p-[3px]"
                />
                <div>
                  <p class="text-[12px] font-normal ">Domnic</p>
                  <p class="text-[10px] font-normal opacity-[0.6] ">
                    Active 26m ago
                  </p>
                </div>
              </div>
              <div class="flex my-3 ">
                <img
                  src={require("../images/Ellipse.jpg")}
                  alt="Search Icon"
                  className="h-10 rounded-full p-[3px]"
                />
                <div>
                  <p class="text-[12px] font-normal ">Domnic</p>
                  <p class="text-[10px] font-normal opacity-[0.6] ">
                    Active 26m ago
                  </p>
                </div>
              </div>
              <div class="flex my-3 ">
                <img
                  src={require("../images/Ellipse.jpg")}
                  alt="Search Icon"
                  className="h-10 rounded-full p-[3px]"
                />
                <div>
                  <p class="text-[12px] font-normal ">Domnic</p>
                  <p class="text-[10px] font-normal opacity-[0.6] ">
                    Active 26m ago
                  </p>
                </div>
              </div>
              <div class="flex my-3 ">
                <img
                  src={require("../images/Ellipse.jpg")}
                  alt="Search Icon"
                  className="h-10 rounded-full p-[3px]"
                />
                <div>
                  <p class="text-[12px] font-normal ">Domnic</p>
                  <p class="text-[10px] font-normal opacity-[0.6] ">
                    Active 26m ago
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-[#F8F5F5] mt-4 mx-4 py-5 px-6">
              <p class="font-[300]">Suggestions</p>
              <div class="flex items-center relative   mt-2">
                <div class="w-[100%]">
                  <img
                    src={Search}
                    alt="Search Icon"
                    class="absolute  w-5 ml-3 top-1/2 transform -translate-y-1/2"
                  />
                  <input
                    placeholder="Search"
                    class="border border-solid w-[100%] h-10 bg-[white] pl-12 py-2 rounded-md focus:outline-1"
                  />
                </div>
              </div>
              <div class="flex my-3 justify-between ">
                <div class="flex">
                  <img
                    src={require("../images/Ellipse.jpg")}
                    alt="Search Icon"
                    className="h-10 rounded-full p-[3px]"
                  />
                  <div>
                    <p class="text-[12px] font-normal ">Domnic</p>
                    <p class="text-[10px] font-normal opacity-[0.6] ">
                      Active 26m ago
                    </p>
                  </div>
                </div>
                <div class="flex items-center ">
                  <img
                    src={require("../images/add-user.png")}
                    alt="Search Icon"
                    className=" h-4 rounded-full]"
                  />
                </div>
              </div>
              <div class="flex my-3 justify-between ">
                <div class="flex">
                  <img
                    src={require("../images/Ellipse.jpg")}
                    alt="Search Icon"
                    className="h-10 rounded-full p-[3px]"
                  />
                  <div>
                    <p class="text-[12px] font-normal ">Domnic</p>
                    <p class="text-[10px] font-normal opacity-[0.6] ">
                      Active 26m ago
                    </p>
                  </div>
                </div>
                <div class="flex items-center ">
                  <img
                    src={require("../images/add-user.png")}
                    alt="Search Icon"
                    className=" h-4 rounded-full]"
                  />
                </div>
              </div>
              <div class="flex my-3 justify-between ">
                <div class="flex">
                  <img
                    src={require("../images/Ellipse.jpg")}
                    alt="Search Icon"
                    className="h-10 rounded-full p-[3px]"
                  />
                  <div>
                    <p class="text-[12px] font-normal ">Domnic</p>
                    <p class="text-[10px] font-normal opacity-[0.6] ">
                      Active 26m ago
                    </p>
                  </div>
                </div>
                <div class="flex items-center ">
                  <img
                    src={require("../images/add-user.png")}
                    alt="Search Icon"
                    className=" h-4 rounded-full]"
                  />
                </div>
              </div>
              <div class="flex my-3 justify-between ">
                <div class="flex">
                  <img
                    src={require("../images/Ellipse.jpg")}
                    alt="Search Icon"
                    className="h-10 rounded-full p-[3px]"
                  />
                  <div>
                    <p class="text-[12px] font-normal ">Domnic</p>
                    <p class="text-[10px] font-normal opacity-[0.6] ">
                      Active 26m ago
                    </p>
                  </div>
                </div>
                <div class="flex items-center ">
                  <img
                    src={require("../images/add-user.png")}
                    alt="Search Icon"
                    className=" h-4 rounded-full]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <BottomBar />
        </div>
      </div>
    </div>
  );
}
