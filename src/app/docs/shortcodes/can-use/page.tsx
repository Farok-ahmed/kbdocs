import DocsLayout from "@/components/DocsLayout";
import Link from "next/link";

const CanUsePage = () => {
  return (
    <>
      <DocsLayout>
        <div id="post" className="shortcode_info rvfs-4" data-rvfs={4}>
          <div className="caniuse">
            <div className="shortcode_title">
              <h1>Can I Use</h1>
              <p>
                <span>Welcome to KbDoc !</span> Get familiar with the Stripe
                products and explore their features:
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque dolores ducimus eos, facere fuga incidunt libero
              molestias quaerat ratione sit. Accusamus fugiat id modi molestiae
              nesciunt quos sed sunt, veniam?
            </p>
            <p>
              Delectus porro tincidunt, platea nam corporis convallis proident
              magni, quos, euismod ipsa nec vel gravida vero officia at? Earum
              architecto laoreet imperdiet, autem eligendi dictum. Torquent
              ullam, dignissim! Animi elementum quia nisl alias consectetuer
              soluta facilisi aliquam cumque debitis, urna placeat quasi tempora
              ultrices? Eius incidunt ornare iaculis molestias condimentum.
              Asperiores eget debitis potenti exercitation aptent, anim iste?
              Similique, similique, anim per auctor nobis accusamus! Occaecati
              lobortis quae officia nemo cumque nihil litora dignissimos ipsa,
              nobis vivamus rutrum ultricies erat nullam vehicula, irure sem, in
              exercitationem expedita libero voluptatibus eos. Mattis inventore
              convallis feugiat pariatur ullamco. Hac placeat, pharetra? Ante.
              Dapibus amet cupidatat aperiam illo eleifend viverra eum, dolores,
              habitant! Odio?
            </p>
            <p>
              Lobortis voluptatibus fugit mus repellat? Totam porro ultricies
              felis. Id imperdiet nostra risus? Leo aliqua quasi. Corporis
              mollit? In, fames erat? Sodales consequat eiusmod venenatis,
              penatibus alias? Massa lacinia. Felis rutrum explicabo ad!
              Elementum ac maecenas repellendus asperiores sodales fermentum
              pharetra eos tempore occaecati et nulla, minima laboris. Excepturi
              felis voluptates odit quibusdam odio possimus quibusdam volutpat!
              Quisquam! Nostrum! Maecenas pede. Delectus! Maxime semper modi,
              condimentum do? Integer donec quasi irure commodi? Tellus, eius
              proin itaque fugit faucibus venenatis, aspernatur? Itaque vehicula
              ipsam adipisicing, dictumst pede magnam ea. Anim. Class ex taciti
              aptent nec dolor delectus duis ridiculus. Commodo quam doloribus
              exercitation nullam magnis ornare, tenetur! Semper hic vel. Dui
              sem repellat doloribus, dignissim numquam quae provident
              distinctio, laboris dolorum ab hic nisl tempora mauris quaerat cum
              turpis diamlorem ornare consectetuer? Ullam cupidatat rerum eu
              phasellus mollitia? Commodi semper. Sociis! Sed! In eveniet augue
              sed metus luctus debitis nihil? Saepe? Sed anim molestie cum
              sapiente volutpat ligula occaecati venenatis, officiis aenean.
              Modi nam saepe, aliquet rem mi aperiam venenatis, sapien sodales
              expedita elit doloremque repellat mattis parturient quibusdam
              minim! Dapibus praesent accusamus senectus orci reiciendis pretium
              maecenas porttitor. Ac.
            </p>
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
                  <img src="/img/desktop_icon1.png" alt="" />
                  <span className="agents_version">72</span>
                </li>
                <li className="caniuse_agents_item light_blue">
                  <img src="/img/desktop_icon2.png" alt="" />
                  <span className="agents_version">64*</span>
                </li>
                <li className="caniuse_agents_item light_red">
                  <img src="/img/desktop_icon3.png" alt="" />
                  <span className="agents_version">No</span>
                </li>
                <li className="caniuse_agents_item light_blue">
                  <img src="/img/desktop_icon4.png" alt="" />
                  <span className="agents_version">42</span>
                </li>
                <li className="caniuse_agents_item light_blue">
                  <img src="/img/desktop_icon5.png" alt="" />
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
                  <img src="/img/mobile_icon1.png" alt="" />
                  <span className="agents_version">9.0</span>
                </li>
                <li className="caniuse_agents_item blue">
                  <img src="/img/mobile_icon2.png" alt="" />
                  <span className="agents_version">86</span>
                </li>
                <li className="caniuse_agents_item light_red">
                  <img src="/img/mobile_icon3.png" alt="" />
                  <span className="agents_version">No</span>
                </li>
                <li className="caniuse_agents_item blue">
                  <img src="/img/mobile_icon4.png" alt="" />
                  <span className="agents_version">76</span>
                </li>
                <li className="caniuse_agents_item blue">
                  <img src="/img/mobile_icon5.png" alt="" />
                  <span className="agents_version">76*</span>
                </li>
              </ul>
            </div>
            <div className="caniuse_section_legend">
              <p>* denotes prefix required.</p>
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

export default CanUsePage;
