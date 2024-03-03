// Modal.js

import React, { useState, useRef } from "react";
import { storage } from "../firebaseFile";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createPost } from "../redux/features/post";

const Modal = ({ isOpen, onClose, id }) => {
  const dispatch = useDispatch();

  const { signInData } = useSelector((state) => ({
    ...state.auth,
  }));
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [fileInputVisible, setFileInputVisible] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const fileInputRef = useRef();

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

  const handleRemoveImage = () => {
    setImagePreview(null);
  };

  const handlePost = () => {
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
            if (downloadURL) {
              dispatch(
                createPost({
                  data: {
                    caption: caption,
                    imageUrls: downloadURL,
                    videoUrl: "",
                    location: "Delhi",
                    userId: localStorage.getItem("userId"),
                  },
                  token:
                    signInData?.Table?.token || localStorage.getItem("token"),
                })
              );
            }
          });
        }
      );
    } // Handle post logic here
    console.log("Caption:", caption);
    console.log("Image Preview:", imagePreview);

    // Reset state and close modal
    setCaption("");
    setImagePreview(null);
    onClose();
  };
  if (!isOpen) return null;
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full">
      <div className="relative p-4 w-full max-w-md">
        <div className="relative bg-white rounded-lg shadow">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            onClick={onClose}
          >
            <span className="sr-only">Close modal</span>
          </button>

          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="p-4 md:p-5 text-center">
                {/* Caption Input Box */}
                <input
                  type="text"
                  placeholder="Enter your caption..."
                  className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                />

                {/* File Input for Picture Selection */}
                <input
                  onChange={handleImageChange}
                  accept="image/*"
                  ref={fileInputRef}
                  type="file"
                  hidden
                />

                {/* Image Preview */}
                {imagePreview && (
                  <div className="mb-4">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full rounded-md mb-2"
                    />
                    <button
                      className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-blue-300"
                      onClick={handleRemoveImage}
                    >
                      Remove Image
                    </button>
                  </div>
                )}

                <div class="flex flex-row justify-between">
                  {!imagePreview ? (
                    <button
                      onClick={() => fileInputRef.current.click()}
                      className="flex text-[#fff] bg-[#4600DB82] w-44 h-10 rounded px-10 justify-around items-center"
                    >
                      <div>
                        <p className="font-[300] text-[15px]">Upload Image</p>
                      </div>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="flex text-[#fff] w-44 bg-[#4600DB82] h-10 rounded px-10 justify-around items-center"
                      onClick={handlePost}
                    >
                      Post
                    </button>
                  )}

                  <button
                    onClick={onClose}
                    type="button"
                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    No, cancel
                  </button>
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
