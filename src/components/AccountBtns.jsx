import React from "react";

const AccountBtns = () => {
  return (
    <div className="flex items-center font-medium">
      {/* links btn  */}
      <a href="" className="hover:text-blue transition">
        Login
      </a>
      {/* speparator */}
      <span className="mx-6 text-white font-thin">|</span>
      {/* register btn */}
      <button className="btn h-[52px] text-base px-8">Register</button>
    </div>
  );
};

export default AccountBtns;
