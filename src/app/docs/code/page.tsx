import Link from "next/link";
import "./styile.scss";

const CodePage = () => {
  return (
    <>
      <div id="post" className="documentation_info rvfs-4" data-rvfs={4}>
        <article className="documentation_body shortcode_text">
          <div className="shortcode_title">
            <h2 id="inline-code" className="load-order-2">
              Source Code
              <Link
                className="anchorjs-link "
                aria-label="Anchor"
                data-anchorjs-icon=""
                href="#inline-code"
                style={{
                  font: "1em / 1 anchorjs-icons",
                  paddingLeft: "0.375em",
                }}
              />
            </h2>
          </div>
          <h4 id="from-an-html-element" className="c_head load-order-2">
            HTML Code Blocks
            <Link
              className="anchorjs-link "
              aria-label="Anchor"
              data-anchorjs-icon=""
              href="#from-an-html-element"
              style={{ font: "1em / 1 anchorjs-icons", paddingLeft: "0.375em" }}
            />
          </h4>
          <p>
            From a group of elements with one parent. Same as first one, but use
            this method if you are creating a popup from a list of elements in
            one container. Note that this method does not enable gallery mode,
            it just reduces the number of click event handlers; each item will
            be opened as a single popup. If you wish to enable gallery, add the{" "}
            <code>
              gallery:{"{"}enabled:true{"}"}
            </code>{" "}
            option.
          </p>
          <div className="highlight">
            <div className="code-toolbar">
              <pre className=" language-html">
                <code className=" language-html" data-lang="html">
                  For<span className="token space"> </span>example,
                  <span className="token space"> </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation" />
                    </span>
                    <span className="nt">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>
                        <span className="token tag-id">code</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token punctuation" />
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">
                        <span className="nt">&lt;</span>
                      </span>
                      <span className="token tag-id">section</span>
                    </span>
                    <span className="token punctuation">
                      <span className="ni">&gt;</span>
                    </span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation" />
                    </span>
                    <span className="nt">
                      <span className="token tag">
                        <span className="token punctuation">&lt;/</span>
                        <span className="token tag-id">code</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token punctuation" />
                  </span>
                  <span className="token space"> </span>should
                  <span className="token space"> </span>be
                  <span className="token space"> </span>wrapped
                  <span className="token space"> </span>as
                  <span className="token space"> </span>inline.
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
          <div className="highlight">
            <div className="code-toolbar">
              <pre className=" language-html">
                <code className=" language-html" data-lang="html">
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">p</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <mark>Highlight</mark>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>text
                  <span className="token space"> </span>with
                  <span className="token space"> </span>HTML
                  <span className="token space"> </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">mark</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token space"> </span>tag
                  <span className="token lf">{"\n"}</span>
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
            <div className="code-toolbar">
              <pre className=" language-html">
                <code className=" language-html" data-lang="html">
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">ul</span>
                    </span>
                    <span className="token space"> </span>
                    <span className="token attr-name">class</span>
                    <span className="token attr-value">
                      <span className="token punctuation">=</span>
                      <span className="token punctuation">"</span>list-unstyled
                      <span className="token space"> </span>f_social_icon
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
                      <span className="token tag-id">li</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">a</span>
                    </span>
                    <span className="token space"> </span>
                    <span className="token attr-name">href</span>
                    <span className="token attr-value">
                      <span className="token punctuation">=</span>
                      <span className="token punctuation">"</span>#
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">i</span>
                    </span>
                    <span className="token space"> </span>
                    <span className="token attr-name">class</span>
                    <span className="token attr-value">
                      <span className="token punctuation">=</span>
                      <span className="token punctuation">"</span>
                      social_facebook
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">i</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">a</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">li</span>
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
                      <span className="token tag-id">li</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">a</span>
                    </span>
                    <span className="token space"> </span>
                    <span className="token attr-name">href</span>
                    <span className="token attr-value">
                      <span className="token punctuation">=</span>
                      <span className="token punctuation">"</span>#
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">i</span>
                    </span>
                    <span className="token space"> </span>
                    <span className="token attr-name">class</span>
                    <span className="token attr-value">
                      <span className="token punctuation">=</span>
                      <span className="token punctuation">"</span>social_twitter
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">i</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">a</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">li</span>
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
                      <span className="token tag-id">li</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">a</span>
                    </span>
                    <span className="token space"> </span>
                    <span className="token attr-name">href</span>
                    <span className="token attr-value">
                      <span className="token punctuation">=</span>
                      <span className="token punctuation">"</span>#
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">i</span>
                    </span>
                    <span className="token space"> </span>
                    <span className="token attr-name">class</span>
                    <span className="token attr-value">
                      <span className="token punctuation">=</span>
                      <span className="token punctuation">"</span>social_vimeo
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">i</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">a</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">li</span>
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
                      <span className="token tag-id">li</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">a</span>
                    </span>
                    <span className="token space"> </span>
                    <span className="token attr-name">href</span>
                    <span className="token attr-value">
                      <span className="token punctuation">=</span>
                      <span className="token punctuation">"</span>#
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">i</span>
                    </span>
                    <span className="token space"> </span>
                    <span className="token attr-name">class</span>
                    <span className="token attr-value">
                      <span className="token punctuation">=</span>
                      <span className="token punctuation">"</span>
                      social_linkedin
                      <span className="token punctuation">"</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">i</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">a</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">li</span>
                    </span>
                    <span className="token punctuation">&gt;</span>
                  </span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token tag">
                    <span className="token tag">
                      <span className="token punctuation">&lt;</span>
                      <span className="token tag-id">ul</span>
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
          <h4 id="css-code" className="c_head load-order-2">
            CSS Source Code
            <Link
              className="anchorjs-link "
              aria-label="Anchor"
              data-anchorjs-icon=""
              href="#css-code"
              style={{ font: "1em / 1 anchorjs-icons", paddingLeft: "0.375em" }}
            />
          </h4>
          <div className="highlight">
            <div className="code-toolbar">
              <pre className=" language-javascript">
                <code className=" language-javascript" data-lang="javascript">
                  html<span className="token space"> </span>
                  <span className="token punctuation">{"{"}</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>height
                  <span className="token operator">:</span>
                  <span className="token space"> </span>
                  <span className="token number">100</span>
                  <span className="token operator">%</span>
                  <span className="token punctuation">;</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token punctuation">{"}"}</span>
                  <span className="token lf">{"\n"}</span>a
                  <span className="token space"> </span>
                  <span className="token punctuation">{"{"}</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>text
                  <span className="token operator">-</span>decoration
                  <span className="token operator">:</span>
                  <span className="token space"> </span>none
                  <span className="token punctuation">;</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>transition
                  <span className="token operator">:</span>
                  <span className="token space"> </span>all
                  <span className="token space"> </span>
                  <span className="token number">0.3</span>s
                  <span className="token space"> </span>ease
                  <span className="token operator">-</span>
                  <span className="token keyword keyword-in">in</span>
                  <span className="token operator">-</span>out
                  <span className="token punctuation">;</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token punctuation">{"}"}</span>
                  <span className="token lf">{"\n"}</span>a
                  <span className="token operator">:</span>hover
                  <span className="token punctuation">,</span>
                  <span className="token space"> </span>a
                  <span className="token operator">:</span>focus
                  <span className="token space"> </span>
                  <span className="token punctuation">{"{"}</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>text
                  <span className="token operator">-</span>decoration
                  <span className="token operator">:</span>
                  <span className="token space"> </span>none
                  <span className="token punctuation">;</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>outline
                  <span className="token operator">:</span>
                  <span className="token space"> </span>none
                  <span className="token punctuation">;</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>color
                  <span className="token operator">:</span>
                  <span className="token space"> </span>#
                  <span className="token number">10</span>b3d6
                  <span className="token punctuation">;</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token punctuation">{"}"}</span>
                  <span className="token lf">{"\n"}</span>body
                  <span className="token space"> </span>
                  <span className="token punctuation">{"{"}</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>line
                  <span className="token operator">-</span>height
                  <span className="token operator">:</span>
                  <span className="token space"> </span>
                  <span className="token number">24</span>px
                  <span className="token punctuation">;</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>font
                  <span className="token operator">-</span>size
                  <span className="token operator">:</span>
                  <span className="token space"> </span>
                  <span className="token number">16</span>px
                  <span className="token punctuation">;</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>height
                  <span className="token operator">:</span>
                  <span className="token space"> </span>
                  <span className="token number">100</span>
                  <span className="token operator">%</span>
                  <span className="token punctuation">;</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>font
                  <span className="token operator">-</span>family
                  <span className="token operator">:</span>
                  <span className="token space"> </span>
                  <span className="token string">"Roboto"</span>
                  <span className="token punctuation">,</span>
                  <span className="token space"> </span>sans
                  <span className="token operator">-</span>serif
                  <span className="token punctuation">;</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>font
                  <span className="token operator">-</span>weight
                  <span className="token operator">:</span>
                  <span className="token space"> </span>
                  <span className="token number">400</span>
                  <span className="token punctuation">;</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>color
                  <span className="token operator">:</span>
                  <span className="token space"> </span>#
                  <span className="token number">6</span>b707f
                  <span className="token punctuation">;</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token punctuation">{"}"}</span>
                </code>
              </pre>
              <div className="toolbar">
                <div className="toolbar-item">
                  <span>JavaScript</span>
                </div>
                <div className="toolbar-item">
                  <button>Copy</button>
                </div>
              </div>
            </div>
          </div>
          <h4 id="javascript-code" className="c_head load-order-2">
            JavaScript Source Code
            <Link
              className="anchorjs-link "
              aria-label="Anchor"
              data-anchorjs-icon=""
              href="#javascript-code"
              style={{ font: "1em / 1 anchorjs-icons", paddingLeft: "0.375em" }}
            />
          </h4>
          <div className="highlight">
            <div className="code-toolbar">
              <pre className=" language-javascript">
                <code className=" language-javascript" data-lang="javascript">
                  <span className="token function">$</span>
                  <span className="token punctuation">(</span>
                  <span className="token string">".img_popup"</span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">.</span>
                  <span className="token method function property-access">
                    each
                  </span>
                  <span className="token punctuation">(</span>
                  <span className="token keyword keyword-function">
                    function
                  </span>
                  <span className="token space"> </span>
                  <span className="token punctuation">(</span>
                  <span className="token punctuation">)</span>
                  <span className="token space"> </span>
                  <span className="token punctuation">{"{"}</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token function">$</span>
                  <span className="token punctuation">(</span>
                  <span className="token string">".img_popup"</span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">.</span>
                  <span className="token method function property-access">
                    magnificPopup
                  </span>
                  <span className="token punctuation">(</span>
                  <span className="token punctuation">{"{"}</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>type
                  <span className="token operator">:</span>
                  <span className="token space"> </span>
                  <span className="token string">'image'</span>
                  <span className="token punctuation">,</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>closeOnContentClick
                  <span className="token operator">:</span>
                  <span className="token space"> </span>
                  <span className="token boolean">true</span>
                  <span className="token punctuation">,</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>closeBtnInside
                  <span className="token operator">:</span>
                  <span className="token space"> </span>
                  <span className="token boolean">false</span>
                  <span className="token punctuation">,</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>fixedContentPos
                  <span className="token operator">:</span>
                  <span className="token space"> </span>
                  <span className="token boolean">true</span>
                  <span className="token punctuation">,</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>removalDelay
                  <span className="token operator">:</span>
                  <span className="token space"> </span>
                  <span className="token number">300</span>
                  <span className="token punctuation">,</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>mainClass
                  <span className="token operator">:</span>
                  <span className="token space"> </span>
                  <span className="token string">
                    'mfp-no-margins<span className="token space"> </span>
                    mfp-with-zoom'
                  </span>
                  <span className="token punctuation">,</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>image
                  <span className="token operator">:</span>
                  <span className="token space"> </span>
                  <span className="token punctuation">{"{"}</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>enabled
                  <span className="token operator">:</span>
                  <span className="token space"> </span>
                  <span className="token boolean">true</span>
                  <span className="token punctuation">,</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>navigateByImgClick
                  <span className="token operator">:</span>
                  <span className="token space"> </span>
                  <span className="token boolean">true</span>
                  <span className="token punctuation">,</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>preload
                  <span className="token operator">:</span>
                  <span className="token space"> </span>
                  <span className="token punctuation">[</span>
                  <span className="token number">0</span>
                  <span className="token punctuation">,</span>
                  <span className="token space"> </span>
                  <span className="token number">1</span>
                  <span className="token punctuation">]</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token punctuation">{"}"}</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token punctuation">{"}"}</span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token punctuation">{"}"}</span>
                  <span className="token punctuation">)</span>
                </code>
              </pre>
              <div className="toolbar">
                <div className="toolbar-item">
                  <span>JavaScript</span>
                </div>
                <div className="toolbar-item">
                  <button>Copy</button>
                </div>
              </div>
            </div>
          </div>
          <h4 id="php-code" className="c_head load-order-2">
            PHP Source Code
            <Link
              className="anchorjs-link "
              aria-label="Anchor"
              data-anchorjs-icon=""
              href="#php-code"
              style={{ font: "1em / 1 anchorjs-icons", paddingLeft: "0.375em" }}
            />
          </h4>
          <div className="highlight">
            <div className="code-toolbar">
              <pre className=" language-php">
                <code className=" language-php" data-lang="php">
                  <span className="token keyword keyword-function">
                    function
                  </span>
                  <span className="token space"> </span>
                  <span className="token function">docly_setup</span>
                  <span className="token punctuation">(</span>
                  <span className="token punctuation">)</span>
                  <span className="token space"> </span>
                  <span className="token punctuation">{"{"}</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token function">load_theme_textdomain</span>
                  <span className="token punctuation">(</span>
                  <span className="token space"> </span>
                  <span className="token single-quoted-string string">
                    'kbDoc'
                  </span>
                  <span className="token punctuation">,</span>
                  <span className="token space"> </span>
                  <span className="token function">get_template_directory</span>
                  <span className="token punctuation">(</span>
                  <span className="token punctuation">)</span>
                  <span className="token space"> </span>
                  <span className="token punctuation">.</span>
                  <span className="token space"> </span>
                  <span className="token single-quoted-string string">
                    '/languages'
                  </span>
                  <span className="token space"> </span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token comment">
                    //<span className="token space"> </span>Add
                    <span className="token space"> </span>default
                    <span className="token space"> </span>posts
                    <span className="token space"> </span>and
                    <span className="token space"> </span>comments
                    <span className="token space"> </span>RSS
                    <span className="token space"> </span>feed
                    <span className="token space"> </span>links
                    <span className="token space"> </span>to
                    <span className="token space"> </span>head.
                  </span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token function">add_theme_support</span>
                  <span className="token punctuation">(</span>
                  <span className="token space"> </span>
                  <span className="token single-quoted-string string">
                    'automatic-feed-links'
                  </span>
                  <span className="token space"> </span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token comment">
                    //<span className="token space"> </span>Enable
                    <span className="token space"> </span>excerpt
                    <span className="token space"> </span>support
                    <span className="token space"> </span>for
                    <span className="token space"> </span>page
                  </span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token function">add_post_type_support</span>
                  <span className="token punctuation">(</span>
                  <span className="token space"> </span>
                  <span className="token single-quoted-string string">
                    'page'
                  </span>
                  <span className="token punctuation">,</span>
                  <span className="token space"> </span>
                  <span className="token single-quoted-string string">
                    'excerpt'
                  </span>
                  <span className="token space"> </span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token comment">
                    //<span className="token space"> </span>Enable
                    <span className="token space"> </span>WooCommerce
                    <span className="token space"> </span>Support
                  </span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token function">add_theme_support</span>
                  <span className="token punctuation">(</span>
                  <span className="token space"> </span>
                  <span className="token single-quoted-string string">
                    'woocommerce'
                  </span>
                  <span className="token space"> </span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token function">add_theme_support</span>
                  <span className="token punctuation">(</span>
                  <span className="token space"> </span>
                  <span className="token single-quoted-string string">
                    'title-tag'
                  </span>
                  <span className="token space"> </span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token comment">
                    /*<span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>*
                    <span className="token space"> </span>Enable
                    <span className="token space"> </span>support
                    <span className="token space"> </span>for
                    <span className="token space"> </span>Post
                    <span className="token space"> </span>Thumbnails
                    <span className="token space"> </span>on
                    <span className="token space"> </span>posts
                    <span className="token space"> </span>and
                    <span className="token space"> </span>pages.
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>*
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>*
                    <span className="token space"> </span>@link
                    <span className="token space"> </span>
                    <Link
                      className="token url-link"
                      href="https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/"
                    >
                      https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
                    </Link>
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>*/
                  </span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token function">add_theme_support</span>
                  <span className="token punctuation">(</span>
                  <span className="token space"> </span>
                  <span className="token single-quoted-string string">
                    'post-thumbnails'
                  </span>
                  <span className="token space"> </span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token function">add_theme_support</span>
                  <span className="token punctuation">(</span>
                  <span className="token space"> </span>
                  <span className="token single-quoted-string string">
                    'post-formats'
                  </span>
                  <span className="token punctuation">,</span>
                  <span className="token space"> </span>
                  <span className="token keyword keyword-array">array</span>
                  <span className="token punctuation">(</span>
                  <span className="token space"> </span>
                  <span className="token single-quoted-string string">
                    'audio'
                  </span>
                  <span className="token punctuation">,</span>
                  <span className="token space"> </span>
                  <span className="token single-quoted-string string">
                    'video'
                  </span>
                  <span className="token punctuation">,</span>
                  <span className="token space"> </span>
                  <span className="token single-quoted-string string">
                    'quote'
                  </span>
                  <span className="token punctuation">,</span>
                  <span className="token space"> </span>
                  <span className="token single-quoted-string string">
                    'link'
                  </span>
                  <span className="token space"> </span>
                  <span className="token punctuation">)</span>
                  <span className="token space"> </span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token comment">
                    //<span className="token space"> </span>This
                    <span className="token space"> </span>theme
                    <span className="token space"> </span>uses
                    <span className="token space"> </span>wp_nav_menu()
                    <span className="token space"> </span>in
                    <span className="token space"> </span>one
                    <span className="token space"> </span>location.
                  </span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token function">register_nav_menus</span>
                  <span className="token punctuation">(</span>
                  <span className="token space"> </span>
                  <span className="token keyword keyword-array">array</span>
                  <span className="token punctuation">(</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token single-quoted-string string">
                    'main_menu'
                  </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token operator">=</span>
                  <span className="token operator">&gt;</span>
                  <span className="token space"> </span>
                  <span className="token function">esc_html__</span>
                  <span className="token punctuation">(</span>
                  <span className="token space"> </span>
                  <span className="token single-quoted-string string">
                    'Main<span className="token space"> </span>menu'
                  </span>
                  <span className="token punctuation">,</span>
                  <span className="token space"> </span>
                  <span className="token single-quoted-string string">
                    'kbDoc'
                  </span>
                  <span className="token space"> </span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">,</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token single-quoted-string string">
                    'overlay_menu'
                  </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token operator">=</span>
                  <span className="token operator">&gt;</span>
                  <span className="token space"> </span>
                  <span className="token function">esc_html__</span>
                  <span className="token punctuation">(</span>
                  <span className="token space"> </span>
                  <span className="token single-quoted-string string">
                    'Overlay<span className="token space"> </span>menu'
                  </span>
                  <span className="token punctuation">,</span>
                  <span className="token space"> </span>
                  <span className="token single-quoted-string string">
                    'kbDoc'
                  </span>
                  <span className="token space"> </span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">,</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token space"> </span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token punctuation">{"}"}</span>
                  <span className="token lf">{"\n"}</span>
                  <span className="token function">add_action</span>
                  <span className="token punctuation">(</span>
                  <span className="token space"> </span>
                  <span className="token single-quoted-string string">
                    'after_setup_theme'
                  </span>
                  <span className="token punctuation">,</span>
                  <span className="token space"> </span>
                  <span className="token single-quoted-string string">
                    'docly_setup'
                  </span>
                  <span className="token space"> </span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                </code>
              </pre>
              <div className="toolbar">
                <div className="toolbar-item">
                  <span>PHP</span>
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
    </>
  );
};

export default CodePage;
