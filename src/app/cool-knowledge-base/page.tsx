import DefaultLayout from "@/components/layout";
import Link from "next/link";
import DocumentationArea from "./_components/documentation-area";
import FaqArea from "./_components/faq-area";
import Features from "./_components/features";
import Reviews from "./_components/reviews";
import TagsArea from "./_components/tag-area";

export default function CoolKnowledgeBasePage() {
  return (
    <DefaultLayout>
      <div className="click_capture"></div>
      <section className="doc_banner_area_one">
        <img className="dark" src="img/home_one/wave_one.svg" alt="" />
        <img className="dark_two" src="img/home_one/wave_two.svg" alt="" />
        <img
          className="p_absolute star_one"
          src="img/home_one/star.png"
          alt=""
        />
        <img
          className="p_absolute star_two"
          src="img/home_one/star.png"
          alt=""
        />
        <img
          className="p_absolute star_three"
          src="img/home_one/star.png"
          alt=""
        />
        <img
          className="p_absolute one wow fadeInLeft"
          data-wow-delay="0.1s"
          src="img/home_one/b_man.png"
          alt=""
        />
        <img
          className="p_absolute two wow fadeInRight"
          data-wow-delay="0.2s"
          src="img/home_one/b_man_two.png"
          alt=""
        />
        <img
          className="p_absolute three wow fadeInUp"
          data-wow-delay="0.3s"
          src="img/home_one/flower.png"
          alt=""
        />
        <img
          className="p_absolute four wow fadeInRight"
          data-wow-delay="0.4s"
          src="img/home_one/girl_img.png"
          alt=""
        />
        <img
          className="p_absolute five wow fadeIn"
          data-wow-delay="0.5s"
          src="img/home_one/file.png"
          alt=""
        />
        <img className="p_absolute bl_left" src="img/v.svg" alt="" />
        <img
          className="p_absolute bl_right"
          src="img/home_one/b_leaf.svg"
          alt=""
        />
        <div className="container">
          <div className="doc_banner_text">
            <h2 className="wow fadeInUp" data-wow-delay="0.3s">
              Hello, what can we help you find?
            </h2>
            <p className="wow fadeInUp" data-wow-delay="0.5s">
              we're here for you. Find articles, help and advice for getting the
              most our of docall theme
            </p>
            <form action="#" className="banner_search_form">
              <input
                type="search"
                className="form-control"
                placeholder='Search ("/" to focus)'
              />
              <button type="submit">
                <i className="icon_search"></i>
              </button>
            </form>
            <h6>
              <span>Popular topics:</span>{" "}
              <Link href="">Add a Map with a Market</Link>{" "}
              <Link href="">Styling a Map</Link>
            </h6>
          </div>
        </div>
      </section>
      <Features />
      <TagsArea />
      <DocumentationArea />
      <Reviews />
      <FaqArea />
      <section
        className="doc_action_area parallaxie"
        data-background="img/bg.jpg"
        style={{
          background: 'url("img/home_one/action_bg.jpg") no-repeat scroll',
        }}
      >
        <div className="overlay_bg"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 col-sm-8">
              <div className="action_text">
                <h2>Can't find an answer?</h2>
                <p>Head over to our Discord channel</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4">
              <Link href="" className="action_btn">
                Discord Channel <i className="arrow_right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
