import React, { useState } from "react";

const SignupPage = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  return (
    <div
      id="login"
      className="h-[90vh] bg-[#ECEFF1] flex justify-center items-center"
    >
      <form
        className="bg-white p-10 text-center flex flex-col lg:w-1/4 w:3/4 md:2/4 rounded-sm gap-6 "
        method="post"
      >
        <img
          src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo.c36eaf5e6.svg"
          alt="leetcode-logo"
          className="h-24 my-5"
        />

        <input
          value={userInfo.email}
          className="border border-gray p-4 rounded focus:border focus:border-yellow-200"
          type="text"
          placeholder="Username or E-mail"
        />

        <input
          className="border border-gray p-4 rounded"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className="rounded bg-gradient-to-r from-[#546B7A] to-[#37474f] text-white p-4 text-xl">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
