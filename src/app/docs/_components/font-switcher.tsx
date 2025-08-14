import Link from "next/link";

export default function FontSwitcher() {
  return (
    <div
      id="font-switcher"
      className="d-flex justify-content-between align-items-center"
    >
      <div id="rvfs-controllers" className="fontsize-controllers group">
        <div id="rvfs-controllers" className="fontsize-controllers group">
          <div className="btn-group">
            <Link
              href="#"
              className="rvfs-decrease btn"
              title="Decrease font size"
            >
              A-
            </Link>
            <Link href="#" className="rvfs-reset btn" title="Default font size">
              A
            </Link>
            <Link
              href="#"
              className="rvfs-increase btn"
              title="Increase font size"
            >
              A+
            </Link>
          </div>
        </div>
      </div>
      <Link href="javascript:window.print()" className="print">
        <i className="icon_printer"></i>
      </Link>
    </div>
  );
}
