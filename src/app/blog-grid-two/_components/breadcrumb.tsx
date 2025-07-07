import Link from "next/link";
interface BreadcrumbTopicProps {
  name: string;
  link: string;
  id: number;
}
const Breadcrumb = () => {
  const breadcrumbData: BreadcrumbTopicProps[] = [
    { name: "Home", link: "/", id: 1 },
    { name: "Blog", link: "/blog-grid", id: 2 },
    {
      name: "Blog with sidebar",
      link: "",
      id: 3,
    },
  ];
  return (
    <>
      <section className="breadcrumb_area">
        <img className="p_absolute bl_left" src="img/v.svg" alt="" />
        <img
          className="p_absolute bl_right"
          src="img/home_one/b_leaf.svg"
          alt=""
        />
        <img
          className="p_absolute star"
          src="img/home_one/banner_bg.png"
          alt=""
        />
        <img
          className="p_absolute wave_shap_one"
          src="img/blog-classic/shap_01.png"
          alt=""
        />
        <img
          className="p_absolute wave_shap_two"
          src="img/blog-classic/shap_02.png"
          alt=""
        />
        <img
          className="p_absolute one wow fadeInRight"
          src="img/home_one/b_man_two.png"
          alt=""
          style={{ visibility: "visible", animationName: "fadeInRight" }}
        />
        <img
          className="p_absolute two wow fadeInUp"
          data-wow-delay="0.2s"
          src="img/home_one/flower.png"
          alt=""
          style={{
            visibility: "visible",
            animationDelay: "0.2s",
            animationName: "fadeInUp",
          }}
        />
        <div className="container">
          <form action="#" className="banner_search_form">
            <input
              type="search"
              className="form-control"
              placeholder='Search ("/" to focus)'
            />
            <button type="submit">
              <i className="icon_search" />
            </button>
          </form>
        </div>
      </section>

      <section className="page_breadcrumb">
        <div className="container custom_container">
          <div className="row">
            <div className="col-sm-7">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  {breadcrumbData.map((item) => (
                    <li
                      key={item.id}
                      className={`breadcrumb-item ${
                        item.id === breadcrumbData.length ? "active" : ""
                      }`}
                    >
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
            <div className="col-sm-5">
              <Link href="" className="date">
                <i className="icon_clock_alt"></i>Updated on March 03, 2020
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
