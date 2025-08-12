import smilesIcon from "@/assets/img/onepage-icon/smiles-icon.png";
import book from "@/assets/img/side-nav/book.png";
import briefcase from "@/assets/img/side-nav/briefcase.png";
import chat from "@/assets/img/side-nav/chat.png";
import chat1 from "@/assets/img/side-nav/chat1.png";
import coding from "@/assets/img/side-nav/coding.png";
import document from "@/assets/img/side-nav/document.png";
import document2 from "@/assets/img/side-nav/document2.png";
import support from "@/assets/img/side-nav/support.png";
import { MenuItem } from "./types";

export const sidebarItems: MenuItem[] = [
  {
    id: "doc",
    label: "Getting Started",
    href: "#doc",
    icon: smilesIcon,
  },
  {
    id: "shortcodes",
    label: "Shortcodes",
    href: "#shortcodes",
    icon: briefcase,
    submenu: [
      { id: "tabs", label: "Tab", href: "#tabs" },
      { id: "accordion", label: "Accordion", href: "#accordion" },
      { id: "notice", label: "Notices", href: "#notice" },
      { id: "tooltip", label: "Tooltip", href: "#tooltip" },
      { id: "table", label: "Table", href: "#table" },
      { id: "lightbox", label: "Lightbox", href: "#lightbox" },
      { id: "footnote", label: "Footnote", href: "#footnote" },
      { id: "can-use", label: "Can I Use", href: "#can-use" },
    ],
  },
  {
    id: "tour",
    label: "Tour",
    href: "#tour",
    icon: chat1,
    submenu: [{ id: "pointing", label: "Image Hotspots", href: "#pointing" }],
  },
  {
    id: "typography",
    label: "Content",
    href: "#typography",
    icon: document,
    submenu: [
      { id: "code", label: "Code", href: "#code" },
      { id: "img", label: "Image", href: "#img" },
      { id: "video", label: "Video", href: "#video" },
    ],
  },
  {
    id: "changelog",
    label: "Change Log",
    href: "#changelog",
    icon: document2,
    active: true,
  },
  {
    id: "cheatsheet",
    label: "Cheatsheet",
    href: "#cheatsheet",
    icon: book,
  },
  {
    id: "example1",
    label: "Example Item",
    href: "#ex1",
    icon: chat,
  },
  {
    id: "example2",
    label: "Example Item 02",
    href: "#ex2",
    icon: coding,
  },
  {
    id: "example3",
    label: "Example Item 03",
    href: "#ex3",
    icon: support,
  },
];
