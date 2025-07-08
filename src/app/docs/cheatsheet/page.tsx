import Link from "next/link";
import CheatsheetAccordion from "./_components/accordion-data";
// import CheatsheetAccordion from "./_components/accordion-data";

const CheatsheetPage = () => {
  return (
    <>
      <div id="post" className="shortcode_info rvfs-4" data-rvfs={4}>
        <div className="shortcode_title">
          <h1>Cheatsheet</h1>
          <p>
            <span>Welcome to KbDoc !</span> Get familiar with the Stripe
            products and explore their features, What bind does is it takes a
            snapshot of the values of variables that you are passing to
            functions,
          </p>
        </div>
        <CheatsheetAccordion />
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

export default CheatsheetPage;
