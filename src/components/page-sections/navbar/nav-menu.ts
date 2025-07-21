type MenuItem = {
  href: string;
  title: string;
  type?: string;
  items?: MenuItem[];
  subTitle?: string;
  icon?: string;
  isDropDown2?: boolean;
};

export const navMenu: MenuItem[] = [
  {
    href: "/",
    title: "Home",
    items: [
      {
        title: "Light Knowledgebase",
        href: "/",
      },
      {
        title: "Help Desk",
        href: "/help-desk",
      },
      {
        title: "Cool Knowledgebase",
        href: "/cool-knowledge-base",
      },
    ],
  },
  {
    href: "/docs",
    title: "Docs",
    type: "docsDropdown",
    items: [
      {
        title: "Doc Topics",
        href: "/doc",
        items: [
          {
            title: "Doc Archive",
            href: "/doc-archive",
          },
          {
            title: "Doc Topic",
            href: "/docs",
          },
        ],
      },
      {
        title: "Shortcodes",
        href: "/code",
        items: [
          {
            title: "Tabs",
            href: "/docs/shortcodes/tab",
          },
          {
            title: "Accordion",
            href: "/docs/shortcodes/accordion",
          },
          {
            title: "Notice",
            href: "/docs/shortcodes/notice",
          },
          {
            title: "Tables",
            href: "/docs/shortcodes/tables",
          },
          {
            title: "Image Lightbox",
            href: "/docs/shortcodes/image-lightbox",
          },
          {
            title: "Tooltip",
            href: "/docs/shortcodes/tooltip",
          },
          {
            title: "Lightbox",
            href: "/docs/shortcodes/lightbox",
          },
          {
            title: "Can I Use",
            href: "/docs/shortcodes/can-use",
          },
          {
            title: "Footnote",
            href: "/footnote",
          },
        ],
      },
      {
        title: "Layouts",
        href: "/docs/layouts",
        items: [
          {
            title: "Both Sidebar",
            href: "/docs/layouts",
          },
          {
            title: "Left Sidebar",
            href: "/docs/layouts/leftsidebar",
          },
          {
            title: "Full-width",
            href: "/docs/layouts/layout-full",
          },
          {
            title: "Sticky Menu",
            href: "/docs/layouts/sticky-menu",
          },
          {
            title: "Simple Footer",
            href: "/simple-footer",
          },
        ],
      },
      {
        title: "Tour",
        href: "/tour",
        items: [
          {
            title: "Image Hotspot",
            href: "/docs/tour/image-pointing",
          },
          {
            title: "Application Interface",
            href: "/docs/tour",
          },
        ],
      },
      {
        title: "Content",
        href: "/content",
        items: [
          {
            title: "Typography",
            href: "/typography",
          },
          {
            title: "Code",
            href: "/docs/code",
          },
          {
            title: "Image",
            href: "/docs/image",
          },
          {
            title: "Video",
            href: "/docs/video",
          },
          {
            title: "Keyboard Shortcuts",
            href: "/docs/keyboard-shortcuts",
          },
        ],
      },
      {
        title: "Other Pages",
        href: "/pages",
        items: [
          {
            title: "Doc Topics",
            href: "/docs",
          },
          {
            title: "One Page",
            href: "/one-page",
          },
          {
            title: "Cheat Sheet",
            href: "/docs/cheatsheet",
          },
          {
            title: "Changelog",
            href: "/docs/changelog",
          },
        ],
      },
    ],
  },
  {
    href: "/pages",
    title: "Pages",
    items: [
      {
        title: "Contact",
        href: "/contact",
      },
      {
        title: "Login",
        href: "/login",
      },
      {
        title: "Register",
        href: "/register",
      },
      {
        title: "Typeography",
        href: "/typography",
      },
      {
        title: "404 Page Not Found",
        href: "/404",
      },
    ],
  },
  {
    href: "/forums",
    title: "Forum",
    items: [
      {
        title: "Forum Root",
        href: "/forums",
      },
      {
        title: "Forum Topics",
        href: "/forum-topics",
      },
      {
        title: "Forum Single",
        href: "/forum-single",
      },
    ],
  },
  {
    href: "",
    title: "Our Products",
    isDropDown2: true,
    items: [
      {
        title: "KbDoc",
        subTitle: "Launch Simple Websites",
        icon: "/img/tick.png",
        href: "/doc-archive",
      },
      {
        title: "docall",
        subTitle: "Digital Assets Subscription",
        icon: "/img/sheet.png",
        href: "/docs",
      },
      {
        title: "Docenvato",
        subTitle: "Tutorials & Courses",
        icon: "/img/shopping-bag.png",
        href: "/",
      },
      {
        title: "Tools",
        subTitle: "Hire a Freelancer",
        icon: "/img/gear.png",
        href: "/",
      },
    ],
  },
  {
    href: "/blog",
    title: "Blog",
    items: [
      {
        title: "Blog Grid",
        href: "/blog-grid",
      },
      {
        title: "Blog Grid Two",
        href: "/blog-grid-two",
      },
      {
        title: "Blog List",
        href: "/blog-list",
      },
      {
        title: "Blog Detail",
        href: "/blog-single",
      },
    ],
  },
];
