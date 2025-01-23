import React from "react";

const UserInfo = (props) => {
  return (
    <div>
      <h2>User Information</h2>
      <p>
        Name: {props.username}
      </p>
      <p>
        Age: {props.age}
      </p>
      <p>
        Email: {props.email}
      </p>
    </div>
  );
};



export default UserInfo;