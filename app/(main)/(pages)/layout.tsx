import React from "react";

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className=" h-screen rounded-l-3xl border-muted-foreground/20 overflow-hidden ">
        {children}
      </div>
    </>
  );
};

export default Layout;
