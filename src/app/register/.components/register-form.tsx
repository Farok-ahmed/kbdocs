import RegisterAction from "./register-action";
import RegisterButton from "./register-button";
const RegisterForm = () => {
  return (
    <>
      <form action={RegisterAction} className="row login_form">
        <div className="col-sm-6 form-group">
          <div className="small_text">First name</div>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="Muhammad"
          />
        </div>
        <div className="col-sm-6 form-group">
          <div className="small_text">Last name</div>
          <input
            type="text"
            className="form-control"
            name="lname"
            id="lname"
            placeholder="Jewel"
          />
        </div>
        <div className="col-lg-12 form-group">
          <div className="small_text">Your email</div>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="info@KbDoc.com"
          />
        </div>
        <div className="col-lg-12 form-group">
          <div className="small_text">Password</div>
          <input
            id="signup-password"
            name="signup-password"
            type="password"
            className="form-control"
            placeholder="5+ characters required"
            autoComplete="off"
          />
        </div>
        <div className="col-lg-12 form-group">
          <div className="small_text">Confirm password</div>
          <input
            id="confirm-password"
            name="confirm-password"
            type="password"
            className="form-control"
            placeholder="5+ characters required"
            autoComplete="off"
          />
        </div>
        <div className="col-lg-12 form-group">
          <div className="check_box">
            <input type="checkbox" value="None" id="squared2" name="check" />
            <label className="l_text" htmlFor="squared2">
              I accept the <span>politic of confidentiality</span>
            </label>
          </div>
        </div>
        <div className="col-lg-12 text-center">
          <RegisterButton />
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
