import Link from "next/link";
import { useState } from "react";
import { docsDropDownMenu } from "./menu";

export default function DocsDropDown() {
  const [selected, setSelected] = useState(docsDropDownMenu[0].href);

  return (
    <ul className="dropdown-menu">
      <li>
        <div className="row">
          <div className="col-lg-5 tabHeader">
            <ul
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {docsDropDownMenu.map((item, i) => {
                const isActive = selected === item.href;
                // const href = `#v-pills-${item.href}`;
                const href = ``;

                return (
                  <li
                    className={`nav-item ${isActive ? "active" : ""}`}
                    key={item.href}
                    onMouseEnter={() => setSelected(item.href)}
                  >
                    <Link
                      className={`nav-href`}
                      id={`v-pills-${item.href}-tab`}
                      data-toggle="pill"
                      href={href}
                      role="tab"
                      aria-controls={`v-pills-${item.href}`}
                      aria-selected={isActive}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-lg-7">
            <div className="tab-content tabContent" id="v-pills-tabContent">
              {docsDropDownMenu.map((item, i) => {
                const isActive = selected === item.href;
                const firstRow = item.items.slice(0, 5);
                const secondRow = item.items.slice(5);
                const rows = [firstRow, secondRow];

                return (
                  <div
                    className={`tab-pane fade ${isActive ? "active show" : ""}`}
                    id={`v-pills-${item.href}`}
                    role="tabpanel"
                    aria-labelledby={`v-pills-${item.href}-tab`}
                    key={item.href}
                  >
                    <div className="d-flex">
                      {rows.map((items, j) => {
                        return (
                          <ul
                            key={`row-${j}`}
                            className="list-unstyled tab_list"
                          >
                            {items.map((subItem, k) => (
                              <li key={subItem.href + i + j + k}>
                                <Link href={subItem.href}>{subItem.title}</Link>
                              </li>
                            ))}
                          </ul>
                        );
                      })}
                    </div>
                    <div className="text">
                      <Link href="/categories">
                        <p>More Categories</p>
                      </Link>
                      <Link href="/docs">
                        <p>All docs</p>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}
