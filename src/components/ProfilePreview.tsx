"use client";
import React from "react";
import { LineStyle, Mail } from "lucide-react";
import Image from "next/image";
import { useUser } from "@/contexts/UserContext";
import Link from "next/link";

const ProfilePreview = () => {
  const { user } = useUser();
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-9 shadow-sm transition-all hover:shadow-md w-107.5">
      <h1 className="text-black font-medium text-lg">Profile Preview</h1>
      {/* Profile Image */}

      <div className="flex justify-center">
        <Image
          src={user?.image?.url || ""}
          width={50}
          height={50}
          alt={user?.name || ""}
          className="h-24 w-24 rounded-full border-2 border-gray-100 object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="mt-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">{user?.name}</h2>

        <div className="mt-1 flex items-center justify-center text-sm text-gray-500">
          <Mail size={14} className="mr-1" />
          <span>{user?.email}</span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          {user?.bio}
        </p>
      </div>
      <div>
        <h1 className="text-black font-medium text-lg">Socials</h1>
        {user?.links ? (
          <div className="mt-4 flex items-center justify-center gap-4">
            {user.links.map((link) => (
              <div key={link.platform}>
                <Link
                  href={link.url}
                  className="bg-black text-white py-2 px-3 rounded-xl font-medium"
                >
                  {" "}
                  <button>{link.platform}</button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div>No Links Added</div>
        )}
      </div>
    </div>
  );
};

export default ProfilePreview;
