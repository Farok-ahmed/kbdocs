import Select from "@/components/select";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";

const osOptions = [
    { value: "windows", label: "Windows", icon: <FaWindows /> },
    { value: "ios", label: "iOS", icon: <FaApple /> },
    { value: "linux", label: "Linux", icon: <FaLinux /> },
];

export default function SelectDemo() {
    return (
        <Select
            options={osOptions}
            defaultValue="linux"
            className="mb-4"
        />
    );
}
