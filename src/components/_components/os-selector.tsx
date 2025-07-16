import Select from "@/components/select";
import { OSType, useOS } from "@/contexts/os-context";

export default function OSSelector() {
  const { selectedOS, setSelectedOS, options } = useOS();

  // Handle OS selection change with proper typing
  const handleOSChange = (value: string) => {
    setSelectedOS(value as OSType);
  };

  // Convert OSOption[] to SelectOption[] format
  const selectOptions = options.map((option) => ({
    value: option.value,
    label: option.label,
    icon: option.icon,
  }));

  return (
    <Select
      options={selectOptions}
      onChange={handleOSChange}
      defaultValue={selectedOS}
      className="mb-4"
    />
  );
}
