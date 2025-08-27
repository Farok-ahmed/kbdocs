import Link from "next/link";

const ButtonStyle = () => {
  return (
    <>
      <div className="button_inner">
        <h4 className="h4">All Button Style</h4>
        <h6 className="h6 m-0">Button sizes</h6>
        <div className="button_inner_one">
          <Link href="#" className="action_btn btn_small">
            Docs
          </Link>
          <Link href="#" className="action_btn btn_small_two">
            KbDoc
          </Link>
          <Link href="#" className="action_btn btn_small_three">
            KbDoc
          </Link>
          <Link href="#" className="action_btn btn_bg">
            KbDoc
          </Link>
          <Link href="#" className="action_btn btn_radious_none">
            KbDoc
          </Link>
          <Link href="#" className="action_btn btn_radious_45">
            KbDoc
          </Link>
        </div>
      </div>
      <div className="button_inner">
        <h6 className="h6 m-0">Button border sizes</h6>
        <div className="button_inner_one">
          <Link href="#" className="doc_border_btn btn_small">
            Docs
          </Link>
          <Link href="#" className="doc_border_btn btn_small_two">
            KbDoc
          </Link>
          <Link href="#" className="doc_border_btn doc_border_btn_two">
            KbDoc
          </Link>
          <Link href="#" className="doc_border_btn btn_bg">
            KbDoc
          </Link>
          <Link href="#" className="doc_border_btn btn_radious_none">
            KbDoc
          </Link>
          <Link href="#" className="doc_border_btn btn_radious_45">
            KbDoc
          </Link>
        </div>
      </div>
      <div className="button_inner">
        <h6 className="h6 m-0">Button with icon</h6>
        <div className="button_inner_one">
          <Link className="nav_btn icon_btn" href="#">
            <i className="icon_profile"></i>Log In
          </Link>
          <Link href="#" className="doc_border_btn arrow_btn_medium">
            View All Docs<i className="arrow_right"></i>
          </Link>
          <Link href="/register" className="doc_border_btn arrow_btn_big">
            Get Started<i className="icon_chat_alt"></i>
          </Link>
          <Link className="nav_btn icon_btn arrow_btn_small" href="#">
            <i className="icon_house_alt"></i>View All Docs
          </Link>
          <Link className="nav_btn icon_btn arrow_btn_small_two" href="#">
            <i className="icon_documents_alt"></i>All Docs
          </Link>
        </div>
      </div>
    </>
  );
};

export default ButtonStyle;
