const ContactInfo = () => {
  return (
    <>
      <div className="section_title text-left">
        <h2 className="h_title wow fadeInUp">Need to speak us?</h2>
      </div>
      <div className="get_info_inner">
        <div className="row get_info_item align-items-center justify-content-between">
          <div className="col-lg-4 col-sm-5">
            <div className="media">
              <img src="img/email.png" alt="" />
              <div className="media-body">
                <h5 className="h5 bold">Email</h5>
                <p>Monday to Friday</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-sm-7 d-flex align-items-center justify-content-between">
            <div className="time">
              Expected response time: <span>72 hours</span>
            </div>
            <a href="#" className="doc_border_btn doc_border_btn_two">
              Email Us
            </a>
          </div>
        </div>
        <div className="row get_info_item align-items-center justify-content-between">
          <div className="col-lg-4 col-sm-5">
            <div className="media">
              <img src="img/twitter.png" alt="" />
              <div className="media-body">
                <h5 className="h5 bold">Twitter</h5>
                <p>Monday to Friday</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-sm-7 d-flex align-items-center justify-content-between">
            <div className="time">
              Expected response time: <span>72 hours</span>
            </div>
            <a href="#" className="doc_border_btn doc_border_btn_two">
              Send Us a Tweet
            </a>
          </div>
        </div>
        <div className="row get_info_item align-items-center justify-content-between">
          <div className="col-lg-4 col-sm-5">
            <div className="media">
              <img src="img/community.png" alt="" />
              <div className="media-body">
                <h5 className="h5 bold">Community</h5>
                <p>Monday to Friday</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-sm-7 d-flex align-items-center justify-content-between">
            <div className="time">
              Expected response time: <span>72 hours</span>
            </div>
            <a href="#" className="doc_border_btn doc_border_btn_two">
              Ask The Community
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
