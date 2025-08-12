import android from "@/assets/img/home_one/icon/android.png";
import briefcase from "@/assets/img/home_one/icon/briefcase.png";
import coding from "@/assets/img/home_one/icon/coding.png";
import colorPalette from "@/assets/img/home_one/icon/color-palette.png";
import envelope from "@/assets/img/home_one/icon/envelope.png";
import folder from "@/assets/img/home_one/icon/folder.png";
import lock from "@/assets/img/home_one/icon/lock.png";
import management from "@/assets/img/home_one/icon/management.png";
import newspaper from "@/assets/img/home_one/icon/newspaper.png";
import smartphone from "@/assets/img/home_one/icon/smartphone.png";
import issuin from "@/assets/img/side-nav/issuin.png";
import terminals from "@/assets/img/side-nav/terminals.png";
import Image from "next/image";
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
                <Image src={folder} alt="" />
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
                <Image src={envelope} alt="" />
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
                <Image src={coding} alt="" />
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
                <Image src={smartphone} alt="" />
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
                <Image src={management} alt="" />
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
                <Image src={briefcase} alt="" />
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
                <Image src={newspaper} alt="" />
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
                <Image src={issuin} alt="" />
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
                <Image src={colorPalette} alt="" />
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
                <Image src={terminals} alt="" />
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
                <Image src={android} alt="" />
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
                <Image src={lock} alt="" />
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
