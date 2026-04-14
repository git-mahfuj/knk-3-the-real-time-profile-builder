import React from "react";
import { Mail } from "lucide-react";
import Image from "next/image";

const ProfilePreview = () => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-9 shadow-sm transition-all hover:shadow-md w-107.5">
      <h1 className="text-black font-medium text-lg">Profile Preview</h1>
      {/* Profile Image */}
      <div className="flex justify-center">
        <Image
          src={"/"}
          width={50}
          height={50}
          alt="John Doe"
          className="h-24 w-24 rounded-full border-2 border-gray-100 object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="mt-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>

        <div className="mt-1 flex items-center justify-center text-sm text-gray-500">
          <Mail size={14} className="mr-1" />
          <span>john.doe@example.com</span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          Full-stack developer who loves building cool stuff with React and
          Next.js.
        </p>
      </div>
      <div>
        <h1 className="text-black font-medium text-lg">Socials</h1>
        <div className="text-black">
            Links
        </div>
      </div>
    </div>
  );
};

export default ProfilePreview;
