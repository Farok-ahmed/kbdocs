const ContactForm = () => {
  return (
    <div className="contact_info">
      <div className="section_title text-left">
        <h2 className="h_title wow fadeInUp">Let’s start the conversation</h2>
        <p>Please email us, we’ll happy to assist you.</p>
      </div>
      <form action="#" className="contact_form">
        <div className="form-group">
          <h6>What type of project you need?</h6>
          <div className="box_info">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="Checkone"
              />
              <label className="form-check-label" htmlFor="Checkone">
                Web Design
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="Checktwo"
              />
              <label className="form-check-label" htmlFor="Checktwo">
                Dashboard
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="Checkthree"
              />
              <label className="form-check-label" htmlFor="Checkthree">
                Mobile App
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="Checkfour"
              />
              <label className="form-check-label" htmlFor="Checkfour">
                Mockup
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="Checkfive"
              />
              <label className="form-check-label" htmlFor="Checkfive">
                Desktop App
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="Checksix"
              />
              <label className="form-check-label" htmlFor="Checksix">
                Ui kit
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <h6>Budget Range</h6>
          <div className="box_info">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="budgetOne"
                value="option1"
                checked=""
              />
              <label className="form-check-label" htmlFor="budgetOne">
                $1k
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="budgetTwo"
                value="option2"
                checked=""
              />
              <label className="form-check-label" htmlFor="budgetTwo">
                $2k
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="budgetThree"
                value="option3"
                checked=""
              />
              <label className="form-check-label" htmlFor="budgetThree">
                $2k to $3k
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="budgetFour"
                value="option4"
                checked=""
              />
              <label className="form-check-label" htmlFor="budgetFour">
                $4k to 5k
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="budgetFive"
                value="option5"
                checked=""
              />
              <label className="form-check-label" htmlFor="budgetFive">
                More then $6k
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <h6>Deadline</h6>
          <div className="box_info">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Radios"
                id="weekOne"
                value="1"
                checked=""
              />
              <label className="form-check-label" htmlFor="weekOne">
                1 week
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Radios"
                id="weekTwo"
                value="2"
                checked=""
              />
              <label className="form-check-label" htmlFor="weekTwo">
                2 week
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Radios"
                id="weekThree"
                value="3"
                checked=""
              />
              <label className="form-check-label" htmlFor="weekThree">
                3 week
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Radios"
                id="weekFour"
                value="4"
                checked=""
              />
              <label className="form-check-label" htmlFor="weekFour">
                4 week
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Radios"
                id="weekFive"
                value="5"
                checked=""
              />
              <label className="form-check-label" htmlFor="weekFive">
                5 week
              </label>
            </div>
          </div>
        </div>
        <div className="row contact_fill">
          <div className="col-lg-4 form-group">
            <h6>Full Name</h6>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Enter your name here"
            />
          </div>
          <div className="col-lg-4 form-group">
            <h6>Email</h6>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="info@KbDoc.com"
            />
          </div>
          <div className="col-lg-4 form-group">
            <h6>Phone no</h6>
            <input
              type="tel"
              className="form-control"
              name="tel"
              id="phone"
              placeholder="+462"
            />
          </div>
          <div className="col-lg-12 form-group">
            <h6>Message</h6>
            <textarea
              className="form-control message"
              id="message"
              placeholder="Enter Your Text ..."
            ></textarea>
          </div>
          <div className="col-lg-12 form-group">
            <button type="submit" className="btn action_btn thm_btn">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
