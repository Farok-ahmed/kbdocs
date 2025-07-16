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
};

export default function CustomSelect({
  options,
  id = "customSelect",
  name = "select",
  className = "",
  defaultValue = "",
  onChange,
  setSelectedOS,
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
        // Custom styles to match Bootstrap look
        control: (base) => ({
          ...base,
          padding: 8,
          minHeight: "38px",
          height: "100%",
          borderRadius: 0,
          border: "1px solid #ced4da",
          boxShadow: "none",
          "&:hover": {
            border: "1px solid #ced4da",
          },
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isSelected
            ? "#007bff"
            : state.isFocused
            ? "#f8f9fa"
            : undefined,
          color: state.isSelected ? "white" : "inherit",
          cursor: "pointer",
          padding: "8px 12px",
        }),
        indicatorSeparator: (base) => ({ ...base, width: 0 }),
      }}
      isSearchable={false}
    />
  );
}
