// Index file for exporting all types and components from one-page components

// Types
export * from "./types";

// Components
export { default as ContentPage } from "./.content/content-page";
export { default as LocalVideo } from "./.content/local-video";
export { default as CanUse } from "./.shortcode/can-use";
export { default as Footnote } from "./.shortcode/footnote";
export { default as GettingStarted } from "./.shortcode/getting-started";
export { default as Notice } from "./.shortcode/notice";
export { default as ShortcodePage } from "./.shortcode/shortcode-page";
export { default as Toggle } from "./.shortcode/toggle";
export { default as TourPage } from "./.tour/tour-page";
export { default as ChangelogPage } from "./changelog/changelog";
export { default as Content } from "./content";
export { default as Documentation } from "./documentation";
export { default as Sidebar } from "./sidebar";

// Menu configuration
export { sidebarItems } from "./menu";
// export type { MenuItem, MenuSubItem } from "./menu";
