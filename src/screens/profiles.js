import React, { useEffect, useState } from "react";

import { Provider, useDispatch, useSelector } from "react-redux";
import {
  getUserById,
  getFollowers,
  getFollowings,
} from "../redux/features/user";
import {
  getPostsByUserId,
  getPostById,
  getCommentsById,
} from "../redux/features/post";
import Modal from "../components/followers";
import PostModal from "../components/postShowModal";

function NewDesignersTab() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { signInData } = useSelector((state) => ({
    ...state.auth,
  }));
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("post");

  const {
    getUserByIdData,
    getFollowersData,
    getFollowingData,
    followingId,
    followingUserId,
  } = useSelector((state) => ({
    ...state.user,
  }));

  const [id, SetId] = useState(
    followingId ? followingId : localStorage.getItem("profileUserId")
  );

  console.log(id);

  useEffect(() => {
    if (id) {
      dispatch(
        getUserById({
          id: id,
          token: signInData?.Table?.token || localStorage.getItem("token"),
        })
      );
      dispatch(
        getFollowings({
          id: id,
          token: signInData?.Table?.token || localStorage.getItem("token"),
        })
      );
      dispatch(
        getFollowers({
          id: id,
          token: signInData?.Table?.token || localStorage.getItem("token"),
        })
      );
      dispatch(
        getPostsByUserId({
          id: id,
          token: signInData?.Table?.token || localStorage.getItem("token"),
        })
      );
    }
  }, []);

  const { postsByUserIdData } = useSelector((state) => ({
    ...state.post,
  }));
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = (id) => {
    setIsModalOpen(true);
  };

  const handleModalClick = () => {
    closeModal();
  };

  const openPostModal = (id) => {
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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  console.log(postsByUserIdData);
  return (
    <div class="lg:bg-gradient-to-r lg:h-full h-screen md:bg-white from-[rgba(0,131,176,0.37)] to-[rgba(219,0,158,0.11)] lg:py-[5%] lg:pl-[9%] lg:pr-[15%] lg:p-5">
      <div class="bg-gradient-to-t lg:rounded-lg to-[#A0D5CB]  bg-white from-[#6EB5D300] lg:pb-[3%] relative">
        <div class="flex flex-col ">
          <div class="relative">
            <div>
              <img
                src={
                  !!getUserByIdData?.Table?.backGroundPic
                    ? getUserByIdData?.Table?.backGroundPic
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
                    !!getUserByIdData?.Table?.profilePicture
                      ? getUserByIdData?.Table?.profilePicture
                      : "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.1259320201.1707409598&semt=ais"
                  }
                  class="rounded-full lg:w-72 h-40"
                />
                <div class="w-full flex flex-col lg:items-center">
                  <div class="ml-2">
                    <p class="text-xl lg:text-2xl font-light">
                      {getUserByIdData?.Table?.fullName}
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

        <div class="z-50">
          <Modal
            onClick={handleModalClick}
            isOpen={isModalOpen}
            onClose={closeModal}
            message={getFollowingData}
          />
        </div>
        <div class="z-50">
          <PostModal
            onClick={handleModalClick}
            isOpen={isPostModalOpen}
            onClose={closePostModal}
            message={getFollowingData}
          />
        </div>

        <div class="mt-14  justify-center gap-56 lg:flex hidden  md:block">
          <div class="flex flex-col justify-center items-center">
            <p>Followers</p>
            <p>
              {getFollowersData?.followers?.length
                ? getFollowersData?.followers?.length
                : 0}
            </p>
          </div>
          <button
            onClick={openModal}
            class="flex flex-col justify-center items-center"
          >
            <p>Following</p>
            <p>
              {getFollowingData?.following?.length
                ? getFollowingData?.following?.length
                : 0}
            </p>
          </button>
        </div>

        <div className="flex justify-center mt-4 w-full  border-t-1 border-t-white pt-5">
          <button
            onClick={() => handleTabClick("post")}
            className={`${
              activeTab === "post"
                ? "text-black flex justify-center items-center  border-t-2 border-t-white"
                : " text-gray-700 flex justify-center items-center "
            } px-4 py-2 mx-2  focus:outline-none`}
          >
            <img src={require("../images/postIcon.png")} class="   w-8" />
            <text>Post</text>
          </button>
          <button
            onClick={() => handleTabClick("reels")}
            className={`${
              activeTab === "reels"
                ? "text-black flex justify-center items-center  border-t-2 border-t-white"
                : " text-gray-700 flex justify-center items-center "
            } px-4 py-2 mx-2 rounded-md focus:outline-none`}
          >
            <img src={require("../images/reels.png")} class="   w-8" />
            <text> Reels</text>
          </button>
        </div>

        <div className="mt-10 justify-center lg:flex hidden md:flex flex-wrap">
          {activeTab === "post" &&
            postsByUserIdData?.Table?.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2"
              >
                <button
                  onClick={() => openPostModal(item.id)}
                  className="bg-white p-2 flex justify-center items-center"
                >
                  <img
                    src={item?.imageUrls}
                    alt="Post Image"
                    className="max-h-72 max-w-80 object-contain"
                  />
                </button>
              </div>
            ))}

          {activeTab === "reels" &&
            postsByUserIdData?.Table?.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2"
              >
                <button
                  onClick={() => openPostModal(item.id)}
                  className="bg-white p-2 flex justify-center items-center"
                >
                  <img
                    src={
                      "https://seagulladvertising.com/hubfs/NRP-Introducing_Instagram_Reels_banner_FINAL.jpg"
                    }
                    alt="Post Image"
                    className="max-h-72 max-w-80 object-contain"
                  />
                </button>
              </div>
            ))}
        </div>

        <div className=" lg:hidden flex  absolute mt-36 flex-row justify-around w-screen">
          <div className="bg-[#110f1682] px-5 rounded-xl flex justify-center items-center">
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
