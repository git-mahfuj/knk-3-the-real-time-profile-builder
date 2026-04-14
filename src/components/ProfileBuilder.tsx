import React from "react";

const ProfileBuilder = () => {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="bg-white p-9 rounded-xl w-125">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Profile Builder
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Build your profile here
          </p>
          <div className="relative mb-4">
            <div className="">
              {" "}
              <label className="leading-7 text-sm text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-lg bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Bio</label>
            <textarea
              id="message"
              name="message"
              className="w-full rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Profile Image</label>
            <input
              type="file"
              id="email"
              name="email"
              className="w-full rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileBuilder;
