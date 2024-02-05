import React, { useState } from "react";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState({
    model: false,
    user: false,
    admin: false,
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError("");
  };

  const handleCheckboxChange = (name) => {
    setUserType((prevUserType) => ({
      ...prevUserType,
      [name]: !prevUserType[name],
    }));
  };

  const handleSignupClick = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{12,}$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 12 characters with at least one special character, one lowercase letter, and one uppercase letter"
      );
      return;
    }

    setEmail("");
    setPassword("");
    setUserType({
      model: false,
      user: false,
      admin: false,
    });

    console.log("Signup successful!");
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div class="bg-gradient-to-r lg:h-screen md:h-screen  from-[rgba(0,131,176,0.37)] to-[rgba(219,0,158,0.11)] lg:py-[5%] lg:pl-[9%] lg:pr-[20%] p-5">
      <div class=" rounded-lg bg-white ">
        <div class="grid lg:grid-cols-2 justify-between p-5  lg:p-0">
          <div class="lg:pl-[60px] lg:pt-[50px] lg:w-[70%]  ">
            <div>
              <p class="text-black font-dm-sans text-2xl font-normal">
                Lets Begin !!!
              </p>
            </div>
            <div class="py-8">
              <p class="text-black font-poppins text-5xl font-medium leading-normal">
                Sign Up
              </p>
            </div>
            <div class="w-[100%]">
              <div class="">
                <p class="text-black font-poppins text-24 font-light leading-normal py-4">
                  Email/Phone number
                </p>

                <input
                  value={email}
                  onChange={handleEmailChange}
                  type="text"
                  class="bg-[#c0dbea] px-2 h-12  w-[100%] border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div class="">
                <div class="flex flex-row justify-between py-4">
                  <p class="text-black font-poppins text-24 font-light leading-normal">
                    password
                  </p>
                  <p class="text-black text-opacity-40 font-poppins text-24 font-light leading-normal">
                    Password Strength
                  </p>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                    className="bg-[#c0dbea] px-2 h-12 w-[100%] border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <span
                    className="absolute right-0 top-0 mt-3 mr-4 cursor-pointer"
                    onClick={handleTogglePasswordVisibility}
                  >
                    {showPassword ? (
                      <img
                        src={require("../images/show.png")}
                        alt="Search Icon"
                        class="h-6"
                      />
                    ) : (
                      <img
                        src={require("../images/hide.png")}
                        alt="Search Icon"
                        class="h-6"
                      />
                    )}
                  </span>
                </div>
              </div>
              <div class="flex justify-between pt-4">
                <label class="inline-flex items-center">
                  <input
                    checked={userType.model}
                    onChange={() => handleCheckboxChange("model")}
                    type="checkbox"
                    name="model"
                    class="form-checkbox"
                  />
                  <span class="ml-2">Model</span>
                </label>

                <label class="inline-flex items-center">
                  <input
                    checked={userType.user}
                    onChange={() => handleCheckboxChange("user")}
                    type="checkbox"
                    name="user"
                    class="form-checkbox"
                  />
                  <span class="ml-2">User</span>
                </label>

                <label class="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={userType.admin}
                    onChange={() => handleCheckboxChange("admin")}
                    name="admin"
                    class="form-checkbox"
                  />
                  <span class="ml-2">Admin</span>
                </label>
              </div>
              {error && <p className="text-red-500 font-[300]">{error}</p>}
              <div class="w-48 h-10 bg-[#7D97AA] rounded-full flex items-center justify-center mx-auto my-5">
                <button
                  onClick={handleSignupClick}
                  class="text-white font-poppins text-20 font-extrabold leading-normal"
                >
                  Lets Begin...
                </button>
              </div>
              <div class=" flex flex-col  ">
                <div class="w-[80%]   mx-auto">
                  <div class="flex justify-around pt-4 lg:pt-0">
                    <div class="inline-flex">
                      <p class="text-black text-opacity-40 font-poppins text-24 font-light leading-normal">
                        or continue with
                      </p>
                    </div>
                    <div class="inline-flex items-center">
                      <p class="text-black text-opacity-40 font-poppins text-24 font-light leading-normal">
                        ||
                      </p>
                    </div>
                    <div class="inline-flex items-center">
                      <p class="text-black text-opacity-40 font-poppins text-24 font-light leading-normal">
                        need help ?
                      </p>
                    </div>
                  </div>
                </div>

                <div class="flex justify-around pt-4 mt-9 lg:mt-0">
                  <div class="inline-flex items-center border-[#6096B4] border-1 border w-20  justify-center py-2 rounded-[40px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M24.3385 10.2492H23.3719V10.1994H12.5721V14.9994H19.3537C18.3644 17.7935 15.7058 19.7993 12.5721 19.7993C8.59593 19.7993 5.37218 16.5755 5.37218 12.5994C5.37218 8.62327 8.59593 5.39953 12.5721 5.39953C14.4074 5.39953 16.0772 6.09191 17.3486 7.22289L20.7427 3.82875C18.5996 1.83139 15.7328 0.599609 12.5721 0.599609C5.94517 0.599609 0.572266 5.97252 0.572266 12.5994C0.572266 19.2263 5.94517 24.5992 12.5721 24.5992C19.1989 24.5992 24.5719 19.2263 24.5719 12.5994C24.5719 11.7948 24.4891 11.0094 24.3385 10.2492Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M1.95508 7.0141L5.89761 9.90545C6.96439 7.26429 9.54795 5.39953 12.5713 5.39953C14.4067 5.39953 16.0764 6.09191 17.3478 7.22289L20.742 3.82875C18.5988 1.83139 15.732 0.599609 12.5713 0.599609C7.96217 0.599609 3.96504 3.20176 1.95508 7.0141Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M12.5725 24.5997C15.672 24.5997C18.4884 23.4135 20.6177 21.4845 16.9038 18.3418C15.6585 19.2888 14.1369 19.801 12.5725 19.7997C9.45132 19.7997 6.80116 17.8096 5.80278 15.0322C3.87561 21.9333 7.90874 24.5997 12.5725 24.5997Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M24.3387 10.2493H23.3721V10.1995H12.5723V14.9994H19.354C18.8807 16.3292 18.0282 17.4912 16.9018 18.3419L16.9036 18.3407L20.6175 21.4835C20.3547 21.7223 24.5721 18.5993 24.5721 12.5994C24.5721 11.7948 24.4893 11.0094 24.3387 10.2493Z"
                        fill="#1976D2"
                      />
                    </svg>
                  </div>
                  <div class="inline-flex items-center border-[#6096B4] border-1 border w-20  justify-center py-2 rounded-[40px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M24.5753 12.6746C24.5753 6.00561 19.2023 0.599609 12.5753 0.599609C5.94527 0.601109 0.572266 6.00561 0.572266 12.6761C0.572266 18.7016 4.96127 23.6966 10.6973 24.6026V16.1651H7.65227V12.6761H10.7003V10.0136C10.7003 6.98811 12.4928 5.31711 15.2333 5.31711C16.5473 5.31711 17.9198 5.55261 17.9198 5.55261V8.52261H16.4063C14.9168 8.52261 14.4518 9.45411 14.4518 10.4096V12.6746H17.7788L17.2478 16.1636H14.4503V24.6011C20.1863 23.6951 24.5753 18.7001 24.5753 12.6746Z"
                        fill="#059BE5"
                      />
                    </svg>
                  </div>
                  <div class="inline-flex items-center border-[#6096B4] border-1 border w-20  justify-center py-2 rounded-[40px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M24.3385 10.2492H23.3719V10.1994H12.5721V14.9994H19.3537C18.3644 17.7935 15.7058 19.7993 12.5721 19.7993C8.59593 19.7993 5.37218 16.5755 5.37218 12.5994C5.37218 8.62327 8.59593 5.39953 12.5721 5.39953C14.4074 5.39953 16.0772 6.09191 17.3486 7.22289L20.7427 3.82875C18.5996 1.83139 15.7328 0.599609 12.5721 0.599609C5.94517 0.599609 0.572266 5.97252 0.572266 12.5994C0.572266 19.2263 5.94517 24.5992 12.5721 24.5992C19.1989 24.5992 24.5719 19.2263 24.5719 12.5994C24.5719 11.7948 24.4891 11.0094 24.3385 10.2492Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M1.95508 7.0141L5.89761 9.90545C6.96439 7.26429 9.54795 5.39953 12.5713 5.39953C14.4067 5.39953 16.0764 6.09191 17.3478 7.22289L20.742 3.82875C18.5988 1.83139 15.732 0.599609 12.5713 0.599609C7.96217 0.599609 3.96504 3.20176 1.95508 7.0141Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M12.5725 24.5997C15.672 24.5997C18.4884 23.4135 20.6177 21.4845 16.9038 18.3418C15.6585 19.2888 14.1369 19.801 12.5725 19.7997C9.45132 19.7997 6.80116 17.8096 5.80278 15.0322C3.87561 21.9333 7.90874 24.5997 12.5725 24.5997Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M24.3387 10.2493H23.3721V10.1995H12.5723V14.9994H19.354C18.8807 16.3292 18.0282 17.4912 16.9018 18.3419L16.9036 18.3407L20.6175 21.4835C20.3547 21.7223 24.5721 18.5993 24.5721 12.5994C24.5721 11.7948 24.4893 11.0094 24.3387 10.2493Z"
                        fill="#1976D2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex  justify-end mt-5 lg:mt-0 ">
            <img
              src="https://s3-alpha-sig.figma.com/img/34f3/e010/c5df3f72930cd31c673789672c9d5d04?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ki-dvLP7rpZjigeGk-Nc6o7AoGkcxbnikOeLBFoMqu~pOlKSqPpqG1Lf9gwvecdYYTlegJteyywylej~hm4XVq2KgBTfJIZxxpDaIlhvmvEJxEAoXyhuPFpKTsGcXGhB7eo6Uhma~q9kE3FgA7mq~ICB4hkj638A~gdSJRogwSyCgsZQGc3VFjSTU1gk2CD74C3ibW9iGkLVAn0SOc2YBMXNpGwN-lN59GvxipWNM4W51NVQu6bHTEwbLB0vL3XYrwoaK6JtlR3Hg8JerS51iFLDiCyGrFygIPgbiMIkVwjGvUf4IbBnA2EiXtwdeNniLFkdtZGosKkIDC5tMVS2rg__"
              alt="Your Image"
              class="lg:h-[83.7vh]  rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
