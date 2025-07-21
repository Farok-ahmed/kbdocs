import Link from "next/link";
import React from "react";

const Documentation: React.FC = () => {
  return (
    <>
      <article className="documentation_body doc-section pt-0" id="doc">
        <div className="shortcode_title">
          <h2>Documentation</h2>
          <p>
            <span>Welcome to KbDoc !</span> Get familiar with the Stripe
            products and explore their features:
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="media documentation_item">
              <div className="icon">
                <img src="/img/home_one/icon/folder.png" alt="" />
              </div>
              <div className="media-body">
                <Link href="#">
                  <h5>Working with Docs</h5>
                </Link>
                <p>He lost his bottle bubble and squeak knackered.!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="media documentation_item">
              <div className="icon">
                <img src="/img/home_one/icon/envelope.png" alt="" />
              </div>
              <div className="media-body">
                <Link href="#">
                  <h5>Formatting Content</h5>
                </Link>
                <p>He lost his bottle bubble and squeak knackered.!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="media documentation_item">
              <div className="icon">
                <img src="/img/home_one/icon/coding.png" alt="" />
              </div>
              <div className="media-body">
                <Link href="#">
                  <h5>Development</h5>
                </Link>
                <p>He lost his bottle bubble and squeak knackered.!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="media documentation_item">
              <div className="icon">
                <img src="/img/home_one/icon/smartphone.png" alt="" />
              </div>
              <div className="media-body">
                <Link href="#">
                  <h5>Mobile App</h5>
                </Link>
                <p>He lost his bottle bubble and squeak knackered.!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="media documentation_item">
              <div className="icon">
                <img src="/img/home_one/icon/management.png" alt="" />
              </div>
              <div className="media-body">
                <Link href="#">
                  <h5>Account Management</h5>
                </Link>
                <p>He lost his bottle bubble and squeak knackered.!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="media documentation_item">
              <div className="icon">
                <img src="/img/home_one/icon/briefcase.png" alt="" />
              </div>
              <div className="media-body">
                <Link href="#">
                  <h5>Shortcodes</h5>
                </Link>
                <p>He lost his bottle bubble and squeak knackered.!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="media documentation_item">
              <div className="icon">
                <img src="/img/home_one/icon/newspaper.png" alt="" />
              </div>
              <div className="media-body">
                <Link href="#">
                  <h5>Productivity</h5>
                </Link>
                <p>He lost his bottle bubble and squeak knackered.!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="media documentation_item">
              <div className="icon">
                <img src="/img/side-nav/issuin.png" alt="" />
              </div>
              <div className="media-body">
                <Link href="#">
                  <h5>Issuing</h5>
                </Link>
                <p>He lost his bottle bubble and squeak knackered.!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="media documentation_item">
              <div className="icon">
                <img src="/img/home_one/icon/color-palette.png" alt="" />
              </div>
              <div className="media-body">
                <Link href="#">
                  <h5>Introduction</h5>
                </Link>
                <p>He lost his bottle bubble and squeak knackered.!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="media documentation_item">
              <div className="icon">
                <img src="/img/side-nav/terminals.png" alt="" />
              </div>
              <div className="media-body">
                <Link href="#">
                  <h5>Terminal</h5>
                </Link>
                <p>He lost his bottle bubble and squeak knackered.!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="media documentation_item">
              <div className="icon">
                <img src="/img/home_one/icon/android.png" alt="" />
              </div>
              <div className="media-body">
                <Link href="#">
                  <h5>Getting Started</h5>
                </Link>
                <p>He lost his bottle bubble and squeak knackered.!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="media documentation_item">
              <div className="icon">
                <img src="/img/home_one/icon/lock.png" alt="" />
              </div>
              <div className="media-body">
                <Link href="#">
                  <h5>This Document</h5>
                </Link>
                <p>He lost his bottle bubble and squeak knackered.!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border_bottom" />
      </article>
    </>
  );
};

export default Documentation;
