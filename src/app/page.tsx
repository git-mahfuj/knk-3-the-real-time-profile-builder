import ProfileBuilder from "@/components/ProfileBuilder";
import ProfilePreview from "@/components/ProfilePreview";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-10">
     <h1 className="text-3xl">KNK-3 The Real Time Profile Builder</h1>
     <div className="flex items-center flex-col lg:flex-row lg:items-start gap-9">
      <ProfileBuilder/>
     <ProfilePreview/>
     </div>
    </div>
  );
}
