import React from "react";

const Usercard = ({ user }) => {
  return (
    <div className="p-4 border border-white rounded flex flex-col gap-2 bg-black text-white">
      <div className="h-40 w-40 ">
        <img className="object-fit h-full w-full rounded-xl"
        src={user.Image}
        alt="" />
      </div>
      <div className="flex flex-col gap-1">
        <h1>{user.Name}</h1>
        <p className="text-sm">{user.Email}</p>
        <p className="text-sm">{user.Mobile}</p>
      </div>
      <div className="flex justify-between w-full ">
        <button className="bg-yellow-700 text-white rounded py-2 px-3">
          Update
        </button>
        <button className="bg-red-700 text-white rounded py-2 px-3">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Usercard;
