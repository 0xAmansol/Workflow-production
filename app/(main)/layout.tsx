import SidebarDemo from "@/components/global/sidebar";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import React from "react";

type Props = {
  children?: React.ReactNode;
  selected: boolean;
};

const Layout = (props: Props) => {
  return (
    <>
      <SignedIn>
        <div className="flex overflow-hidden h-screen">
          <SidebarDemo selected={true}>{props.children}</SidebarDemo>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default Layout;
