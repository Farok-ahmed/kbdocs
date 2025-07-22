"use client";

import { useEffect, useState } from "react";
import Select from "react-select";

export type SelectOption = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};

type SelectProps = {
  options: SelectOption[];
  id?: string;
  name?: string;
  className?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  setSelectedOS?: (os: string) => void; // Optional prop for setting selected OS
  isDark?: boolean; // Optional prop for dark mode styling
};

export default function CustomSelect({
  options,
  id = "customSelect",
  name = "select",
  className = "",
  defaultValue = "",
  onChange,
  setSelectedOS,
  isDark,
}: SelectProps) {
  // Client-side only rendering to avoid hydration mismatch
  const [isMounted, setIsMounted] = useState(false);

  // Set up mounting state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Format options with plain text labels for server-side rendering
  const selectOptions = options.map((option) => ({
    value: option.value,
    label: option.label,
    icon: option.icon,
  }));

  // Find default option if provided
  const defaultOption =
    selectOptions.find((opt) => opt.value === defaultValue) ||
    selectOptions[0] ||
    null;

  // State to track selected option
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  // Update selected option when defaultValue changes (for controlled components)
  useEffect(() => {
    const newOption = selectOptions.find((opt) => opt.value === defaultValue);
    if (newOption && newOption.value !== selectedOption?.value) {
      setSelectedOption(newOption);
    }
  }, [defaultValue, selectOptions, selectedOption?.value]);

  // Handle selection change
  const handleChange = (selected: any) => {
    setSelectedOption(selected);

    // Call the onChange prop if provided
    if (onChange && selected) {
      onChange(selected.value);
    }

    // Call the optional setSelectedOS function if provided (legacy support)
    if (setSelectedOS && selected) {
      setSelectedOS(selected.value);
    }
  };

  // Custom formatting component for options
  const formatOptionLabel = ({ value, label, icon }: SelectOption) => (
    <div className="d-flex align-items-center" style={{ minWidth: 90 }}>
      {icon && <span className="mr-2">{icon}</span>}
      <span>{label}</span>
    </div>
  );

  // Return a simple placeholder until client-side hydration is complete
  if (!isMounted) {
    return (
      <div
        className={`bootstrap-select placeholder ${className}`}
        style={{ height: "100%" }}
      >
        <div className="form-control">
          {defaultOption?.label || "Select..."}
        </div>
      </div>
    );
  }

  return (
    <Select
      id={id}
      name={name}
      className={`bootstrap-select ${className}`}
      classNamePrefix="select"
      options={selectOptions}
      value={selectedOption}
      onChange={handleChange}
      formatOptionLabel={formatOptionLabel}
      styles={{
        control: (base) => ({
          ...base,
          padding: 8,
          minHeight: "38px",
          height: "100%",
          borderRadius: 0,
          border: `1px solid ${isDark ? "#444" : "#ced4da"}`,
          backgroundColor: isDark ? "#2c303a" : "white",
          color: isDark ? "#f1f1f1" : "#212529",
          boxShadow: "none",
          "&:hover": {
            border: "1px solid #ced4da",
          },
        }),
        menu: (base) => ({
          ...base,
          backgroundColor: isDark ? "#2c303a" : "white",
          color: isDark ? "#f1f1f1" : "#212529",
          zIndex: 9999,
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isSelected
            ? "#007bff"
            : state.isFocused
            ? isDark
              ? "#2c303a"
              : "#f8f9fa"
            : isDark
            ? "#2c2c2c"
            : "white",
          color: state.isSelected ? "white" : isDark ? "#f1f1f1" : "#212529",
          cursor: "pointer",
          padding: "8px 12px",
        }),
        singleValue: (base) => ({
          ...base,
          color: isDark ? "#f1f1f1" : "#212529",
        }),
        indicatorSeparator: (base) => ({ ...base, width: 0 }),
        dropdownIndicator: (base) => ({
          ...base,
          color: isDark ? "#f1f1f1" : "#212529",
          "&:hover": {
            color: isDark ? "#fff" : "#000",
          },
        }),
        input: (base) => ({
          ...base,
          color: isDark ? "#f1f1f1" : "#212529",
        }),
        placeholder: (base) => ({
          ...base,
          color: isDark ? "#aaa" : "#6c757d",
        }),
      }}
      isSearchable={false}
    />
  );
}
