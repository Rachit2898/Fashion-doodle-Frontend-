// Modal.js

import React, { useState, useRef } from "react";
import { storage } from "../firebaseFile";
import data from "@emoji-mart/data";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { Provider, useDispatch, useSelector } from "react-redux";
import Picker from "@emoji-mart/react";
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

const Modal = ({ isOpen, onClose, id }) => {
  const { postByIdData, getCommentsByIdData } = useSelector((state) => ({
    ...state.post,
  }));
  const dispatch = useDispatch();
  const [caption, setCaption] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  const [comment, setComment] = useState("");
  const [file, setFile] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [fileInputVisible, setFileInputVisible] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const fileInputRef = useRef();

  const { signInData } = useSelector((state) => ({
    ...state.auth,
  }));

  const emojisHandler = (emoji) => {
    setComment((prevComment) => prevComment + emoji.native);
  };

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFile(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const likePostHandler = (id) => {
    dispatch(likePost({ userId: localStorage.getItem("userId"), postId: id }));
    dispatch(incrementLikes(id));
  };

  const handleCommentType = (e) => {
    setComment(e.target.value);
  };

  const handlePostComment = () => {
    dispatch(
      addCommentToPost({
        data: {
          content: comment,
          postId: postByIdData?.Table?.id,
          userId: localStorage.getItem("userId"),
        },
        token: signInData?.Table?.token || localStorage.getItem("token"),
      })
    );
    setComment("");
  };

  if (!isOpen) return null;
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full">
      <div className="relative p-4 ">
        <div className="relative bg-white rounded-lg shadow">
          <div className="relative p-4 w-full ">
            <div className="relative bg-white rounded-lg shadow dark:bg-black">
              <div class="border-b border-white">
                {showEmojis && (
                  <div class="flex absolute z-50">
                    <Picker
                      data={data}
                      onEmojiSelect={(item) => {
                        emojisHandler(item);
                      }}
                    />
                  </div>
                )}
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
              {console.log("sdmncbsdcbdfhjv", postByIdData)}
              <div className="p-4 md:p-5 text-center flex flex-row">
                <div class=" justify-center gap-16 lg:flex hidden md:flex flex-wrap  ">
                  <button class="bg-white p-2 flex justify-center items-center">
                    <img
                      src={postByIdData?.Table?.imageUrls}
                      alt="Search Icon"
                      class="max-h-96 max-w-96 "
                    />
                  </button>
                </div>
                <div class="  min-w-96 h-full ">
                  <div className="relative p-4 w-full max-w-md max-h-96 mb-32 overflow-y-auto">
                    {!!getCommentsByIdData?.Table ? (
                      <>
                        {getCommentsByIdData?.Table?.map((item) => {
                          return (
                            <div className="flex  m-2 " key={item.commentId}>
                              <div className="mr-4">
                                <img
                                  src={require("../images/Ellipse.jpg")}
                                  className="w-10 h-9 rounded-full"
                                  alt="User Avatar"
                                />
                              </div>

                              <div className="w-full flex flex-col justify-start rounded  ">
                                <div className="flex mb-1">
                                  <span className="font-semibold  text-white">
                                    Rachit:
                                  </span>
                                  <div class="flex pl-2">
                                    <div class="flex flex-wrap">
                                      <p className=" text-white">
                                        {item.content}
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                <div class="  flex justify-start">
                                  <span className=" text-sm text-white">
                                    {getTimeAgo(item.created_at)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    ) : (
                      <div>
                        <p class="text-white">No comments</p>
                      </div>
                    )}
                  </div>
                  <div class="absolute bottom-0 lg:w-[50%] w-full text-center flex flex-col ">
                    <div class="flex gap-10  ">
                      <button
                      //   onClick={() => {
                      //     likePostHandler(item.id);
                      //   }}
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
                            stroke="none"
                          />
                          <path
                            d="M7.92779 19.532V20.2931C7.92779 20.9136 7.42478 21.4166 6.80429 21.4166V21.4166C6.18379 21.4166 5.68079 20.9136 5.68079 20.2931V11.5341C5.68079 10.9136 6.18379 10.4106 6.80429 10.4106V10.4106C7.42478 10.4106 7.92779 10.9136 7.92779 11.5341V12.4293M7.92779 19.532L8.67716 20.2382C9.23034 20.7594 9.50692 21.0201 9.84583 21.2051C9.95403 21.2641 10.0789 21.3223 10.1937 21.367C10.5535 21.5073 10.9129 21.5491 11.6319 21.6326C12.6846 21.755 14.0056 21.8872 14.9278 21.9052C15.6213 21.9188 16.4378 21.873 17.2264 21.8048C18.5113 21.6935 19.1537 21.6379 19.7531 21.2741C19.9374 21.1623 20.1419 21.0035 20.2959 20.8526C20.7967 20.3619 21.0288 19.6986 21.4928 18.372L22.6872 14.9578C23.3122 13.1708 22.0683 11.2783 20.18 11.1433L18.1957 11.0015C17.5229 10.9534 17.0449 10.3259 17.1772 9.6644V9.6644C17.5548 8.34445 17.5539 7.20923 17.1744 6.01798C16.9509 5.31654 16.2669 4.90759 15.5456 4.90759C15.0405 4.90759 14.56 5.12385 14.3561 5.59644C13.9567 6.52225 13.2824 8.42595 12.2995 9.4312C10.8387 10.9252 9.76571 11.7936 7.92779 12.4293M7.92779 19.532V12.4293"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <p class="text-white">11</p>
                      </button>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                        >
                          <path
                            d="M7.42773 17.4076V17.4076C5.2186 17.4076 3.42773 15.6167 3.42773 13.4076V10.9076C3.42773 8.57296 3.42773 7.40564 3.90005 6.52201C4.27298 5.8243 4.84444 5.25284 5.54215 4.87991C6.42579 4.40759 7.5931 4.40759 9.92773 4.40759H14.9277C17.2624 4.40759 18.4297 4.40759 19.3133 4.87991C20.011 5.25284 20.5825 5.8243 20.9554 6.52201C21.4277 7.40564 21.4277 8.57296 21.4277 10.9076V10.9076C21.4277 13.2422 21.4277 14.4095 20.9554 15.2932C20.5825 15.9909 20.011 16.5623 19.3133 16.9353C18.4297 17.4076 17.2624 17.4076 14.9277 17.4076H12.4277"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.42773 17.4076L6.42773 20.4076L12.4277 17.4076"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <p class="text-white">11</p>
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
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    <div className="flex  bg-white lg:m-5 m-0  flex-col  ">
                      <div className=" flex w-full flex-row  justify-between items-center rounded-t-lg border-b">
                        <button onClick={setShowEmojis} class="lg:ml-2 ml-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="black"
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
                          value={comment}
                          onChange={(e) => handleCommentType(e)}
                          onClick={() => {
                            setShowEmojis(null);
                          }}
                          type="text"
                          placeholder="Add a comment..."
                          className="border w-full  h-10 flex items-center justify-center resize-none border-gray-300  p-2  border-none focus:outline-none focus:border-none rounded-l-md"
                        />
                        <button
                          onClick={handlePostComment}
                          className=" text-white p-2 rounded-r-md"
                        >
                          <img
                            src={require("../images/post.png")}
                            alt="Search Icon"
                            className="h-5"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
