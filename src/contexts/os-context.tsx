"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";
import { FaApple, FaLinux, FaWindows } from "react-icons/fa";

// Define the available operating systems
export type OSType = "windows" | "linux" | "ios";

// Define the OS option type
export interface OSOption {
  value: OSType;
  label: string;
  icon: React.ReactElement;
}

// Define the context type
interface OSContextType {
  selectedOS: OSType;
  setSelectedOS: (os: OSType) => void;
  availableOS: OSType[];
  options: OSOption[];
}

// Create the context
const OSContext = createContext<OSContextType | undefined>(undefined);

// Provider component props
interface OSProviderProps {
  children: ReactNode;
  defaultOS?: OSType;
}

// OS Context Provider
export const OSProvider: React.FC<OSProviderProps> = ({
  children,
  defaultOS = "windows",
}) => {
  const [selectedOS, setSelectedOS] = useState<OSType>(defaultOS);

  const options: OSOption[] = [
    { value: "windows", label: "Windows", icon: <FaWindows /> },
    { value: "ios", label: "iOS", icon: <FaApple /> },
    { value: "linux", label: "Linux", icon: <FaLinux /> },
  ];

  const availableOS: OSType[] = ["windows", "linux", "ios"];

  const value: OSContextType = {
    selectedOS,
    setSelectedOS,
    availableOS,
    options,
  };

  return <OSContext.Provider value={value}>{children}</OSContext.Provider>;
};

// Custom hook to use the OS context
export const useOS = (): OSContextType => {
  const context = useContext(OSContext);

  if (context === undefined) {
    throw new Error("useOS must be used within an OSProvider");
  }

  return context;
};

// Helper functions for OS-specific operations
export const getOSDisplayName = (os: OSType): string => {
  const displayNames: Record<OSType, string> = {
    windows: "Windows",
    linux: "Linux",
    ios: "iOS",
  };

  return displayNames[os];
};

export const getOSIcon = (os: OSType): string => {
  const icons: Record<OSType, string> = {
    windows: "🪟",
    linux: "🐧",
    ios: "🍎",
  };

  return icons[os];
};

// Helper function to get OS option by value
export const getOSOption = (os: OSType): OSOption => {
  const options: OSOption[] = [
    { value: "windows", label: "Windows", icon: <FaWindows /> },
    { value: "ios", label: "iOS", icon: <FaApple /> },
    { value: "linux", label: "Linux", icon: <FaLinux /> },
  ];

  return options.find((option) => option.value === os) || options[0];
};
