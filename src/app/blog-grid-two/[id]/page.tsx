import NotFound from "@/app/not-found";
import gridPost2 from "@/assets/img/blog-grid/blog_grid_post2.jpg";
import gridPost3 from "@/assets/img/blog-grid/blog_grid_post3.jpg";
import gridPost6 from "@/assets/img/blog-grid/blog_grid_post6.jpg";
import aboutImg from "@/assets/img/blog-single/about_img.jpg";
import authorPhoto from "@/assets/img/blog-single/author.jpg";
import authorSingle from "@/assets/img/blog-single/author_single.jpg";
import comment01 from "@/assets/img/blog-single/comment_01.jpg";
import comment02 from "@/assets/img/blog-single/comment_02.jpg";
import comment03 from "@/assets/img/blog-single/comment_03.jpg";
import insta01 from "@/assets/img/blog-single/image_01.jpg";
import insta02 from "@/assets/img/blog-single/image_02.jpg";
import insta03 from "@/assets/img/blog-single/image_03.jpg";
import insta04 from "@/assets/img/blog-single/image_04.jpg";
import insta05 from "@/assets/img/blog-single/image_05.jpg";
import insta06 from "@/assets/img/blog-single/image_06.jpg";
import news01 from "@/assets/img/blog-single/news_01.jpg";
import news02 from "@/assets/img/blog-single/news_02.jpg";
import news03 from "@/assets/img/blog-single/news_03.jpg";
import news04 from "@/assets/img/blog-single/news_04.jpg";
import singlePostImg from "@/assets/img/blog-single/single_post_img.jpg";
import singlePostImgTwo from "@/assets/img/blog-single/single_post_img_two.jpg";
import DefaultLayout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import { getBlogPostById } from "../blogs";

