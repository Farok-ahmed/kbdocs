import img1 from "@/assets/img/1.jpg";
import img2 from "@/assets/img/2.jpg";
import img3 from "@/assets/img/3.jpg";
import singlePostImgTwo from "@/assets/img/blog-single/single_post_img_two.jpg";
import flotLeft from "@/assets/img/flot-left.jpg";
import flotRight from "@/assets/img/flot-right.jpg";
import DocsLayout from "@/components/DocsLayout";
import Image from "next/image";
import Link from "next/link";
import ImageMagnify from "./_components/image-magnify";

const ImagePage = () => {
  return (
    <>
      <DocsLayout>
        <div id="post" className="documentation_info rvfs-4" data-rvfs={4}>
          <article
            className="documentation_body typography_content"
            id="documentation"
          >
            <div className="shortcode_title">
              <h1>Image</h1>
              <p>
                <span>Welcome to KbDoc !</span> Documentation and examples for
                typography, including global settings, headings, body text,
                lists, and more.
              </p>
            </div>
            <h4 className="c_head load-order-2 smooth-scroll-heading" id="image-with-caption">
              Image with Caption
              <Link
                className="anchorjs-link "
                aria-label="Anchor"
                data-anchorjs-icon=""
                href="#image-with-caption"
                style={{
                  font: "1em / 1 anchorjs-icons",
                  paddingLeft: "0.375em",
                }}
              />
            </h4>
            <p>
              Images in Bootstrap are made responsive with{" "}
              <code>.img-fluid</code>. <code>max-width: 100%;</code> and{" "}
              <code>height: auto;</code> are applied to the image so that it
              scales with the parent element.
            </p>
            <figure>
              <Image
                src={singlePostImgTwo}
                className="img-fluid"
                alt="image with caption"
              />
              <figcaption>This is the image caption text.</figcaption>
            </figure>
            <div className="code-toolbar">
              <pre className="snippets language-html">
                <code className=" language-html" data-lang="html">
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">figure</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">img</span>
                    </span>
                    <span className="token space"> </span>
                    <span className="token attr-name">src</span>
                    <span className="token attr-value">
                      <span className="token punctuation">=</span>
                      <span className="token punctuation">"</span>
                      img/blog-single/single_post_img_two.jpg
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token space"> </span>
                    <span className="token attr-name">class</span>
                    <span className="token attr-value">
                      <span className="token punctuation">=</span>
                      <span className="token punctuation">"</span>img-fluid
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token space"> </span>
                    <span className="token attr-name">alt</span>
                    <span className="token attr-value">
                      <span className="token punctuation">=</span>
                      <span className="token punctuation">"</span>image
                      <span className="token space"> </span>with
                      <span className="token space"> </span>caption
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">figcaption</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  This<span className="token space"> </span>is
                  <span className="token space"> </span>the
                  <span className="token space"> </span>image
                  <span className="token space"> </span>caption
                  <span className="token space"> </span>text.
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;/</span>
                      <span className="token tag-id">figcaption</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;/</span>
                      <span className="token tag-id">figure</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                </code>
              </pre>
              <div className="toolbar">
                <div className="toolbar-item">
                  <span>HTML</span>
                </div>
                <div className="toolbar-item">
                  <button>Copy</button>
                </div>
              </div>
            </div>
            <ImageMagnify />
            <div className="code_item">
              <h4 className="c_head load-order-2 smooth-scroll-heading" id="shap">
                Images Shapes
                <Link
                  className="anchorjs-link "
                  aria-label="Anchor"
                  data-anchorjs-icon=""
                  href="#shap"
                  style={{
                    font: "1em / 1 anchorjs-icons",
                    paddingLeft: "0.375em",
                  }}
                />
              </h4>
              <p>
                Easily create images in different shapes with adding one class
                to the <em>&lt;img&gt;</em> tag.
              </p>
              <div className="code-preview">
                <div className="row">
                  <div className="col-md-4 text-center">
                    <Image src={img1} className="rounded" alt="Round image" />
                  </div>
                  <div className="col-md-4 text-center">
                    <Image src={img2} className="rounded-circle" alt="Circle image" />
                  </div>
                  <div className="col-md-4 text-center">
                    <Image src={img3} className="img-thumbnail" alt="Thumbnail" />
                  </div>
                </div>
              </div>
              <div className="code-toolbar">
                <pre className="snippet language-html">
                  <code className=" language-html" data-lang="html">
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>
                        <span className="token tag-id">img</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token attr-name">src</span>
                      <span className="token attr-value">
                        <span className="token punctuation">=</span>
                        <span className="token punctuation">"</span>...
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                        <span className="token punctuation">=</span>
                        <span className="token punctuation">"</span>rounded
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token attr-name">alt</span>
                      <span className="token attr-value">
                        <span className="token punctuation">=</span>
                        <span className="token punctuation">"</span>Round
                        <span className="token space"> </span>image
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token lf">{"\n"}</span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>
                        <span className="token tag-id">img</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token attr-name">src</span>
                      <span className="token attr-value">
                        <span className="token punctuation">=</span>
                        <span className="token punctuation">"</span>...
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                        <span className="token punctuation">=</span>
                        <span className="token punctuation">"</span>
                        rounded-circle
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token attr-name">alt</span>
                      <span className="token attr-value">
                        <span className="token punctuation">=</span>
                        <span className="token punctuation">"</span>Circle
                        <span className="token space"> </span>image
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token lf">{"\n"}</span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>
                        <span className="token tag-id">img</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token attr-name">src</span>
                      <span className="token attr-value">
                        <span className="token punctuation">=</span>
                        <span className="token punctuation">"</span>...
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                        <span className="token punctuation">=</span>
                        <span className="token punctuation">"</span>
                        img-thumbnail
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token attr-name">alt</span>
                      <span className="token attr-value">
                        <span className="token punctuation">=</span>
                        <span className="token punctuation">"</span>Thumbnail
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                  </code>
                </pre>
                <div className="toolbar">
                  <div className="toolbar-item">
                    <span>HTML</span>
                  </div>
                  <div className="toolbar-item">
                    <button>Copy</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="code_item">
              <h4 className="c_head load-order-2 smooth-scroll-heading" id="align">
                Aligning images
                <Link
                  className="anchorjs-link "
                  aria-label="Anchor"
                  data-anchorjs-icon=""
                  href="#align"
                  style={{
                    font: "1em / 1 anchorjs-icons",
                    paddingLeft: "0.375em",
                  }}
                />
              </h4>
              <p>
                Align images with the <Link href="#">helper float classes</Link>{" "}
                or <Link href="#">text alignment classes</Link>.{" "}
                <code className="highlighter-rouge">block</code>-level images
                can be centered using{" "}
                <Link href="#">
                  the <code className="highlighter-rouge">.mx-auto</code> margin
                  utility class
                </Link>
                .
              </p>
              <div className="code-preview">
                <div className="overflow-hidden">
                  <Image
                    src={flotLeft}
                    className="rounded float-left img-fluid"
                    alt="..."
                  />
                  <Image
                    src={flotRight}
                    className="rounded float-right img-fluid"
                    alt="..."
                  />
                </div>
              </div>
              <div className="code-toolbar">
                <pre className="snippet language-html">
                  <code className=" language-html" data-lang="html">
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>
                        <span className="token tag-id">div</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                        <span className="token punctuation">=</span>
                        <span className="token punctuation">"</span>
                        overflow-hidden
                        <span className="token space"> </span>mb-20
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>
                        <span className="token tag-id">img</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token attr-name">src</span>
                      <span className="token attr-value">
                        <span className="token punctuation">=</span>
                        <span className="token punctuation">"</span>
                        assets/images/thumb/l-1.jpg
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                        <span className="token punctuation">=</span>
                        <span className="token punctuation">"</span>rounded
                        <span className="token space"> </span>float-left
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token attr-name">alt</span>
                      <span className="token attr-value">
                        <span className="token punctuation">=</span>
                        <span className="token punctuation">"</span>...
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>
                        <span className="token tag-id">img</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token attr-name">src</span>
                      <span className="token attr-value">
                        <span className="token punctuation">=</span>
                        <span className="token punctuation">"</span>
                        assets/images/thumb/l-2.jpg
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                        <span className="token punctuation">=</span>
                        <span className="token punctuation">"</span>rounded
                        <span className="token space"> </span>float-right
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token attr-name">alt</span>
                      <span className="token attr-value">
                        <span className="token punctuation">=</span>
                        <span className="token punctuation">"</span>...
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token lf">{"\n"}</span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>
                        <span className="token tag-id">div</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                  </code>
                </pre>
                <div className="toolbar">
                  <div className="toolbar-item">
                    <span>HTML</span>
                  </div>
                  <div className="toolbar-item">
                    <button>Copy</button>
                  </div>
                </div>
              </div>
              <div className="code-preview">
                <div className="overflow-hidden">
                  <Image
                    src={flotLeft}
                    className="rounded mx-auto d-block"
                    alt="..."
                  />
                </div>
              </div>
              <div className="code-toolbar">
                <pre className="snippet language-html">
                  <code className=" language-html" data-lang="html">
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>
                        <span className="token tag-id">div</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                        <span className="token punctuation">=</span>
                        <span className="token punctuation">"</span>
                        overflow-hidden
                        <span className="token space"> </span>mb-20
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>
                        <span className="token tag-id">img</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token attr-name">src</span>
                      <span className="token attr-value">
                        <span className="token punctuation">=</span>
                        <span className="token punctuation">"</span>
                        assets/images/thumb/l-1.jpg
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                        <span className="token punctuation">=</span>
                        <span className="token punctuation">"</span>rounded
                        <span className="token space"> </span>mx-auto
                        <span className="token space"> </span>d-block
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token attr-name">alt</span>
                      <span className="token attr-value">
                        <span className="token punctuation">=</span>
                        <span className="token punctuation">"</span>...
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token lf">{"\n"}</span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>
                        <span className="token tag-id">div</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                  </code>
                </pre>
                <div className="toolbar">
                  <div className="toolbar-item">
                    <span>HTML</span>
                  </div>
                  <div className="toolbar-item">
                    <button>Copy</button>
                  </div>
                </div>
              </div>
              <div className="code-preview">
                <div className="text-center">
                  <Image src={flotLeft} className="rounded" alt="..." />
                </div>
              </div>
              <div className="code-toolbar">
                <pre className="snippet language-html">
                  <code className=" language-html" data-lang="html">
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>
                        <span className="token tag-id">div</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                        <span className="token punctuation">=</span>
                        <span className="token punctuation">"</span>text-center
                        <span className="token space"> </span>mb-20
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>
                        <span className="token tag-id">img</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token attr-name">src</span>
                      <span className="token attr-value">
                        <span className="token punctuation">=</span>
                        <span className="token punctuation">"</span>
                        assets/images/thumb/l-1.jpg
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                        <span className="token punctuation">=</span>
                        <span className="token punctuation">"</span>rounded
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token space"> </span>
                      <span className="token attr-name">alt</span>
                      <span className="token attr-value">
                        <span className="token punctuation">=</span>
                        <span className="token punctuation">"</span>...
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token lf">{"\n"}</span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>
                        <span className="token tag-id">div</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                  </code>
                </pre>
                <div className="toolbar">
                  <div className="toolbar-item">
                    <span>HTML</span>
                  </div>
                  <div className="toolbar-item">
                    <button>Copy</button>
                  </div>
                </div>
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
          </article>
        </div>
      </DocsLayout>
    </>
  );
};

export default ImagePage;
