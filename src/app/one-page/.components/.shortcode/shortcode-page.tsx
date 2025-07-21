import Accordion from "@/app/docs/shortcodes/accordion/_components/accordion";
import ToggleTwo from "@/app/docs/shortcodes/accordion/_components/accordion-two";
import ImageLightbox from "@/app/docs/shortcodes/lightbox/.components/image-lightbox";
import BasicTables from "@/app/docs/shortcodes/table/_components/basic-tables";
import HoverTables from "@/app/docs/shortcodes/table/_components/hover-tables";
import SimpleTables from "@/app/docs/shortcodes/table/_components/simple-tables";
import StripedTables from "@/app/docs/shortcodes/table/_components/striped-tables";
import React from "react";
import CustomTabs from "./../../../docs/shortcodes/tab/_components/CustomTabs";
import DynamicTabs from "./../../../docs/shortcodes/tab/_components/process-tab";
import CanUse from "./can-use";
import Footnote from "./footnote";
import GettingStarted from "./getting-started";
import Notice from "./notice";

const ShortcodePage: React.FC = () => {
  return (
    <article
      className="documentation_body shortcode_text doc-section"
      id="shortcodes"
    >
      <GettingStarted />
      <div className="border_bottom" />
      <CustomTabs />
      <div className="shortcode_title">
        <h4 className="s_title smooth-scroll-heading" id="tab2">
          Process Tab
        </h4>
        <p>
          Try the KbDoc API in seconds. Create your first customer, charge, and
          more by following the step below.
        </p>
      </div>
      <DynamicTabs />
      <div className="border_bottom" />
      <div className="shortcode_info" id="accordian">
        <div className="shortcode_title">
          <h2>Accordian</h2>
          <p>
            <span>Welcome to KbDoc !</span> Get familiar with the Stripe
            products and explore their features:
          </p>
        </div>
        <ToggleTwo title={false} />
        <Accordion />
      </div>
      <div className="shortcode_info" id="notices">
        <Notice />
      </div>
      <div className="shortcode_info">
        <h1 className="s_title" id="table">
          Table
        </h1>
        <SimpleTables />
        <BasicTables />
        <StripedTables />
        <HoverTables />
      </div>
      <div className="shortcode_info" id="lightbox">
        <div className="shortcode_title">
          <h4 className="s_title">Image Lightbox</h4>
          <p>
            A Dashboard is a convenient way to get an overview of the the
            current status of your tasks and monitorthe progress of your team.
          </p>
        </div>
        <ImageLightbox />
      </div>
      <div className="shortcode_info" id="footnotes">
        <Footnote />
      </div>
      <div className="shortcode_info" id="can-use">
        <CanUse />
      </div>
    </article>
  );
};

export default ShortcodePage;
