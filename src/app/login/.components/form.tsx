
import Link from "next/link";
import LoginAction from './login-action';
import LoginButton from './login-button';

const LoginForm = () => {
   
  return (
    <>
    <form action={LoginAction} className="row login_form">
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
                <div className="small_text">Confirm password</div>
                <div className="confirm_password">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    className="form-control"
                    placeholder="5+ characters required"
                    autoComplete="off"
                  />
                  <Link href="" className="forget_btn">
                    Forgotten password?
                  </Link>
                </div>
              </div>

              <div className="col-lg-12 text-center">
                <LoginButton />
              </div>
            </form>
    
    </>
  )
}

export default LoginForm