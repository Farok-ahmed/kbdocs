"use client";

import Link from "next/link";

interface Props {
  isHelpDesk: boolean;
}

export default function TopBar({ isHelpDesk }: Props) {
  if (!isHelpDesk) return <></>;

  return (
    <div className="header_top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <ul className="menu list-unstyled">
              <li>
                <Link href="/docs">Docs</Link>
              </li>
              <li>
                <Link href="/community">Community</Link>
              </li>
              <li>
                <Link href="/about-support">About Support</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="menu right-menu list-unstyled">
              <li>
                <Link href="/login">Log In</Link>
              </li>
              <li>
                <Link href="/register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
