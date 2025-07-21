import Link from "next/link";

const CanUse = () => {
  return (
    <>
      <div className="caniuse">
        <h4 className="s_title">Can I Use</h4>
        <div className="caniuse_section">
          <h6 className="load-order-2" id="desk">
            Desktop
            <Link
              className="anchorjs-link "
              aria-label="Anchor"
              data-anchorjs-icon=""
              href="#desk"
              style={{
                font: "1em / 1 anchorjs-icons",
                paddingLeft: "0.375em",
              }}
            />
          </h6>
          <ul className="list-unstyled caniuse_agents_list">
            <li className="caniuse_agents_item light_blue">
              <img src="img/desktop_icon1.png" alt="" />
              <span className="agents_version">72</span>
            </li>
            <li className="caniuse_agents_item light_blue">
              <img src="img/desktop_icon2.png" alt="" />
              <span className="agents_version">64*</span>
            </li>
            <li className="caniuse_agents_item light_red">
              <img src="img/desktop_icon3.png" alt="" />
              <span className="agents_version">No</span>
            </li>
            <li className="caniuse_agents_item light_blue">
              <img src="img/desktop_icon4.png" alt="" />
              <span className="agents_version">42</span>
            </li>
            <li className="caniuse_agents_item light_blue">
              <img src="img/desktop_icon5.png" alt="" />
              <span className="agents_version">45</span>
            </li>
          </ul>
        </div>
        <div className="caniuse_section">
          <h6 className="load-order-2" id="mobile">
            Mobile / Tablet
            <Link
              className="anchorjs-link "
              aria-label="Anchor"
              data-anchorjs-icon=""
              href="#mobile"
              style={{
                font: "1em / 1 anchorjs-icons",
                paddingLeft: "0.375em",
              }}
            />
          </h6>
          <ul className="list-unstyled caniuse_agents_list">
            <li className="caniuse_agents_item blue">
              <img src="img/mobile_icon1.png" alt="" />
              <span className="agents_version">9.0</span>
            </li>
            <li className="caniuse_agents_item blue">
              <img src="img/mobile_icon2.png" alt="" />
              <span className="agents_version">86</span>
            </li>
            <li className="caniuse_agents_item light_red">
              <img src="img/mobile_icon3.png" alt="" />
              <span className="agents_version">No</span>
            </li>
            <li className="caniuse_agents_item blue">
              <img src="img/mobile_icon4.png" alt="" />
              <span className="agents_version">76</span>
            </li>
            <li className="caniuse_agents_item blue">
              <img src="img/mobile_icon5.png" alt="" />
              <span className="agents_version">76*</span>
            </li>
          </ul>
        </div>
        <div className="caniuse_section_legend">
          <p>* denotes prefix required.</p>
          <div className="border_bottom" />
          <div className="d-flex caniuse_legend_list">
            <span>Supported:</span>
            <div className="caniuse_button">
              <Link href="#" className="blue">
                Yes
              </Link>
              <Link href="#" className="purpale_btn">
                No
              </Link>
              <Link href="#" className="green_btn">
                Partially
              </Link>
              <Link href="#" className="violate_btn">
                Polyfill
              </Link>
            </div>
          </div>
          <p>
            Stats from <Link href="#">KbDoc.com</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default CanUse;
