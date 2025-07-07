const SideBar = () => {
  return (
    <>
      <div className="col-lg-4">
        <div className="blog_sidebar pl-40">
          <div className="widget about_widget">
            <div className="img">
              <img src="img/blog-single/about_img.jpg" alt="" />
            </div>
            <div className="text">
              <a href="#">
                <h3>Rodney Artichoke</h3>
              </a>
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
                <a href="#">
                  Creative <span>(12)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Inspiration <span>(8)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Lifestyle <span>(3)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  News <span>(4)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Photography <span>(12)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Skill <span>(15)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Tourist Tours <span>(10)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Inspire <span>(5)</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="widget recent_news_widget">
            <h4 className="c_head">Reacent News</h4>
            <div className="media recent_post_item">
              <img src="img/blog-single/news_01.jpg" alt="" />
              <div className="media-body">
                <a href="#">
                  <h5>Is It Worth Buying A Premium Form Builder.</h5>
                </a>
                <div className="entry_post_date">January 14, 2020</div>
              </div>
            </div>
            <div className="media recent_post_item">
              <img src="img/blog-single/news_02.jpg" alt="" />
              <div className="media-body">
                <a href="#">
                  <h5>10 Classic Summer Vacations</h5>
                </a>
                <div className="entry_post_date">April 16, 2020</div>
              </div>
            </div>
            <div className="media recent_post_item">
              <img src="img/blog-single/news_03.jpg" alt="" />
              <div className="media-body">
                <a href="#">
                  <h5>How To Easily Add weForms Widget Using Elementor</h5>
                </a>
                <div className="entry_post_date">March 10, 2020</div>
              </div>
            </div>
            <div className="media recent_post_item">
              <img src="img/blog-single/news_04.jpg" alt="" />
              <div className="media-body">
                <a href="#">
                  <h5>How to Create GDPR Consent Form In WordPress</h5>
                </a>
                <div className="entry_post_date">January 19, 2020</div>
              </div>
            </div>
          </div>
          <div className="widget tag_widget">
            <h4 className="c_head">Tags</h4>
            <ul className="list-unstyled w_tag_list">
              <li>
                <a href="#">Design</a>
              </li>
              <li>
                <a href="#">Apps</a>
              </li>
              <li>
                <a href="#">Photography</a>
              </li>
              <li>
                <a href="#">Business</a>
              </li>
              <li>
                <a href="#">KbDoc</a>
              </li>
              <li>
                <a href="#">WordPress</a>
              </li>
              <li>
                <a href="#">Design</a>
              </li>
              <li>
                <a href="#">DocAll</a>
              </li>
              <li>
                <a href="#">Magento</a>
              </li>
              <li>
                <a href="#">Doc Design</a>
              </li>
              <li>
                <a href="#">ui/ux</a>
              </li>
              <li>
                <a href="#">Docs</a>
              </li>
            </ul>
          </div>
          <div className="widget instragram_widget">
            <h4 className="c_head">Instragram</h4>
            <div className="instragram_info">
              <a href="#" className="instragram_item">
                <img src="img/blog-single/image_01.jpg" alt="" />
              </a>
              <a href="#" className="instragram_item">
                <img src="img/blog-single/image_02.jpg" alt="" />
              </a>
              <a href="#" className="instragram_item">
                <img src="img/blog-single/image_03.jpg" alt="" />
              </a>
              <a href="#" className="instragram_item">
                <img src="img/blog-single/image_04.jpg" alt="" />
              </a>
              <a href="#" className="instragram_item">
                <img src="img/blog-single/image_05.jpg" alt="" />
              </a>
              <a href="#" className="instragram_item">
                <img src="img/blog-single/image_06.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
