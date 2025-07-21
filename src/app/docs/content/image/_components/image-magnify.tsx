"use client";
import Link from "next/link";
import { GlassMagnifier } from "react-image-magnifiers";

const ImageMagnify = () => {
  return (
    <>
      <div className="code_item">
        <h4 className="c_head load-order-2" id="image-magnify">
          Image Magnify
          <Link
            className="anchorjs-link "
            aria-label="Anchor"
            data-anchorjs-icon=""
            href="#image-magnify"
            style={{
              font: "1em / 1 anchorjs-icons",
              paddingLeft: "0.375em",
            }}
          />
        </h4>
        <p>
          We designed KbDoc for the readers, optimizing not for page views or
          engagement — but reading. And it turns out that context is a vital
          part of learning.
        </p>

        <GlassMagnifier
          imageSrc="/img/img-large.jpg"
          imageAlt="Example image"
          largeImageSrc="/img/img-large.jpg"
          allowOverflow={true} // Allow magnifier to overflow the image
          magnifierSize={200} // ✅ Must be number or string (like "40%")
          magnifierBorderSize={5}
          magnifierBorderColor="rgba(255,255,255,0.5)"
          magnifierOffsetX={0} // Offset the magnifier horizontally
          magnifierOffsetY={0} // Offset the magnifier vertically
        />

        <div className="code-toolbar">
          <pre className="snippets language-html">
            <code className=" language-html" data-lang="html">
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;</span>
                  <span className="token tag-id">a</span>
                </span>
                <span className="token space"> </span>
                <span className="token attr-name">href</span>
                <span className="token attr-value">
                  <span className="token punctuation">=</span>
                  <span className="token punctuation">"</span>
                  img/img-large.jpg
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
                <span className="token attr-name">class</span>
                <span className="token attr-value">
                  <span className="token punctuation">=</span>
                  <span className="token punctuation">"</span>img-fluid
                  <span className="token space"> </span>zoom
                  <span className="token punctuation">"</span>
                </span>
                <span className="token space"> </span>
                <span className="token attr-name">src</span>
                <span className="token attr-value">
                  <span className="token punctuation">=</span>
                  <span className="token punctuation">"</span>
                  img/img-large.jpg
                  <span className="token punctuation">"</span>
                </span>
                <span className="token space"> </span>
                <span className="token attr-name">alt</span>
                <span className="token attr-value">
                  <span className="token punctuation">=</span>
                  <span className="token punctuation">"</span>large
                  <span className="token punctuation">"</span>
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              <span className="token lf">{"\n"}</span>
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;/</span>
                  <span className="token tag-id">a</span>
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
    </>
  );
};

export default ImageMagnify;
