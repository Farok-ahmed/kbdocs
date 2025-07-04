import BasicTables from "./_components/basic-tables";
import HoverTables from "./_components/hover-tables";
import SimpleTables from "./_components/simple-tables";
import StripedTables from "./_components/striped-tables";

const TablePage = () => {
  return (
    <>
      <div id="post" className="shortcode_info rvfs-4" data-rvfs={4}>
        <h1 className="s_title" id="table">
          Table
        </h1>
        <SimpleTables />
        <BasicTables />
        <StripedTables />
        <HoverTables />
        <footer>
          <div className="border_bottom" />
          <div className="row feedback_link">
            <div className="col-lg-6">
              <h6>
                <i className="icon_mail_alt" />
                Still stuck?{" "}
                <a href="#" data-toggle="modal" data-target="#exampleModal3">
                  How can we help?
                </a>
              </h6>
            </div>
            <div className="col-lg-6">
              <p>
                Was this page helpful?{" "}
                <a href="#" className="h_btn">
                  Yes
                </a>
                <a href="#" className="h_btn">
                  No
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TablePage;
