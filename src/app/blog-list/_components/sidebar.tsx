import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <div className="col-lg-4">
        <div className="blog_sidebar pl-40">
          <div className="widget about_widget">
            <div className="img">
              <img src="/img/blog-single/about_img.jpg" alt="" />
            </div>
            <div className="text">
              <Link href="#">
                <h3>Rodney Artichoke</h3>
              </Link>
              <p>
                James Bond jolly good happy days smashing barney bonnet bits and
                bobs loo.!
              </p>
            </div>
          </div>
          <div className="widget categorie_widget">
            <h4 className="c_head">Post Categories</h4>
            <ul className="list-unstyled categorie_list">
              <li>
                <Link href="#">
                  Creative <span>(12)</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  Inspiration <span>(8)</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  Lifestyle <span>(3)</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  News <span>(4)</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  Photography <span>(12)</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  Skill <span>(15)</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  Tourist Tours <span>(10)</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  Inspire <span>(5)</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="widget recent_news_widget">
            <h4 className="c_head">Reacent News</h4>
            <div className="media recent_post_item">
              <img src="/img/blog-single/news_01.jpg" alt="" />
              <div className="media-body">
                <Link href="#">
                  <h5>Is It Worth Buying A Premium Form Builder.</h5>
                </Link>
                <div className="entry_post_date">January 14, 2020</div>
              </div>
            </div>
            <div className="media recent_post_item">
              <img src="/img/blog-single/news_02.jpg" alt="" />
              <div className="media-body">
                <Link href="#">
                  <h5>10 Classic Summer Vacations</h5>
                </Link>
                <div className="entry_post_date">April 16, 2020</div>
              </div>
            </div>
            <div className="media recent_post_item">
              <img src="/img/blog-single/news_03.jpg" alt="" />
              <div className="media-body">
                <Link href="#">
                  <h5>How To Easily Add weForms Widget Using Elementor</h5>
                </Link>
                <div className="entry_post_date">March 10, 2020</div>
              </div>
            </div>
            <div className="media recent_post_item">
              <img src="/img/blog-single/news_04.jpg" alt="" />
              <div className="media-body">
                <Link href="#">
                  <h5>How to Create GDPR Consent Form In WordPress</h5>
                </Link>
                <div className="entry_post_date">January 19, 2020</div>
              </div>
            </div>
          </div>
          <div className="widget comments_widget">
            <h4 className="c_head">Recent Comments</h4>
            <ul className="list-unstyled recent_comments">
              <li>
                <h6>
                  <i className="icon_chat_alt" />
                  Douglas Lyphe:
                </h6>
                <Link href="#" className="text">
                  French squiffy pukka gosh nancy boy buggered, bog-standard.!
                </Link>
              </li>
              <li>
                <h6>
                  <i className="icon_chat_alt" />
                  Hilary Ouse:
                </h6>
                <Link href="#" className="text">
                  Charles give us a bell butty blatant baking cakes cheesed off.
                </Link>
              </li>
              <li>
                <h6>
                  <i className="icon_chat_alt" />
                  Penny Tool:
                </h6>
                <Link href="#" className="text">
                  Starkers happy days bobby pardon me.
                </Link>
              </li>
              <li>
                <h6>
                  <i className="icon_chat_alt" />
                  Jackson Pot:
                </h6>
                <Link href="#" className="text">
                  Charles give us a bell butty blatant baking cakes cheesed off.
                </Link>
              </li>
            </ul>
          </div>
          <div className="widget tag_widget">
            <h4 className="c_head">Tags</h4>
            <ul className="list-unstyled w_tag_list">
              <li>
                <Link href="#">Design</Link>
              </li>
              <li>
                <Link href="#">Apps</Link>
              </li>
              <li>
                <Link href="#">Photography</Link>
              </li>
              <li>
                <Link href="#">Business</Link>
              </li>
              <li>
                <Link href="#">KbDoc</Link>
              </li>
              <li>
                <Link href="#">WordPress</Link>
              </li>
              <li>
                <Link href="#">Design</Link>
              </li>
              <li>
                <Link href="#">DocAll</Link>
              </li>
              <li>
                <Link href="#">Magento</Link>
              </li>
              <li>
                <Link href="#">Doc Design</Link>
              </li>
              <li>
                <Link href="#">ui/ux</Link>
              </li>
              <li>
                <Link href="#">Docs</Link>
              </li>
            </ul>
          </div>
          <div className="widget instragram_widget">
            <h4 className="c_head">Instragram</h4>
            <div className="instragram_info">
              <Link href="#" className="instragram_item">
                <img src="/img/blog-single/image_01.jpg" alt="" />
              </Link>
              <Link href="#" className="instragram_item">
                <img src="/img/blog-single/image_02.jpg" alt="" />
              </Link>
              <Link href="#" className="instragram_item">
                <img src="/img/blog-single/image_03.jpg" alt="" />
              </Link>
              <Link href="#" className="instragram_item">
                <img src="/img/blog-single/image_04.jpg" alt="" />
              </Link>
              <Link href="#" className="instragram_item">
                <img src="/img/blog-single/image_05.jpg" alt="" />
              </Link>
              <Link href="#" className="instragram_item">
                <img src="/img/blog-single/image_06.jpg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
