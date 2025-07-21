import Link from "next/link";

interface FontSwitcherProps {
  onIncrease: () => void;
  onDecrease: () => void;
  onReset: () => void;
}

export default function FontSwitcher({
  onIncrease,
  onDecrease,
  onReset,
}: FontSwitcherProps) {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div
      id="font-switcher"
      className="d-flex justify-content-between align-items-center"
    >
      <div id="rvfs-controllers" className="fontsize-controllers group">
        <div id="rvfs-controllers" className="fontsize-controllers group">
          <div className="btn-group">
            <Link
              onClick={onDecrease}
              href="#"
              className="rvfs-decrease btn"
              title="Decrease font size"
            >
              A-
            </Link>
            <Link
              onClick={onReset}
              href="#"
              className="rvfs-reset btn"
              title="Default font size"
            >
              A
            </Link>
            <Link
              onClick={onIncrease}
              href="#"
              className="rvfs-increase btn"
              title="Increase font size"
            >
              A+
            </Link>
          </div>
        </div>
      </div>
      <Link href="" onClick={handlePrint} className="print">
        <i className="icon_printer"></i>
      </Link>
    </div>
  );
}
