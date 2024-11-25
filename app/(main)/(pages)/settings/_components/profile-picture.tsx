"use client";

import React from "react";
import Uploader from "./uploader";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";

type Props = {
  userImage?: any;
  onDelete?: any;
  onUpload?: any;
};

const ProfilePicture = ({ userImage, onDelete, onUpload }: Props) => {
  return (
    <div className="flex flex-col">
      <p className="text-lg text-white"> Profile Picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center">
        {userImage ? (
          <>
            <div className="relative h-full w-2/12">
              <Image src={userImage} alt="User_Image" fill />
            </div>
            <Button
              onClick={onDelete}
              className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
            >
              <X /> Remove Logo
            </Button>
          </>
        ) : (
          <Uploader onUpload={onUpload} />
        )}
      </div>
    </div>
  );
};

export default ProfilePicture;
