import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition duration-300">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
          {user.username.charAt(0).toUpperCase()}
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {user.username}
          </h2>
          <p className="text-gray-500 text-sm">{user.email}</p>
        </div>
      </div>

      <div className="mt-5 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">User ID</span>
          <span className="text-gray-800">{user.id}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Password</span>
          <span className="font-mono text-gray-800">
            {user.password}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;