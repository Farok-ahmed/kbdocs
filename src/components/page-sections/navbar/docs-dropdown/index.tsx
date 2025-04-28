import Link from "next/link";
import { docsDropDownMenu } from "./menu";
import { useState } from "react";

export default function DocsDropDown() {
    const [selected, setSelected] = useState(docsDropDownMenu[0].slug);

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
                                const isActive = selected === item.slug;
                                // const href = `#v-pills-${item.slug}`;
                                const href = ``;

                                return (
                                    <li
                                        className={`nav-item ${
                                            isActive ? "active" : ""
                                        }`}
                                        key={item.slug}
                                        onMouseEnter={() =>
                                            setSelected(item.slug)
                                        }
                                    >
                                        <Link
                                            className={`nav-link`}
                                            id={`v-pills-${item.slug}-tab`}
                                            data-toggle="pill"
                                            href={href}
                                            role="tab"
                                            aria-controls={`v-pills-${item.slug}`}
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
                        <div
                            className="tab-content tabContent"
                            id="v-pills-tabContent"
                        >
                            {docsDropDownMenu.map((item, i) => {
                                const isActive = selected === item.slug;
                                const firstRow = item.items.slice(0, 5);
                                const secondRow = item.items.slice(5);
                                const rows = [firstRow, secondRow];

                                return (
                                    <div
                                        className={`tab-pane fade ${
                                            isActive ? "active show" : ""
                                        }`}
                                        id={`v-pills-${item.slug}`}
                                        role="tabpanel"
                                        aria-labelledby={`v-pills-${item.slug}-tab`}
                                        key={item.slug}
                                    >
                                        <div className="d-flex">
                                            {rows.map((items, j) => {
                                                return (
                                                    <ul
                                                        key={`row-${j}`}
                                                        className="list-unstyled tab_list"
                                                    >
                                                        {items.map(
                                                            (subItem, k) => (
                                                                <li
                                                                    key={
                                                                        subItem.link +
                                                                        i +
                                                                        j +
                                                                        k
                                                                    }
                                                                >
                                                                    <Link
                                                                        href={
                                                                            subItem.link
                                                                        }
                                                                    >
                                                                        {
                                                                            subItem.title
                                                                        }
                                                                    </Link>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                );
                                            })}
                                        </div>
                                        <div className="text">
                                            <Link href="/categories">
                                                <p>More Categories</p>
                                            </Link>
                                            <Link href="/doclist">
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
