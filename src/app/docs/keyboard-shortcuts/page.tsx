import Link from "next/link";

const KeyboardShortcuts = () => {
  return (
    <>
      <div id="post" className="shortcode_info rvfs-4" data-rvfs={4}>
        <div className="shortcode_title">
          <h1>KbDoc keyboard shortcuts</h1>
          <p>
            Switch the OS dropdown on the right sidebar to see the specific
            keyboard shortcuts according to your OS. Keyboard shortcuts help you
            navigate Slack with minimal effort. You can see a quick list of
            shortcuts by pressing <kbd>⌘</kbd>
            <kbd>/</kbd> (Mac) and <kbd>Ctrl</kbd>
            <kbd>/</kbd> (Windows/Linux), or take a look at the detailed lists
            below.
          </p>
        </div>
        <div className="shortcode_title">
          <h4 className="s_title" id="list-shortcuts">
            Keyboard shortcuts in List Style
          </h4>
          <p>
            Note: You can't set custom keyboard shortcuts for Slack, but we may
            add this in the future. For now, use the shortcut above to see a
            quick list.
          </p>
        </div>
        <ul className="list-style">
          <li>
            Align right – click <strong>Align</strong> <strong>right</strong> or
            use the shortcut
            <span className="windows">
              <kbd>Ctrl</kbd>
              <kbd>Shift</kbd>
              <kbd>K</kbd>
            </span>
            <span className="ios" style={{ display: "none" }}>
              <kbd>⌘</kbd>
              <kbd>Shift</kbd>
              <kbd>K</kbd>
            </span>
          </li>
          <li>
            Align left – click <strong>Align left </strong>or<strong> </strong>
            use
            <span className="windows">
              <kbd>Alt</kbd> <kbd>A</kbd>
            </span>
            <span className="ios" style={{ display: "none" }}>
              <kbd>⌘</kbd> <kbd>A</kbd>
            </span>
          </li>
          <li>
            Align top – click&nbsp;<strong>Align top</strong>&nbsp;or use&nbsp;
            <span className="windows">
              <kbd>Alt</kbd> <kbd>W</kbd>
            </span>
            <span className="ios" style={{ display: "none" }}>
              <kbd>⌘</kbd> <kbd>W</kbd>
            </span>
          </li>
          <li>
            Align bottom – click <strong>Align bottom</strong> or use
            <span className="windows">
              <kbd>Alt</kbd> <kbd>S</kbd>
            </span>
            <span className="ios" style={{ display: "none" }}>
              <kbd>⌘</kbd> <kbd>S</kbd>
            </span>
          </li>
          <li>
            Align center – click <strong>Align center </strong>or use
            <span className="windows">
              <kbd>Alt</kbd> <kbd>X</kbd>
            </span>
            <span className="ios" style={{ display: "none" }}>
              <kbd>⌘</kbd> <kbd>X</kbd>
            </span>
          </li>
          <li>
            Align middle – click <strong>Align middle</strong> or use
            <span className="windows">
              <kbd>Alt</kbd> <kbd>Y</kbd>
            </span>
            <span className="ios" style={{ display: "none" }}>
              <kbd>⌘</kbd> <kbd>Y</kbd>
            </span>
          </li>
        </ul>
        <div className="shortcode_title">
          <h4 className="s_title" id="table-shortcuts">
            Keyboard shortcuts in Table
          </h4>
          <p>
            Using an international keyboard? Some shortcuts may differ from
            what’s listed below (they're marked with an * asterisk). See Manage
            your keyboard layout for shortcuts specific to your keyboard.
          </p>
        </div>
        <table className="table table_shortcode">
          <thead>
            <tr>
              <th>
                <strong>Action</strong>
              </th>
              <th>
                <strong>Shortcut Key</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>Jump to a conversation</p>
              </td>
              <td>
                <span className="windows">
                  <kbd>ctrl</kbd>
                  <kbd>K</kbd>
                </span>
                <span className="ios" style={{ display: "none" }}>
                  <kbd>⌘</kbd>
                  <kbd>K</kbd>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <p>Move focus to the previous section</p>
              </td>
              <td>
                <kbd>Shift</kbd>
                <kbd>F6</kbd>
              </td>
            </tr>
            <tr>
              <td>
                <p>Browse direct messages</p>
              </td>
              <td>
                <span className="windows">
                  <kbd>ctrl</kbd>
                  <kbd>Shift</kbd>
                  <kbd>K</kbd>
                </span>
                <span className="ios" style={{ display: "none" }}>
                  <kbd>⌘</kbd>
                  <kbd>Shift</kbd>
                  <kbd>K</kbd>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <p>Browse channels</p>
              </td>
              <td>
                <span className="windows">
                  <kbd>ctrl</kbd>
                  <kbd>Shift</kbd>
                  <kbd>L</kbd>
                </span>
                <span className="ios" style={{ display: "none" }}>
                  <kbd>⌘</kbd>
                  <kbd>Shift</kbd>
                  <kbd>L</kbd>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <p>Compose a new message</p>
              </td>
              <td>
                <span className="windows">
                  <kbd>ctrl</kbd>
                  <kbd>N</kbd>
                </span>
                <span className="ios" style={{ display: "none" }}>
                  <kbd>⌘</kbd>
                  <kbd>N</kbd>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <p>Open the Threads view**</p>
              </td>
              <td>
                <span className="windows">
                  <kbd>ctrl</kbd>
                  <kbd>Shift</kbd>
                  <kbd>T</kbd>
                </span>
                <span className="ios" style={{ display: "none" }}>
                  <kbd>⌘</kbd>
                  <kbd>Shift</kbd>
                  <kbd>T</kbd>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <p>Previous unread channel or&nbsp;DM</p>
              </td>
              <td>
                <kbd>Option</kbd>
                <kbd>Shift</kbd>
                <kbd>↑</kbd>
              </td>
            </tr>
            <tr>
              <td>
                <p>Next&nbsp;unread channel or DM</p>
              </td>
              <td>
                <kbd>Option</kbd>
                <kbd>Shift</kbd>
                <kbd>↓</kbd>
              </td>
            </tr>
            <tr>
              <td>
                <p>Previous channel or DM visited</p>
              </td>
              <td>
                <span className="windows">
                  <kbd>ctrl</kbd>
                  <kbd>[</kbd>
                </span>
                <span className="ios" style={{ display: "none" }}>
                  <kbd>⌘</kbd>
                  <kbd>[</kbd>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <p>Collapse or open the right sidebar</p>
              </td>
              <td>
                <span className="windows">
                  <kbd>ctrl</kbd>
                  <kbd>.</kbd>
                </span>
                <span className="ios" style={{ display: "none" }}>
                  <kbd>⌘</kbd>
                  <kbd>.</kbd>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <p>Collapse or open the left sidebar</p>
              </td>
              <td>
                <span className="windows">
                  <kbd>ctrl</kbd>
                  <kbd>Shift</kbd>
                  <kbd>D</kbd>
                </span>
                <span className="ios" style={{ display: "none" }}>
                  <kbd>⌘</kbd>
                  <kbd>Shift</kbd>
                  <kbd>D</kbd>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <footer>
          <div className="border_bottom" />
          <div className="row feedback_link">
            <div className="col-lg-6">
              <h6>
                <i className="icon_mail_alt" />
                Still stuck?
                <Link href="#" data-toggle="modal" data-target="#exampleModal3">
                  How can we help?
                </Link>
              </h6>
            </div>
            <div className="col-lg-6">
              <p>
                Was this page helpful?
                <Link href="#" className="h_btn">
                  Yes
                </Link>
                <Link href="#" className="h_btn">
                  No
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default KeyboardShortcuts;
