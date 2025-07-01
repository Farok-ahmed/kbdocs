const ButtonStyle = () => {
  return (
    <>
      <div className="button_inner">
        <h4 className="h4">All Button Style</h4>
        <h6 className="h6 m-0">Button sizes</h6>
        <div className="button_inner_one">
          <a href="#" className="action_btn btn_small">
            Docs
          </a>
          <a href="#" className="action_btn btn_small_two">
            KbDoc
          </a>
          <a href="#" className="action_btn btn_small_three">
            KbDoc
          </a>
          <a href="#" className="action_btn btn_bg">
            KbDoc
          </a>
          <a href="#" className="action_btn btn_radious_none">
            KbDoc
          </a>
          <a href="#" className="action_btn btn_radious_45">
            KbDoc
          </a>
        </div>
      </div>
      <div className="button_inner">
        <h6 className="h6 m-0">Button border sizes</h6>
        <div className="button_inner_one">
          <a href="#" className="doc_border_btn btn_small">
            Docs
          </a>
          <a href="#" className="doc_border_btn btn_small_two">
            KbDoc
          </a>
          <a href="#" className="doc_border_btn doc_border_btn_two">
            KbDoc
          </a>
          <a href="#" className="doc_border_btn btn_bg">
            KbDoc
          </a>
          <a href="#" className="doc_border_btn btn_radious_none">
            KbDoc
          </a>
          <a href="#" className="doc_border_btn btn_radious_45">
            KbDoc
          </a>
        </div>
      </div>
      <div className="button_inner">
        <h6 className="h6 m-0">Button with icon</h6>
        <div className="button_inner_one">
          <a className="nav_btn icon_btn" href="#">
            <i className="icon_profile"></i>Log In
          </a>
          <a href="#" className="doc_border_btn arrow_btn_medium">
            View All Docs<i className="arrow_right"></i>
          </a>
          <a href="#" className="doc_border_btn arrow_btn_big">
            Live Chat Now<i className="icon_chat_alt"></i>
          </a>
          <a className="nav_btn icon_btn arrow_btn_small" href="#">
            <i className="icon_house_alt"></i>View All Docs
          </a>
          <a className="nav_btn icon_btn arrow_btn_small_two" href="#">
            <i className="icon_documents_alt"></i>All Docs
          </a>
        </div>
      </div>
    </>
  );
};

export default ButtonStyle;
