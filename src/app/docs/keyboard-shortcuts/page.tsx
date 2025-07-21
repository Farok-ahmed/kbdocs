"use client";
import DocsLayout from "@/components/DocsLayout";
import { useOS } from "@/contexts/os-context";
import Link from "next/link";

const KeyboardShortcuts = () => {
  const { selectedOS } = useOS();

  // Helper function to render OS-specific shortcuts
  const renderShortcut = (shortcuts: {
    windows: string[];
    ios: string[];
    linux: string[];
  }) => {
    const keys = shortcuts[selectedOS] || shortcuts.windows;
    return keys.map((key, index) => <kbd key={index}>{key}</kbd>);
  };

  // Helper function to get OS-specific display
  const getOSDisplay = (content: {
    windows: React.ReactNode;
    ios: React.ReactNode;
    linux: React.ReactNode;
  }) => {
    return content[selectedOS] || content.windows;
  };

  return (
    <>
      <DocsLayout>
        <div id="post" className="shortcode_info rvfs-4" data-rvfs={4}>
          <div className="shortcode_title">
            <h1>KbDoc keyboard shortcuts</h1>
            <p>
              Switch the OS dropdown on the right sidebar to see the specific
              keyboard shortcuts according to your OS. Keyboard shortcuts help
              you navigate Slack with minimal effort. You can see a quick list
              of shortcuts by pressing{" "}
              {getOSDisplay({
                windows: (
                  <>
                    <kbd>Ctrl</kbd>
                    <kbd>/</kbd>
                  </>
                ),
                ios: <kbd>/</kbd>,
                linux: (
                  <>
                    <kbd>Ctrl</kbd>
                    <kbd>/</kbd>
                  </>
                ),
              })}{" "}
              (
              {selectedOS === "ios"
                ? "Mac"
                : selectedOS === "linux"
                ? "Linux"
                : "Windows"}
              ), or take a look at the detailed lists below.
            </p>
          </div>
          <div className="shortcode_title">
            <h4 className="s_title smooth-scroll-heading" id="list-shortcuts">
              Keyboard shortcuts in List Style
            </h4>
            <p>
              Note: You can't set custom keyboard shortcuts for Slack, but we
              may add this in the future. For now, use the shortcut above to see
              a quick list.
            </p>
          </div>
          <ul className="list-style">
            <li>
              Align right – click <strong>Align</strong> <strong>right</strong>{" "}
              or use the shortcut{" "}
              {renderShortcut({
                windows: ["Ctrl", "Shift", "K"],
                ios: ["⌘", "Shift", "K"],
                linux: ["Ctrl", "Shift", "K"],
              })}
            </li>
            <li>
              Align left – click <strong>Align left </strong>or
              <strong> </strong>
              use{" "}
              {renderShortcut({
                windows: ["Alt", "A"],
                ios: ["⌘", "A"],
                linux: ["Alt", "A"],
              })}
            </li>
            <li>
              Align top – click&nbsp;<strong>Align top</strong>&nbsp;or
              use&nbsp;
              {renderShortcut({
                windows: ["Alt", "W"],
                ios: ["⌘", "W"],
                linux: ["Alt", "W"],
              })}
            </li>
            <li>
              Align bottom – click <strong>Align bottom</strong> or use{" "}
              {renderShortcut({
                windows: ["Alt", "S"],
                ios: ["⌘", "S"],
                linux: ["Alt", "S"],
              })}
            </li>
            <li>
              Align center – click <strong>Align center </strong>or use{" "}
              {renderShortcut({
                windows: ["Alt", "X"],
                ios: ["⌘", "X"],
                linux: ["Alt", "X"],
              })}
            </li>
            <li>
              Align middle – click <strong>Align middle</strong> or use{" "}
              {renderShortcut({
                windows: ["Alt", "Y"],
                ios: ["⌘", "Y"],
                linux: ["Alt", "Y"],
              })}
            </li>
          </ul>
          <div className="shortcode_title">
            <h4 className="s_title smooth-scroll-heading" id="table-shortcuts">
              Keyboard shortcuts in Table
            </h4>
            <p>
              Using an international keyboard? Some shortcuts may differ from
              what’s listed below (they're marked with an * asterisk). See
              Manage your keyboard layout for shortcuts specific to your
              keyboard.
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
                  {renderShortcut({
                    windows: ["Ctrl", "K"],
                    ios: ["⌘", "K"],
                    linux: ["Ctrl", "K"],
                  })}
                </td>
              </tr>
              <tr>
                <td>
                  <p>Move focus to the previous section</p>
                </td>
                <td>
                  {renderShortcut({
                    windows: ["Shift", "F6"],
                    ios: ["Shift", "F6"],
                    linux: ["Shift", "F6"],
                  })}
                </td>
              </tr>
              <tr>
                <td>
                  <p>Browse direct messages</p>
                </td>
                <td>
                  {renderShortcut({
                    windows: ["Ctrl", "Shift", "K"],
                    ios: ["⌘", "Shift", "K"],
                    linux: ["Ctrl", "Shift", "K"],
                  })}
                </td>
              </tr>
              <tr>
                <td>
                  <p>Browse channels</p>
                </td>
                <td>
                  {renderShortcut({
                    windows: ["Ctrl", "Shift", "L"],
                    ios: ["⌘", "Shift", "L"],
                    linux: ["Ctrl", "Shift", "L"],
                  })}
                </td>
              </tr>
              <tr>
                <td>
                  <p>Compose a new message</p>
                </td>
                <td>
                  {renderShortcut({
                    windows: ["Ctrl", "N"],
                    ios: ["⌘", "N"],
                    linux: ["Ctrl", "N"],
                  })}
                </td>
              </tr>
              <tr>
                <td>
                  <p>Open the Threads view**</p>
                </td>
                <td>
                  {renderShortcut({
                    windows: ["Ctrl", "Shift", "T"],
                    ios: ["⌘", "Shift", "T"],
                    linux: ["Ctrl", "Shift", "T"],
                  })}
                </td>
              </tr>
              <tr>
                <td>
                  <p>Previous unread channel or&nbsp;DM</p>
                </td>
                <td>
                  {renderShortcut({
                    windows: ["Alt", "Shift", "↑"],
                    ios: ["Option", "Shift", "↑"],
                    linux: ["Alt", "Shift", "↑"],
                  })}
                </td>
              </tr>
              <tr>
                <td>
                  <p>Next&nbsp;unread channel or DM</p>
                </td>
                <td>
                  {renderShortcut({
                    windows: ["Alt", "Shift", "↓"],
                    ios: ["Option", "Shift", "↓"],
                    linux: ["Alt", "Shift", "↓"],
                  })}
                </td>
              </tr>
              <tr>
                <td>
                  <p>Previous channel or DM visited</p>
                </td>
                <td>
                  {renderShortcut({
                    windows: ["Ctrl", "["],
                    ios: ["⌘", "["],
                    linux: ["Ctrl", "["],
                  })}
                </td>
              </tr>
              <tr>
                <td>
                  <p>Collapse or open the right sidebar</p>
                </td>
                <td>
                  {renderShortcut({
                    windows: ["Ctrl", "."],
                    ios: ["⌘", "."],
                    linux: ["Ctrl", "."],
                  })}
                </td>
              </tr>
              <tr>
                <td>
                  <p>Collapse or open the left sidebar</p>
                </td>
                <td>
                  {renderShortcut({
                    windows: ["Ctrl", "Shift", "D"],
                    ios: ["⌘", "Shift", "D"],
                    linux: ["Ctrl", "Shift", "D"],
                  })}
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
                  <Link
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModal3"
                  >
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
      </DocsLayout>
    </>
  );
};

export default KeyboardShortcuts;
