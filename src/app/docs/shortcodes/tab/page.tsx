"use client";
import DocsLayout from "@/components/DocsLayout";
import Link from "next/link";
import CustomTabs from "./_components/CustomTabs";
import DynamicTabs from "./_components/process-tab";

const TabPage = () => {
  return (
    <>
      <DocsLayout>
        <div id="post" className="shortcode_info rvfs-4" data-rvfs={4}>
          <div className="shortcode_title">
            <h1>Shortcodes</h1>
            <p>
              <span>Welcome to KbDoc !</span> Get familiar with the Stripe
              products and explore their features:
            </p>
          </div>
          <CustomTabs />

          <div className="shortcode_title">
            <h4 className="s_title" id="tab2">
              Process Tab
            </h4>
            <p>
              Try the KbDoc API in seconds. Create your first customer, charge,
              and more by following the step below.
            </p>
          </div>
          <DynamicTabs />
          <footer>
            <div className="border_bottom" />
            <div className="row feedback_link">
              <div className="col-lg-6">
                <h6>
                  <i className="icon_mail_alt" />
                  Still stuck?{" "}
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
                  Was this page helpful?{" "}
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

export default TabPage;
