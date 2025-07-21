import { MenuItem } from "./types";

export const sidebarItems: MenuItem[] = [
  {
    id: "doc",
    label: "Getting Started",
    href: "#doc",
    icon: "/img/onepage-icon/smiles-icon.png",
  },
  {
    id: "shortcodes",
    label: "Shortcodes",
    href: "#shortcodes",
    icon: "/img/side-nav/briefcase.png",
    submenu: [
      { id: "tab", label: "Tab", href: "#tabs" },
      { id: "accordian", label: "Accordian", href: "#accordian" },
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
    icon: "/img/side-nav/chat1.png",
    submenu: [{ id: "hotspots", label: "Image Hotspots", href: "#pointing" }],
  },
  {
    id: "typography",
    label: "Content",
    href: "#typography",
    icon: "/img/side-nav/document.png",
    submenu: [
      { id: "code", label: "Code", href: "#code" },
      { id: "image", label: "Image", href: "#img" },
      { id: "video", label: "Video", href: "#video" },
    ],
  },
  {
    id: "changelog",
    label: "Change Log",
    href: "#changelog",
    icon: "/img/side-nav/document2.png",
    active: true,
  },
  {
    id: "cheatsheet",
    label: "Cheatsheet",
    href: "#cheatsheet",
    icon: "/img/side-nav/book.png",
  },
  {
    id: "example1",
    label: "Example Item",
    href: "#ex1",
    icon: "/img/side-nav/chat.png",
  },
  {
    id: "example2",
    label: "Example Item 02",
    href: "#ex2",
    icon: "/img/side-nav/coding.png",
  },
  {
    id: "example3",
    label: "Example Item 03",
    href: "#ex3",
    icon: "/img/side-nav/support.png",
  },
];
