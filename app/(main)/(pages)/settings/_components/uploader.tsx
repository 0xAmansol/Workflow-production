"use client";
import React, { useEffect, useRef } from "react";
import * as LR from "@uploadcare/blocks";
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import { useRouter } from "next/router";
import { uploadFile } from "@uploadcare/upload-client";
import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

type Props = {
  onUpload: any;
  image: string;
};
LR.registerBlocks(LR);

const Uploader = ({ onUpload }: Props) => {
  useEffect(() => {
    const handleUpload = async (e: any) => {
      // ... handle upload logic ...
      const file = await onUpload(e.detail.cdnUrl);
      const result = await uploadFile(file, {
        publicKey: "133d7b563f7747901e22",
        store: "auto",
        metadata: {
          subsystem: "js-client",
          pet: "cat",
        },
      });
      console.log(result.uuid);
      return onUpload(file);
    };
  });
  return (
    <div>
      <FileUploaderRegular
        sourceList="local, url, camera, dropbox"
        classNameUploader="uc-light"
        pubkey="133d7b563f7747901e22"
      />
    </div>
  );
};

export default Uploader;
