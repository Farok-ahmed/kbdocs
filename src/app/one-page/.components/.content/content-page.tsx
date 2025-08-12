import img1 from "@/assets/img/1.jpg";
import img2 from "@/assets/img/2.jpg";
import img3 from "@/assets/img/3.jpg";
import singlePostImgTwo from "@/assets/img/blog-single/single_post_img_two.jpg";
import flotLeft from "@/assets/img/flot-left.jpg";
import flotRight from "@/assets/img/flot-right.jpg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LocalVideo from "./local-video";

const ContentPage: React.FC = () => {
  return (
    <>
      <article
        className="shortcode_info documentation_body typography_content doc-section"
        id="typography"
      >
        <div className="shortcode_title">
          <h2>Typography</h2>
          <p>
            <span>Welcome to KbDoc !</span> Documentation and examples for
            typography, including global settings, headings, body text, lists,
            and more.
          </p>
        </div>
        <h4 className="c_head load-order-2" id="headings">
          Headings
          <Link
            className="anchorjs-link "
            aria-label="Anchor"
            data-anchorjs-icon=""
            href="#headings"
            style={{
              font: "1em / 1 anchorjs-icons",
              paddingLeft: "0.375em",
            }}
          />
        </h4>
        <p>
          All HTML headings, <code>&lt;h1&gt;</code> through{" "}
          <code>&lt;h6&gt;</code>, are available.
        </p>
        <div className="code-preview">
          <h1 className="h1">h1. Sample heading</h1>
          <h2 className="h2">h2. Sample heading</h2>
          <h3 className="h3">h3. Sample heading</h3>
          <h4 className="h4">h4. Sample heading</h4>
          <h5 className="h5">h5. Sample heading</h5>
          <h6 className="h6">h6. Sample heading</h6>
        </div>
        <div className="code-toolbar">
          <pre className="snippets language-html">
            <code className=" language-html" data-lang="html">
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;</span>
                  <span className="token tag-id">h1</span>
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              h1.<span className="token space"> </span>Sample
              <span className="token space"> </span>heading
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;</span>
                  <span className="token tag-id">h1</span>
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              <span className="token lf">{"\n"}</span>
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;</span>
                  <span className="token tag-id">h2</span>
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              h2.<span className="token space"> </span>Sample
              <span className="token space"> </span>heading
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;</span>
                  <span className="token tag-id">h2</span>
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              <span className="token lf">{"\n"}</span>
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;</span>
                  <span className="token tag-id">h3</span>
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              h3.<span className="token space"> </span>Sample
              <span className="token space"> </span>heading
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;</span>
                  <span className="token tag-id">h3</span>
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              <span className="token lf">{"\n"}</span>
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;</span>
                  <span className="token tag-id">h4</span>
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              h4.<span className="token space"> </span>Sample
              <span className="token space"> </span>heading
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;</span>
                  <span className="token tag-id">h4</span>
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              <span className="token lf">{"\n"}</span>
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;</span>
                  <span className="token tag-id">h5</span>
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              h5.<span className="token space"> </span>Sample
              <span className="token space"> </span>heading
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;</span>
                  <span className="token tag-id">h5</span>
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              <span className="token lf">{"\n"}</span>
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;</span>
                  <span className="token tag-id">h6</span>
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              h6.<span className="token space"> </span>Sample
              <span className="token space"> </span>heading
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;</span>
                  <span className="token tag-id">h6</span>
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
        <p>
          <code>.h1</code> through <code>.h6</code> classes are also available,
          for when you want to match the font styling of a heading but cannot
          use the associated HTML element.
        </p>
        <div className="code_item" id="code">
          <h4 className="c_head load-order-2" id="anchor">
            Anchor titles
            <Link
              className="anchorjs-link "
              aria-label="Anchor"
              data-anchorjs-icon=""
              href="#anchor"
              style={{
                font: "1em / 1 anchorjs-icons",
                paddingLeft: "0.375em",
              }}
            />
          </h4>
          <p>
            All HTML headings, <code>&lt;h1&gt;</code> through{" "}
            <code>&lt;h6&gt;</code>, are available.
          </p>
          <div className="code-preview">
            <h5 id="header-name">
              Header Title
              <Link className="anchor" href="#header-name" />
            </h5>
          </div>
          <div className="code-toolbar">
            <pre className="snippet language-html">
              <code className=" language-html" data-lang="html">
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">h5</span>
                  </span>
                  <span className="token space"> </span>
                  <span className="token attr-name">id</span>
                  <span className="token attr-value">
                    <span className="token punctuation">=</span>
                    <span className="token punctuation">"</span>
                    header-name
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                Header<span className="token space"> </span>Title
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">h5</span>
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
        <div className="code_item">
          <h4 className="c_head load-order-2" id="inline">
            Inline text elements
            <Link
              className="anchorjs-link "
              aria-label="Anchor"
              data-anchorjs-icon=""
              href="#inline"
              style={{
                font: "1em / 1 anchorjs-icons",
                paddingLeft: "0.375em",
              }}
            />
          </h4>
          <p>Styling for common inline HTML5 elements.</p>
          <div className="code-preview">
            <p>
              You can use the mark tag to <mark>highlight</mark> text.
            </p>
            <p>
              <del>
                This line of text is meant to be treated as deleted text.
              </del>
            </p>
            <p>
              <s>
                This line of text is meant to be treated as no longer accurate.
              </s>
            </p>
            <p>
              <ins>
                This line of text is meant to be treated as an addition to the
                document.
              </ins>
            </p>
            <p>
              <u>This line of text will render as underlined</u>
            </p>
            <p>
              <small>
                This line of text is meant to be treated as fine print.
              </small>
            </p>
            <p>
              <strong>This line rendered as bold text.</strong>
            </p>
            <p>
              <em>This line rendered as italicized text.</em>
            </p>
          </div>
          <div className="code-toolbar">
            <pre className="snippet language-html">
              <code className=" language-html" data-lang="html">
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">p</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                You<span className="token space"> </span>can
                <span className="token space"> </span>use
                <span className="token space"> </span>the
                <span className="token space"> </span>mark
                <span className="token space"> </span>tag
                <span className="token space"> </span>to
                <span className="token space"> </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">mark</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                highlight
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">mark</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token space"> </span>text.
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">p</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token lf">{"\n"}</span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">p</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">del</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                This<span className="token space"> </span>line
                <span className="token space"> </span>of
                <span className="token space"> </span>text
                <span className="token space"> </span>is
                <span className="token space"> </span>meant
                <span className="token space"> </span>treated
                <span className="token space"> </span>as
                <span className="token space"> </span>deleted
                <span className="token space"> </span>text.
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">del</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">p</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token lf">{"\n"}</span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">p</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">s</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                This<span className="token space"> </span>line
                <span className="token space"> </span>of
                <span className="token space"> </span>text
                <span className="token space"> </span>is
                <span className="token space"> </span>meant
                <span className="token space"> </span>treated
                <span className="token space"> </span>as
                <span className="token space"> </span>longer
                <span className="token space"> </span>accurate.
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">s</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">p</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token lf">{"\n"}</span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">p</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">ins</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                This<span className="token space"> </span>line
                <span className="token space"> </span>text
                <span className="token space"> </span>is
                <span className="token space"> </span>meant
                <span className="token space"> </span>treated
                <span className="token space"> </span>addition
                <span className="token space"> </span>document.
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">ins</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">p</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token lf">{"\n"}</span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">p</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">u</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                This<span className="token space"> </span>line
                <span className="token space"> </span>of
                <span className="token space"> </span>text
                <span className="token space"> </span>will
                <span className="token space"> </span>render
                <span className="token space"> </span>as
                <span className="token space"> </span>underlined
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">u</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">p</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token lf">{"\n"}</span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">p</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">small</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                This<span className="token space"> </span>line
                <span className="token space"> </span>of
                <span className="token space"> </span>text
                <span className="token space"> </span>is
                <span className="token space"> </span>meant
                <span className="token space"> </span>to
                <span className="token space"> </span>treated
                <span className="token space"> </span>as
                <span className="token space"> </span>fine.
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">small</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">p</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token lf">{"\n"}</span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">p</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">strong</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                This<span className="token space"> </span>line
                <span className="token space"> </span>rendered
                <span className="token space"> </span>as
                <span className="token space"> </span>bold
                <span className="token space"> </span>text.
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">strong</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">p</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token lf">{"\n"}</span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">p</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">em</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                This<span className="token space"> </span>line
                <span className="token space"> </span>rendered
                <span className="token space"> </span>as
                <span className="token space"> </span>italicized
                <span className="token space"> </span>text.
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">em</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">p</span>
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
        <div className="code_item">
          <h4 className="c_head load-order-2" id="list">
            Lists
            <Link
              className="anchorjs-link "
              aria-label="Anchor"
              data-anchorjs-icon=""
              href="#list"
              style={{
                font: "1em / 1 anchorjs-icons",
                paddingLeft: "0.375em",
              }}
            />
          </h4>
          <p>
            Display a list of items inside your content, rendered with a number,
            a bullet, or none.
          </p>
          <div className="unorderlist">
            <h4 className="c_head load-order-2" id="unordered-list">
              Unordered list
              <Link
                className="anchorjs-link "
                aria-label="Anchor"
                data-anchorjs-icon=""
                href="#unordered-list"
                style={{
                  font: "1em / 1 anchorjs-icons",
                  paddingLeft: "0.375em",
                }}
              />
            </h4>
            <code>&lt;ul&gt;</code>
            <ul className="single_list">
              <li>Go to Theme Settings &gt; Header Settings,</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
            </ul>
          </div>
          <div className="unorderlist">
            <h4 className="c_head load-order-2" id="ordered-list">
              Ordered list
              <Link
                className="anchorjs-link "
                aria-label="Anchor"
                data-anchorjs-icon=""
                href="#ordered-list"
                style={{
                  font: "1em / 1 anchorjs-icons",
                  paddingLeft: "0.375em",
                }}
              />
            </h4>
            <code>&lt;ol&gt;</code>
            <div className="steps-panel">
              <ol className="ordered-list">
                <li>
                  Go to{" "}
                  <span className="direction_steps">
                    <span className="direction_step">KbDoc Settings</span>
                    <span className="direction_step">Header</span>{" "}
                    <span className="direction_step">Logo</span>{" "}
                  </span>
                </li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="documentation_body typography_content" id="img">
          <div className="shortcode_title">
            <h2>Image</h2>
            <p>
              <span>Welcome to KbDoc !</span> Documentation and examples for
              typography, including global settings, headings, body text, lists,
              and more.
            </p>
          </div>
          <h4 className="c_head load-order-2" id="responsive">
            Responsive images
            <Link
              className="anchorjs-link "
              aria-label="Anchor"
              data-anchorjs-icon=""
              href="#responsive"
              style={{
                font: "1em / 1 anchorjs-icons",
                paddingLeft: "0.375em",
              }}
            />
          </h4>
          <p>
            Images in Bootstrap are made responsive with <code>.img-fluid</code>
            . <code>max-width: 100%;</code> and <code>height: auto;</code> are
            applied to the image so that it scales with the parent element.
          </p>
          <div className="code-preview p-0">
            <Image
              src={singlePostImgTwo}
              className="img-fluid"
              alt="Responsive image"
            />
          </div>
          <div className="code-toolbar">
            <pre className="snippets language-html">
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
                    <span className="token punctuation">"</span>
                    img-fluid
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token space"> </span>
                  <span className="token attr-name">alt</span>
                  <span className="token attr-value">
                    <span className="token punctuation">=</span>
                    <span className="token punctuation">"</span>
                    Responsive
                    <span className="token space"> </span>image
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
          <div className="code_item">
            <h4 className="c_head load-order-2" id="shap">
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
              Easily create images in different shapes with adding one class to
              the <em>&lt;img&gt;</em> tag.
            </p>
            <div className="code-preview">
              <div className="row">
                <div className="col-md-4 text-center">
                  <Image src={img1} className="rounded" alt="Round image" />
                </div>
                <div className="col-md-4 text-center">
                  <Image
                    src={img2}
                    className="rounded-circle"
                    alt="Circle image"
                  />
                </div>
                <div className="col-md-4 text-center">
                  <Image
                    src={img3}
                    className="img-thumbnail"
                    alt="Thumbnail"
                  />
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
                      <span className="token punctuation">"</span>
                      rounded
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token space"> </span>
                    <span className="token attr-name">alt</span>
                    <span className="token attr-value">
                      <span className="token punctuation">=</span>
                      <span className="token punctuation">"</span>
                      Round
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
                      <span className="token punctuation">"</span>
                      Circle
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
                      <span className="token punctuation">"</span>
                      Thumbnail
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
            <h4 className="c_head load-order-2" id="align">
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
              <code className="highlighter-rouge">block</code>-level images can
              be centered using{" "}
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
                      <span className="token space"> </span>
                      mb-20
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
                      <span className="token punctuation">"</span>
                      rounded
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
                      <span className="token punctuation">"</span>
                      rounded
                      <span className="token space"> </span>
                      float-right
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
                      <span className="token space"> </span>
                      mb-20
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
                      <span className="token punctuation">"</span>
                      rounded
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
                      <span className="token punctuation">"</span>
                      text-center
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
                      <span className="token punctuation">"</span>
                      rounded
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
        </div>
        <div className="documentation_body typography_content" id="video">
          <div className="shortcode_title">
            <h2>Video</h2>
            <p>
              <span>Welcome to KbDoc !</span>Create responsive video or
              slideshow embeds based on the width of the parent by creating an
              intrinsic ratio that scales on any device.
            </p>
          </div>
          <h4 className="c_head load-order-2" id="about">
            About
            <Link
              className="anchorjs-link "
              aria-label="Anchor"
              data-anchorjs-icon=""
              href="#about"
              style={{
                font: "1em / 1 anchorjs-icons",
                paddingLeft: "0.375em",
              }}
            />
          </h4>
          <p>
            Rules are directly applied to{" "}
            <code className="highlighter-rouge">&lt;iframe&gt;</code>,{" "}
            <code className="highlighter-rouge">&lt;embed&gt;</code>,{" "}
            <code className="highlighter-rouge">&lt;video&gt;</code>, and{" "}
            <code className="highlighter-rouge">&lt;object&gt;</code> elements;
            optionally use an explicit descendant class{" "}
            <code className="highlighter-rouge">.embed-responsive-item</code>{" "}
            when you want to match the styling for other attributes.
          </p>
          <div className="code_item">
            <h4 className="c_head load-order-2" id="example">
              Example
              <Link
                className="anchorjs-link "
                aria-label="Anchor"
                data-anchorjs-icon=""
                href="#example"
                style={{
                  font: "1em / 1 anchorjs-icons",
                  paddingLeft: "0.375em",
                }}
              />
            </h4>
            <p>
              Wrap any embed like an{" "}
              <code className="highlighter-rouge">&lt;iframe&gt;</code> in a
              parent element with{" "}
              <code className="highlighter-rouge">.embed-responsive</code> and
              an aspect ratio. The{" "}
              <code className="highlighter-rouge">.embed-responsive-item</code>{" "}
              isn’t strictly required, but we encourage it.
            </p>
            <div className="code-preview">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                  allowFullScreen={true}
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
                      embed-responsive
                      <span className="token space"> </span>
                      embed-responsive-16by9
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
                      <span className="token tag-id">iframe</span>
                    </span>
                    <span className="token space"> </span>
                    <span className="token attr-name">class</span>
                    <span className="token attr-value">
                      <span className="token punctuation">=</span>
                      <span className="token punctuation">"</span>
                      embed-responsive-item
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token space"> </span>
                    <span className="token attr-name">src</span>
                    <span className="token attr-value">
                      <span className="token punctuation">=</span>
                      <span className="token punctuation">"</span>...
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token space"> </span>
                    <span className="token attr-name">allowfullscreen</span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">iframe</span>
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
          <div className="code_item">
            <h4 className="c_head load-order-2" id="ratio">
              Aspect ratios
              <Link
                className="anchorjs-link "
                aria-label="Anchor"
                data-anchorjs-icon=""
                href="#ratio"
                style={{
                  font: "1em / 1 anchorjs-icons",
                  paddingLeft: "0.375em",
                }}
              />
            </h4>
            <p>Aspect ratios can be customized with modifier classes.</p>
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
                      embed-responsive
                      <span className="token space"> </span>
                      embed-responsive-21by9
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">iframe</span>
                    </span>
                    <span className="token space"> </span>
                    <span className="token attr-name">class</span>
                    <span className="token attr-value">
                      <span className="token punctuation">=</span>
                      <span className="token punctuation">"</span>
                      embed-responsive-item
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token space"> </span>
                    <span className="token attr-name">src</span>
                    <span className="token attr-value">
                      <span className="token punctuation">=</span>
                      <span className="token punctuation">"</span>...
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">iframe</span>
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
                  <span className="token lf">{"\n"}</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token lf">{"\n"}</span>
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
                      embed-responsive
                      <span className="token space"> </span>
                      embed-responsive-16by9
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">iframe</span>
                    </span>
                    <span className="token space"> </span>
                    <span className="token attr-name">class</span>
                    <span className="token attr-value">
                      <span className="token punctuation">=</span>
                      <span className="token punctuation">"</span>
                      embed-responsive-item
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token space"> </span>
                    <span className="token attr-name">src</span>
                    <span className="token attr-value">
                      <span className="token punctuation">=</span>
                      <span className="token punctuation">"</span>...
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">iframe</span>
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
                  <span className="token lf">{"\n"}</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token lf">{"\n"}</span>
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
                      embed-responsive
                      <span className="token space"> </span>
                      embed-responsive-4by3
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">iframe</span>
                    </span>
                    <span className="token space"> </span>
                    <span className="token attr-name">class</span>
                    <span className="token attr-value">
                      <span className="token punctuation">=</span>
                      <span className="token punctuation">"</span>
                      embed-responsive-item
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token space"> </span>
                    <span className="token attr-name">src</span>
                    <span className="token attr-value">
                      <span className="token punctuation">=</span>
                      <span className="token punctuation">"</span>...
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">iframe</span>
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
                  <span className="token lf">{"\n"}</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token lf">{"\n"}</span>
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
                      embed-responsive
                      <span className="token space"> </span>
                      embed-responsive-1by1
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">iframe</span>
                    </span>
                    <span className="token space"> </span>
                    <span className="token attr-name">class</span>
                    <span className="token attr-value">
                      <span className="token punctuation">=</span>
                      <span className="token punctuation">"</span>
                      embed-responsive-item
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token space"> </span>
                    <span className="token attr-name">src</span>
                    <span className="token attr-value">
                      <span className="token punctuation">=</span>
                      <span className="token punctuation">"</span>...
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">iframe</span>
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
          <LocalVideo />
        </div>
      </article>
    </>
  );
};

export default ContentPage;
