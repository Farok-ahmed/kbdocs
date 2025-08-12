// Common types for the one-page components
import { StaticImageData } from "next/image";

export interface MenuSubItem {
  id: string;
  label: string;
  href: string;
}

export interface MenuItem {
  id: string;
  label: string;
  href: string;
  icon: string | StaticImageData;
  submenu?: MenuSubItem[];
  active?: boolean;
}

// Content component props
export interface ContentProps {
  onDark: () => void;
  isDark: boolean;
}

// Sidebar component props
export interface SidebarProps {}

// Font size related types
export type FontSize = "font-size-sm" | "font-size-md" | "font-size-xl";

export interface FontSwitcherHandlers {
  onIncrease: () => void;
  onDecrease: () => void;
  onReset: () => void;
}

// Progress map for sidebar scroll tracking
export interface ProgressMap {
  [sectionId: string]: number;
}

// Documentation item interface
export interface DocumentationItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  href?: string;
}

// Mode switcher props
export interface ModeSwitcherProps {
  toggleMode: () => void;
  isDark: boolean;
}

// Generic component props
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Animation variants for framer-motion
export interface AnimationVariants {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
}

// State management types
export interface SidebarState {
  openIndex: number | null;
  activeSection: string | null;
  progressMap: ProgressMap;
}

export interface ContentState {
  selectedSizeIndex: number;
}

// Event handlers
export type ClickHandler = () => void;
export type MenuToggleHandler = (index: number) => void;
export type ScrollHandler = () => void;

// CSS class names
export type CSSClassName = string;

// HTML attributes
export interface HTMLAttributes {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
