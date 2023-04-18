import React from "react";

const LoginPage = () => {
  return (
    <div
      id="login"
      className="h-[90vh] bg-[#ECEFF1] flex justify-center items-center"
    >
      <form className="bg-white " method="post">
        <div className="subform">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" placeholder="Your Name" />
        </div>

        <div className="subform">
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" placeholder="Your Email" />
        </div>

        <div className="subform">
          <label htmlFor="password">Password: </label>
          <input type="text" name="password" placeholder="Your Password" />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
