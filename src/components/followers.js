// Modal.js

import React, { useState } from "react";
import Modal from "./modal";
import { useNavigate } from "react-router-dom";
import {
  getUserById,
  getFollowers,
  getFollowings,
  setUserFollowingId,
  removeFollowing,
} from "../redux/features/user";
import { Provider, useDispatch, useSelector } from "react-redux";

const FollowModal = ({ isOpen, onClick, onClose, message }) => {
  const { signInData } = useSelector((state) => ({
    ...state.auth,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profileViewHandler = (id) => {
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
    navigate("/profiles");
    onClose();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const handleModalClick = () => {
    console.log({ userId: localStorage.getItem("userId"), followingId: id });
    dispatch(
      removeFollowing({
        data: {
          userId: localStorage.getItem("userId"),
          followingId: id,
        },
        token: signInData?.Table?.token || localStorage.getItem("token"),
      })
    );
    closeModal();
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = (id, name) => {
    setId(id);
    setIsModalOpen(true);
    setName(name);
    dispatch(setUserFollowingId(id));
  };

  if (!isOpen) return null;
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full ">
      <div className="relative p-4 w-full max-w-md">
        <div>
          <Modal
            onClick={handleModalClick}
            isOpen={isModalOpen}
            message={`If you change your mind, you'll have to request to follow ${name} again.`}
            onClose={closeModal}
            message2="Unfollow"
          />
        </div>
        <div className="relative bg-white rounded-lg shadow">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            onClick={onClose}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="relative p-4 w-full max-w-md max-h-96 overflow-y-auto">
            <div class="relative bg-white rounded-lg shadow   dark:bg-[#191919]">
              <div class="border-b border-white">
                <div class="flex justify-center items-center py-3">
                  <p class="text-white font-bold">Follwers</p>
                </div>
                <button
                  onClick={onClose}
                  class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="popup-modal"
                >
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>

              <div class="p-4 md:p-5 text-center">
                {message?.following?.map((item) => {
                  return (
                    <div class="flex my-3 justify-between ">
                      <button onClick={() => profileViewHandler(item.id)}>
                        <div class="flex justify-start items-start">
                          <img
                            src={
                              item.profilePicture
                                ? `${item.profilePicture}`
                                : require("../images/Ellipse.jpg")
                            }
                            alt="Search Icon"
                            className="h-10 rounded-full p-[3px]"
                          />
                          <div class="flex flex-col items-start">
                            <p class="text-[12px] font-normal text-white items-start ">
                              {item.fullName}
                            </p>
                            <p class="text-[10px] text-white font-normal opacity-[0.6] ">
                              {item.userName}
                            </p>
                          </div>
                        </div>
                      </button>
                      {localStorage.getItem("userId") != item.id ? (
                        <button
                          onClick={() => openModal(item.id, item.fullName)}
                        >
                          <p class="text-white text-xs font-bold bg-[#2b2b2b] rounded-lg p-2 px-4">
                            Following
                          </p>
                        </button>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowModal;
