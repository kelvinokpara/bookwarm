import React from "react";

const UserModal = ({ children }) => {
  const user = localStorage.getItem("userInfo");
  return (
    <div>
      <p>
        User: <span>username</span>
      </p>
      <p>
        email: <span>email</span>
      </p>

      <div>{children}</div>
    </div>
  );
};

export default UserModal;
