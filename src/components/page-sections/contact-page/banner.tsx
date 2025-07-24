import Link from "next/link";

const Banner = () => {
  return (
    <section className="breadcrumb_area breadcrumb_area_four">
      <img className="p_absolute bl_left" src="/img/v.svg" alt="" />
      <img
        className="p_absolute bl_right"
        src="/img/home_one/b_leaf.svg"
        alt=""
      />
      <img
        className="p_absolute one wow fadeInRight"
        src="/img/home_one/b_man_two.png"
        alt=""
      />
      <div className="container">
        <div className="breadcrumb_content_two text-center">
          <h2>Contact</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="#">Pages</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Banner;
