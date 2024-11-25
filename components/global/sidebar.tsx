"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { menuOptions } from "@/lib/constants";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";

type Props = { selected: boolean; children: React.ReactNode };

export default function SidebarDemo({ selected, children }: Props) {
  const [open, setOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("");

  const pathName = usePathname();
  const { user } = useUser();

  useEffect(() => {
    setCurrentTab(pathName);
  }, [pathName]);

  return (
    <div
      className={cn(
        "rounded-md absolute flex flex-col md:flex-row  bg-white  dark:bg-slate-950 w-full flex-1 max-w-7xl mx-auto overflow-y-hidden",
        "h-screen " // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-5 ">
          <div className="flex flex-col flex-1  overflow-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-6 flex flex-col gap-2">
              {menuOptions.map((menuItem, idx) => (
                <SidebarLink
                  key={idx}
                  link={{
                    ...menuItem,
                    Component: <menuItem.Component selected={selected} />,
                  }}
                />
              ))}
            </div>
          </div>
          <div>
            <ModeToggle />
          </div>
          <div className="">
            <SidebarLink
              link={{
                name: user?.firstName,
                href: "#",
                Component: <UserButton />,
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard currentTab={currentTab}>{children}</Dashboard>
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content
export const Dashboard = ({
  currentTab,
  children,
}: {
  currentTab: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col w-screen">
      <div className="w-full content-between flex flex-row">
        <h1 className="text-2xl sticky w-full top-0 z-[10] p-3  dark:bg-black bg-white text-neutral-700 dark:text-white backdrop-blur-lg  items-center  pl-3">
          {currentTab}
        </h1>
        <div className="mt-3 mr-5 pr-5 dark:bg-black bg-white w-2xl items-center justify-center">
          <UserButton />
        </div>
      </div>

      <div className="flex-1">
        <div className=" md:p-5 rounded-tl-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-slate-950 flex flex-col  flex-1 w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
};
