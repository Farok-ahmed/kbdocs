import { FaMoon } from "react-icons/fa";

interface Props {
  isDark: boolean;
  toggleMode: () => void;
}

export default function ModeSwitcher({ isDark, toggleMode }: Props) {
  return (
    <div className="doc_switch">
      <label htmlFor="something" className="tab-btn tab-btns">
        <i
          className="icon_lightbulb_alt"
          style={{ color: !isDark ? "#10b3d6" : "" }}
        ></i>
      </label>
      <input
        onChange={toggleMode}
        type="checkbox"
        name="something"
        id="something"
        className="tab_switcher"
      />
      <label htmlFor="something" className="tab-btn">
        <FaMoon />
      </label>
    </div>
  );
}
