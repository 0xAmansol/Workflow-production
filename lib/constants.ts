import { Billings } from "@/components/icons/billings";
import { Connections } from "@/components/icons/connections";
import { Dashboard } from "@/components/icons/dashboard";
import { Logs } from "@/components/icons/logs";
import { Settings } from "@/components/icons/settings";
import { Templates } from "@/components/icons/templates";
import { Workflows } from "@/components/icons/workflows";

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/p2.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/p3.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/p4.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/p5.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/p6.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/p2.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/p3.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/p4.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/p5.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/p6.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/p2.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/p3.png",
  },
];

export const prices = [
  {
    price: "$0",
    title: "Free tier",
    package: "Credits upto 10 , create upto 5 free automation workflows.",
  },
  {
    price: "$10",
    title: "Basic",
    package: "Credits upto 50 , create upto 15 automation workflows.",
  },
  {
    price: "20",
    title: "Free tier",
    package: "Credits upto 100 , create upto 25 automation workflows.",
  },
];

export const menuOptions = [
  { name: "Dashboard", Component: Dashboard, href: "/dashboard" },
  { name: "Workflows", Component: Workflows, href: "/workflows" },
  { name: "Settings", Component: Settings, href: "/settings" },
  { name: "Connections", Component: Connections, href: "/connections" },
  { name: "Billing", Component: Billings, href: "/billing" },
  { name: "Templates", Component: Templates, href: "/templates" },
  { name: "Logs", Component: Logs, href: "/logs" },
];
