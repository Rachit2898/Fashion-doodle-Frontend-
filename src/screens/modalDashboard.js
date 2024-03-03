import React, { useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import {
  fetchMessages,
  addMessage,
  getAllUsers,
  addFollowing,
  getUserById,
  getFollowers,
  getFollowings,
  setUserProfileId,
} from "../redux/features/user";

import {
  getPostById,
  getAllPosts,
  likePost,
  incrementLikes,
  addCommentToPost,
  getCommentsById,
  deleteComment,
  deletePost,
  getPostsByUserId,
} from "../redux/features/post";
import { Provider, useDispatch, useSelector } from "react-redux";

function NewDesignersTab() {
  const dispatch = useDispatch();
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
    dispatch(
      likePost({
        data: { userId: localStorage.getItem("userId"), postId: id },
        token: signInData?.Table?.token || localStorage.getItem("token"),
      })
    );
    dispatch(incrementLikes(id));
  };

  const [currentPostId, setCurrentPostId] = useState(null);
  const [showComments, setShowComments] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  const [comment, setComment] = useState("");
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [id, setId] = useState(-1);
  const [postId, setPostId] = useState(-1);
  const [show, setShow] = useState(false);
  const [commentId, setCommentId] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { signInData, getUserByTokenData } = useSelector((state) => ({
    ...state.auth,
  }));
  const emojisHandler = (emoji) => {
    setComment((prevComment) => prevComment + emoji.native);
  };

  const { postByIdData, allPostsData, getCommentsByIdData, followingUserId } =
    useSelector((state) => ({
      ...state.post,
    }));

  const handleCommentType = (e, postId) => {
    setCurrentPostId(postId);
    setComment(e.target.value);
  };

  const openModal = (id) => {
    setCommentId(id);
    setIsModalOpen(true);
  };

  const handlePostComment = (postId) => {
    dispatch(
      addCommentToPost({
        data: {
          content: comment,
          postId: postId,
          userId: localStorage.getItem("userId"),
        },
        token: signInData?.Table?.token || localStorage.getItem("token"),
      })
    );
    setComment("");
    // sendMessage(comment);
  };

  const openPostModal = (id) => {
    setPostId(id);
    setCommentId("");
    setIsModalOpen(true);
  };

  const commentsShowHandler = (id) => {
    dispatch(
      getCommentsById({
        id: id,
        token: signInData?.Table?.token || localStorage.getItem("token"),
      })
    );
    setId(id);
    setShowComments((prev) => !prev);
  };
  const openPostModals = (id) => {
    dispatch(
      getPostById({
        id: id,
        token: signInData?.Table?.token || localStorage.getItem("token"),
      })
    );
    dispatch(
      getCommentsById({
        id: id,
        token: signInData?.Table?.token || localStorage.getItem("token"),
      })
    );
    setIsPostModalOpen(true);
  };
  const closePostModal = (id) => {
    setIsPostModalOpen(false);
  };

  return (
    <div class="lg:bg-gradient-to-r lg:h-full h-screen md:bg-white from-[rgba(0,131,176,0.37)] to-[rgba(219,0,158,0.11)] lg:py-[5%] lg:pl-[9%] lg:pr-[15%] lg:p-5">
      <div class="bg-gradient-to-t lg:rounded-lg to-[#A0D5CB]  bg-white from-[#6EB5D300] lg:pb-[3%] relative">
        <div class="flex flex-col ">
          <div class="relative">
            <div>
              <img
                src={
                  getUserByTokenData?.backGroundPic
                    ? getUserByTokenData?.backGroundPic
                    : "https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-116839.jpg?size=626&ext=jpg&ga=GA1.1.1259320201.1707409598&semt=ais"
                }
                alt="Search Icon"
                class="lg:p-14 lg:max-h-[600px] lg:min-h-[600px] w-full"
              />
            </div>
            <div class="absolute lg:left-24 left-5 lg:transform lg:-translate-y-28 -translate-y-14">
              <div class="flex lg:flex-row flex-col justify-end items-center">
                <img
                  src={
                    getUserByTokenData?.profilePicture
                      ? getUserByTokenData?.profilePicture
                      : "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.1259320201.1707409598&semt=ais"
                  }
                  class="rounded-full lg:w-72 h-40"
                />
                <div class="w-full flex flex-col lg:items-center">
                  <div class="ml-2">
                    <p class="text-xl lg:text-2xl font-light">
                      {getUserByTokenData?.fullName}
                    </p>
                    <p class="text-sm font-light hidden  md:block">
                      723 Followers
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:flex hidden md:block  items-center justify-end mr-20 -mt-10 gap-5">
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
        </div>

        <div class="mt-14  justify-center gap-56 lg:flex hidden  md:block">
          <div>
            <p>Followers</p>
          </div>
          <div>
            <p>Following</p>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <div class="lg:w-1/2 sm:w-[100%] px-2 lg:px-0 ">
            {allPostsData?.Posts?.slice()
              .sort((a, b) => b.id - a.id)
              .map((item) => {
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
                      <button
                        class="flex items-center"
                        onClick={() => openPostModal(item.id)}
                      >
                        <p class="text-[10px] font-normal opacity-[0.6] ">
                          {getTimeAgo(item.created_at)} ago
                        </p>
                      </button>
                    </div>
                    <div class="mt-2 px-8">
                      <p class="text-[12px] font-normal mb-2">{item.caption}</p>
                    </div>
                    <button
                      class="flex items-center justify-center mt-2 px-16"
                      onClick={() => openPostModals(item.id)}
                    >
                      <img
                        src={item.imageUrls}
                        alt="Search Icon"
                        className="  p-[3px]"
                      />
                    </button>

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
                                    <button onClick={() => openModal(item.id)}>
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
        </div>
        <div className=" lg:hidden flex  absolute mt-36 flex-row justify-around w-screen">
          <div className="bg-[#4600DB82] px-5 rounded-xl flex justify-center items-center">
            <text className="text-white font-[200] text-sm">Follow</text>
          </div>
          <div className="bg-[#4600DB82] px-5 rounded-xl flex justify-center items-center">
            <text className="text-white font-[200] text-sm">Post Creation</text>
          </div>
          <div className="bg-[#4600DB82] px-5 rounded-xl flex justify-center items-center">
            <text className="text-white font-[200] text-sm">...</text>
          </div>
        </div>
      </div>
      <div class="mt-48 bg-white border border-t-8 lg:hidden flex flex-col ">
        <div class=" px-10">
          <div class="flex flex-row justify-between px-5 py-5 border-b  border-b-1 border-black ">
            <text class="font-[200]">Following</text>
            <text class="font-[200]">Followers</text>
          </div>
          <div class="flex flex-row justify-between px-5 py-5  ">
            <text class="text-[20px] font-[250]">Details</text>
          </div>
          <div class=" px-5 py-2 ">
            <div className="flex flex-row items-center justify-between">
              <img
                src="https://s3-alpha-sig.figma.com/img/7318/038f/2f1cbfd44e113c12740f6a9fb23d7c0d?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HhLLElC3DipamRM062qlOWhMu1VPC-rUGWQ~VaKcL3Fjf-7y93xfFOd6OlcKl04F6IJpE40uTGl2YSedmYWzDKsUYgMFEooDYgZw8nZqsjONRixxS7t92IyB~2ehLOyGHvDymF2RZ0-GK-Te8oLeKFOjlMjFoATWALDgUdTc4m3JQvDc3d8HGAsP6jHM-29cNiT-88HEoWmQq7pftxL5TRuu64x6kwIUHExQIZnZoxJu7x8IFZZGxAPtCgGlmmqVQdGkUZ4DTryO2UeqNztZirvsXEq40pLtl3tTifnQyDSJu4vq3q3hZolmbt39nzu3KroxiWXZibEl~mkzVeBgDg__"
                className="rounded-full h-5 w-5"
              />
              <text class=" font-[200]">former studied at loyola</text>
            </div>
          </div>
          <div class=" px-5 py-2 ">
            <div className="flex flex-row items-center justify-between">
              <img
                src="https://s3-alpha-sig.figma.com/img/7318/038f/2f1cbfd44e113c12740f6a9fb23d7c0d?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HhLLElC3DipamRM062qlOWhMu1VPC-rUGWQ~VaKcL3Fjf-7y93xfFOd6OlcKl04F6IJpE40uTGl2YSedmYWzDKsUYgMFEooDYgZw8nZqsjONRixxS7t92IyB~2ehLOyGHvDymF2RZ0-GK-Te8oLeKFOjlMjFoATWALDgUdTc4m3JQvDc3d8HGAsP6jHM-29cNiT-88HEoWmQq7pftxL5TRuu64x6kwIUHExQIZnZoxJu7x8IFZZGxAPtCgGlmmqVQdGkUZ4DTryO2UeqNztZirvsXEq40pLtl3tTifnQyDSJu4vq3q3hZolmbt39nzu3KroxiWXZibEl~mkzVeBgDg__"
                className="rounded-full h-5 w-5"
              />
              <text class=" font-[200]">former studied at loyola</text>
            </div>
          </div>
          <div class=" px-5 py-2 ">
            <div className="flex flex-row items-center justify-between">
              <img
                src="https://s3-alpha-sig.figma.com/img/7318/038f/2f1cbfd44e113c12740f6a9fb23d7c0d?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HhLLElC3DipamRM062qlOWhMu1VPC-rUGWQ~VaKcL3Fjf-7y93xfFOd6OlcKl04F6IJpE40uTGl2YSedmYWzDKsUYgMFEooDYgZw8nZqsjONRixxS7t92IyB~2ehLOyGHvDymF2RZ0-GK-Te8oLeKFOjlMjFoATWALDgUdTc4m3JQvDc3d8HGAsP6jHM-29cNiT-88HEoWmQq7pftxL5TRuu64x6kwIUHExQIZnZoxJu7x8IFZZGxAPtCgGlmmqVQdGkUZ4DTryO2UeqNztZirvsXEq40pLtl3tTifnQyDSJu4vq3q3hZolmbt39nzu3KroxiWXZibEl~mkzVeBgDg__"
                className="rounded-full h-5 w-5"
              />
              <text class=" font-[200]">former studied at loyola</text>
            </div>
          </div>
        </div>
        <div class=" px-5 flex flex-row gap-10 justify-center mt-10">
          <div className="flex flex-row items-center justify-between">
            <img
              src="https://s3-alpha-sig.figma.com/img/16ac/a486/c70a453db330b6508228dcbd62c976d6?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EQ5FIKc8f1et8T5t93LbJwiam0sKWRFEvBw9zoI7Rz7tb~OSuNvsIhymmJg3oIM8sEDT8Aj~iPEf4j2k3vWNwJ7Ad-t3hVxVOO1gBr1JZS82VAPNLXu-a2l4~nrKrfIcaoRD9S2RIRrzQB1s1EjucZcG9eRcEqjF7OvyBsntuQd1fLtnehvqw8rvBHZEXyHlwXj-Y2-6gD7hdItE1LmoIbhDSTW4WGEWP1mjfjkEy5gm46U7UYGTUslRUiFTVhI-XcCHcJ5b8y-6f~-4e58FfbNSuK1VENCUfODwlLqZ6uPLlBCQYtRqeVbJbpMkJFiXd9c-IwR9ARbxp5nmpBeU~Q__"
              className=" h-28 w-28"
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <img
              src="https://s3-alpha-sig.figma.com/img/16ac/a486/c70a453db330b6508228dcbd62c976d6?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EQ5FIKc8f1et8T5t93LbJwiam0sKWRFEvBw9zoI7Rz7tb~OSuNvsIhymmJg3oIM8sEDT8Aj~iPEf4j2k3vWNwJ7Ad-t3hVxVOO1gBr1JZS82VAPNLXu-a2l4~nrKrfIcaoRD9S2RIRrzQB1s1EjucZcG9eRcEqjF7OvyBsntuQd1fLtnehvqw8rvBHZEXyHlwXj-Y2-6gD7hdItE1LmoIbhDSTW4WGEWP1mjfjkEy5gm46U7UYGTUslRUiFTVhI-XcCHcJ5b8y-6f~-4e58FfbNSuK1VENCUfODwlLqZ6uPLlBCQYtRqeVbJbpMkJFiXd9c-IwR9ARbxp5nmpBeU~Q__"
              className=" h-28 w-28"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewDesignersTab;
