"use client";
import { useUser } from "@/contexts/UserContext";
import { useState } from "react";
import React from "react";

const ProfileBuilder = () => {
  
  const { user, setUser } = useUser();
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);

    setUser({
      ...user,
      image: {
        file,
        url,
      },
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempLink, setTempLink] = useState({ platform: "Github", url: "" });

  const handleAddLink = () => {
    if (tempLink.url) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setUser((prev: any) => ({
        ...prev,
        links: [...(prev?.links || []), tempLink].slice(0, 3),
      }));
      setTempLink({ platform: "Github", url: "" });
      setIsModalOpen(false);
    }
  };
  console.log("User" ,user)
  console.log(tempLink)
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
                value={user?.name}
                onChange={(e) => {
                  setUser({
                    ...user,
                    name: e.target.value,
                  });
                }}
                className="w-full rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user?.email}
              onChange={(e) => {
                setUser({
                  ...user,
                  email: e.target.value,
                });
              }}
              className="w-full rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Bio</label>
            <textarea
              id="message"
              name="message"
              value={user?.bio}
              onChange={(e) => {
                setUser({
                  ...user,
                  bio: e.target.value,
                });
              }}
              className="w-full rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">
              Profile Image
            </label>
            <input
              type="file"
              id="email"
              name="email"
              onChange={handleImageChange}
              className="w-full rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4 flex flex-col">
            <label className="leading-7 text-sm text-gray-600">Links</label>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-black py-3 px-5 rounded-lg w-fit text-white font-medium hover:bg-gray-800 transition-colors"
            >
              Add Links
            </button>

            {/* Modal Overlay */}
            {isModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
                  <h2 className="text-xl font-bold mb-4">Add Profile Link</h2>

                  <div className="space-y-4">
                    {/* Platform Selection */}
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Platform
                      </label>
                      <select
                        value={tempLink.platform}
                        onChange={(e) => {
                          setTempLink({
                          ...tempLink , platform : e.target.value
                        })
                        }}
                        className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-black outline-none"
                      >
                        <option value="Github">Github</option>
                        <option value="Linkedin">Linkedin</option>
                        <option value="Twitter">Twitter</option>
                        <option value="Website">Website</option>
                      </select>
                    </div>

                    {/* URL Input */}
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://example.com"
                        value={tempLink.url}
                        onChange={(e)=> {
                          setTempLink({
                            ...tempLink, url : e.target.value
                          })
                        }}
                        className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-black outline-none"
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 flex justify-end gap-3">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleAddLink}
                      className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-800"
                    >
                      Add to Profile
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileBuilder;
