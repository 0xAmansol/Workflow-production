import SidebarDemo from "@/components/global/sidebar";
import { FileUpload } from "@/components/ui/file-upload";
import React, { useState } from "react";

import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { onSubmit } from "@/components/forms/profile/server-actions";
import ProfileForm from "@/components/forms/profile";
import { uploadFile } from "@uploadcare/upload-client";
import ProfilePicture from "./_components/profile-picture";

const Settings = async () => {
  const authUser = await currentUser();
  if (!authUser) return null;
  const user = await prisma.user.findUnique({
    where: {
      clerkId: authUser?.id,
    },
  });
  const onRemoveProfileImage = async () => {
    "use server";
    const response = await prisma.user.update({
      where: {
        clerkId: user?.clerkId,
      },
      data: {
        profileImage: "",
      },
    });
    return response;
  };

  const onUploadProfileImage = async (image: string) => {
    const response = await prisma.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        profileImage: image,
      },
    });
    return response;
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-10 p-2">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>
        <ProfilePicture
          onDelete={onRemoveProfileImage}
          userImage={user?.profileImage || ""}
          onUpload={onUploadProfileImage}
        />
        <ProfileForm user={user} onUpdate={onUpdateInfo} />
      </div>
    </div>
  );
};

export default Settings;