const BlogSinglePage = async ({
  params,
}: {
  params: Promise<{ id: number }>;
}) => {
  const { id } = await params;
  const blog = getBlogPostById(Number(id));
  if (!blog) {
    return <NotFound />;
  }
  return (
    <DefaultLayout>
      <section className="breadcrumb_area_two">
        <div className="container">
          <div className="breadcrumb_content">
            <h2>
              How to Connect Google Calendar With WordPress Contact Forms{" "}
            </h2>
            <div className="single_post_author">
              <Image className="author_img" src={authorSingle} alt="Author" />
              <div className="text">
                <Link href="#">
                  <h4>Jason Response</h4>
                </Link>
                <div className="post_tag">
                  <Link href="#">April 16, 2020</Link>
                  <Link href="#">18 Min Read</Link>
                  <Link className="c_blue" href="#">
                    WordPress
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog_single_info">
                <div className="blog_single_item">
                  <Link href="#" className="blog_single_img">
                    <Image src={singlePostImg} alt="" />
                  </Link>
                  <p>
                    Tomfoolery crikey bits and bobs brilliant bamboozled down
                    the pub amongst brolly hanky panky, cack bonnet arse over
                    tit burke bugger all mate bodge fanny around butty, Richard
                    spiffing a load of old tosh porkies hunky-dory ruddy dropped
                    a clanger. Plastered it's all gone to pot I brilliant young
                    delinquent excuse my French what a load of rubbish he legged
                    it <Link href="#">Harry give us a bell</Link>, some dodgy
                    chav on your bike mate say that blatant so I said cup of tea
                    chip shop, well sloshed Queen's English cheeky bugger a
                    blinding shot the wireless I horse play. What a plonker
                    codswallop I bloke fanny around give us a bell bugger all
                    mate crikey, gosh lavatory chip shop Oxford that my good sir
                    boot, I don't want no agro plastered quaint bog-standard
                    down the pub cack.
                  </p>
                  <p>
                    Bugger all mate chinwag skive off bender cack chap baking
                    cakes brown bread bodge wind up, amongst mush{" "}
                    <Link href="#">David lurgy burke blow</Link> off bits and
                    bobs faff about dropped a clanger, such a fibber so I said
                    spiffing codswallop bite your arm off my lady bleeding
                    tosser. Ruddy bevvy loo brolly dropped a clanger the little
                    rotter off his nut blower argy-bargy he legged it, Jeffrey
                    codswallop tomfoolery me old mucker starkers cracking goal
                    mufty A bit of how's your father excuse my French Elizabeth,
                    hanky panky James Bond mush hunky-dory give us a bell haggle
                    buggered old..
                  </p>
                  <ul className="single_list">
                    <li>Shop configurations</li>
                    <li>Installing Sylius ecommerce shop</li>
                    <li>Check system requirements</li>
                    <li>Setting up the database</li>
                    <li>Loading sample data for the environment</li>
                    <li>Assets installation</li>
                  </ul>
                  <blockquote>
                    <h4 className="c_head">
                      He legged it that blatant brown bread some dodgy chav
                      super a blinding shot my lady lavatory cup of char cor
                      blimey guvnor get stuffed mate you mug cobblers off his
                      nut pukka, give us a bell
                    </h4>
                    <div className="author">Jason Response</div>
                  </blockquote>
                  <p>
                    He legged it that blatant brown bread some dodgy chav super
                    a blinding shot my lady lavatory cup of char cor blimey
                    guvnor get stuffed mate you mug cobblers off his nut pukka,
                    give us a bell ummm I'm telling burke A bit of how's your
                    father starkers daft hanky panky bog-standard golly gosh
                    William a load of old tosh brolly Queen's English bits and
                    bobs bugger, grub geeza cracking goal cheesed off bog baking
                    cakes James Bond up the duff mufty morish do one wellies
                    zonked I. Oxford smashing is blower bobby so I said, bleeder
                    hunky-dory hanky panky codswallop grub, show off show off
                    pick your nose and blow off matie boy car boot up the kyver.
                    Knackered blatant David give us a bell he lost his bottle.
                  </p>
                  <div className="single_post_two">
                    <h2>Install Sylius via SSH</h2>
                    <p>
                      Nancy boy vagabond A bit of how's your father starkers
                      baking cakes boot dropped a clanger my lady bender blow
                      off bugger all mate, jolly good brolly posh ummm I'm
                      telling get stuffed mate up the duff haggle lost the plot
                      off his nut wind up loo, I don't want no agro.
                    </p>
                    <Image src={singlePostImgTwo} alt="" />
                    <p>
                      I will keep the rest of the values to default so that the
                      config file will have the defaults Sylius settings. If the
                      need arises, you can obviously change these settings
                      later.
                    </p>
                    <p>
                      Tomfoolery crikey bits and bobs brilliant bamboozled down
                      the pub amongst brolly hanky panky, cack bonnet arse over
                      tit burke bugger all mate bodge fanny around butty,
                      Richard spiffing a load of old tosh porkies hunky-dory
                      ruddy dropped a clanger. Plastered it's all gone to pot I
                      brilliant young delinquent excuse my French what a load of
                      rubbish he legged it Harry give us a bell, some dodgy chav
                      on your bike mate say that blatant so I said cup of tea
                      chip shop
                    </p>
                  </div>
                  <div className="blog_social text-center">
                    <h5>Share This Article</h5>
                    <ul className="list-unstyled f_social_icon">
                      <li>
                        <Link href="#">
                          <i className="social_facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="social_twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="social_vimeo" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="social_linkedin" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog_post_author media">
                  <div className="author_img">
                    <Image src={authorPhoto} alt="" />
                  </div>
                  <div className="media-body">
                    <h5>Jason Response</h5>
                    <p>
                      Loo tomfoolery jolly good bloke chancer chimney pot nice
                      one a, he nicked it mufty Oxford say wind up bits and bobs
                      cheeky bugger, amongst cack bugger Eaton William skive
                      off.!
                    </p>
                  </div>
                </div>
                <div className="blog_related_post">
                  <h2 className="c_head">Related Post</h2>
                  <div className="row">
                    <div className="col-lg-4 col-sm-6">
                      <div
                        className="blog_grid_post wow fadeInUp"
                        data-wow-delay="0.2s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.2s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <Image src={gridPost2} alt="" />
                        <div className="grid_post_content">
                          <div className="post_tag">
                            <Link href="#">18 Min Read</Link>
                            <Link className="cat-KbDoc" href="#">
                              KbDoc
                            </Link>
                          </div>
                          <Link href="#">
                            <h4 className="b_title">
                              70 Best Startups You Need to Watch Out for
                            </h4>
                          </Link>
                          <p>
                            Cup of char brilliant horse play bro bread sloshed
                            lavatory only...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div
                        className="blog_grid_post wow fadeInUp"
                        data-wow-delay="0.2s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.2s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <Image src={gridPost3} alt="" />
                        <div className="grid_post_content">
                          <div className="post_tag">
                            <Link href="#">10 Min Read</Link>
                            <Link className="cat-woocommerce" href="#">
                              WooCommerce
                            </Link>
                          </div>
                          <Link href="#">
                            <h4 className="b_title">
                              How to Connect Google With WordPress
                            </h4>
                          </Link>
                          <p>
                            Cup of char brilliant horse play bro bread sloshed
                            lavatory only...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div
                        className="blog_grid_post wow fadeInUp"
                        data-wow-delay="0.2s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.2s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <Image src={gridPost6} alt="" />
                        <div className="grid_post_content">
                          <div className="post_tag">
                            <Link href="#">9 Min Read</Link>
                            <Link className="cat-megento" href="#">
                              Megento
                            </Link>
                          </div>
                          <Link href="#">
                            <h4 className="b_title">
                              10 WordPress Security Issues And How to Fix
                            </h4>
                          </Link>
                          <p>
                            Cup of char brilliant horse play bro bread sloshed
                            lavatory only...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment_inner">
                  <h2 className="c_head">3 Comment</h2>
                  <ul className="comment_box list-unstyled">
                    <li className="post_comment">
                      <div className="media comment_author">
                        <Image className="img_rounded" src={comment01} alt="" />
                        <div className="media-body">
                          <div className="comment_info">
                            <h3>Fletch Skinner</h3>
                            <div className="comment_date">
                              July 3, 2020 at 2:14 pm
                            </div>
                          </div>
                          <p>
                            Cuppa the bee's knees the full monty bloke cockup
                            pear shaped bubble and squeak lavatory naff, chip
                            shop bodge burke do one have.!
                          </p>
                          <Link href="#" className="comment_reply">
                            <i className="arrow_right" />
                            Reply
                          </Link>
                        </div>
                      </div>
                      <ul className="list-unstyled reply_comment">
                        <li>
                          <div className="media comment_author">
                            <Image
                              className="img_rounded"
                              src={comment02}
                              alt=""
                            />
                            <div className="media-body">
                              <div className="comment_info">
                                <h3>Hans Down</h3>
                                <div className="comment_date">44 mins ago</div>
                              </div>
                              <p>
                                Dropped a clanger up the kyver easy peasy
                                vagabond victoria sponge Charles tinkety tonk
                                old fruit argy.!
                              </p>
                              <Link href="#" className="comment_reply">
                                <i className="arrow_right" />
                                Reply
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="media comment_author">
                            <Image
                              className="img_rounded"
                              src={comment03}
                              alt=""
                            />
                            <div className="media-body">
                              <div className="comment_info">
                                <h3>Hans Down</h3>
                                <div className="comment_date">44 mins ago</div>
                              </div>
                              <p>
                                Dropped a clanger up the kyver easy peasy
                                vagabond victoria sponge Charles tinkety tonk
                                old fruit argy.!
                              </p>
                              <Link href="#" className="comment_reply">
                                <i className="arrow_right" />
                                Reply
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="post_comment">
                      <div className="media comment_author">
                        <Image className="img_rounded" src={comment01} alt="" />
                        <div className="media-body">
                          <div className="comment_info">
                            <h3>Chauffina Carr</h3>
                            <div className="comment_date">04 mins ago</div>
                          </div>
                          <p>
                            Cuppa the bee's knees the full monty bloke cockup
                            pear shaped bubble and squeak lavatory naff, chip
                            shop bodge burke do one have.!
                          </p>
                          <Link href="#" className="comment_reply">
                            <i className="arrow_right" />
                            Reply
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="blog_comment_box">
                  <h2 className="c_head">Leave a Comment</h2>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <form className="get_quote_form row" action="#" method="post">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="web"
                        placeholder="Website"
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <textarea
                        className="form-control message"
                        placeholder="Comment"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-12">
                      <button className="btn action_btn thm_btn" type="submit">
                        Post Comment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog_sidebar pl-40">
                <div className="widget about_widget">
                  <div className="img">
                    <Image src={aboutImg} alt="" />
                  </div>
                  <div className="text">
                    <Link href="#">
                      <h3>Rodney Artichoke</h3>
                    </Link>
                    <p>
                      James Bond jolly good happy days smashing barney bonnet
                      bits and bobs loo.!
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
                    <Image src={news01} alt="" />
                    <div className="media-body">
                      <Link href="#">
                        <h5>Is It Worth Buying A Premium Form Builder.</h5>
                      </Link>
                      <div className="entry_post_date">January 14, 2020</div>
                    </div>
                  </div>
                  <div className="media recent_post_item">
                    <Image src={news02} alt="" />
                    <div className="media-body">
                      <Link href="#">
                        <h5>10 Classic Summer Vacations</h5>
                      </Link>
                      <div className="entry_post_date">April 16, 2020</div>
                    </div>
                  </div>
                  <div className="media recent_post_item">
                    <Image src={news03} alt="" />
                    <div className="media-body">
                      <Link href="#">
                        <h5>
                          How To Easily Add weForms Widget Using Elementor
                        </h5>
                      </Link>
                      <div className="entry_post_date">March 10, 2020</div>
                    </div>
                  </div>
                  <div className="media recent_post_item">
                    <Image src={news04} alt="" />
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
                        French squiffy pukka gosh nancy boy buggered,
                        bog-standard.!
                      </Link>
                    </li>
                    <li>
                      <h6>
                        <i className="icon_chat_alt" />
                        Hilary Ouse:
                      </h6>
                      <Link href="#" className="text">
                        Charles give us a bell butty blatant baking cakes
                        cheesed off.
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
                        Charles give us a bell butty blatant baking cakes
                        cheesed off.
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
                      <Image src={insta01} alt="" />
                    </Link>
                    <Link href="#" className="instragram_item">
                      <Image src={insta02} alt="" />
                    </Link>
                    <Link href="#" className="instragram_item">
                      <Image src={insta03} alt="" />
                    </Link>
                    <Link href="#" className="instragram_item">
                      <Image src={insta04} alt="" />
                    </Link>
                    <Link href="#" className="instragram_item">
                      <Image src={insta05} alt="" />
                    </Link>
                    <Link href="#" className="instragram_item">
                      <Image src={insta06} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default BlogSinglePage;
