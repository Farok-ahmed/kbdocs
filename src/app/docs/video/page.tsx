import VideoPlaylist from "./_components/video-playlist";

const VideoPage = () => {
  return (
    <>
      <div id="post" className="documentation_info rvfs-4" data-rvfs={4}>
        <article
          className="documentation_body typography_content"
          id="documentation"
        >
          <div className="shortcode_title">
            <h1>Video</h1>
            <p>
              <span>Welcome to KbDoc !</span>Create responsive video or
              slideshow embeds based on the width of the parent by creating an
              intrinsic ratio that scales on any device.
            </p>
          </div>
          <h4 className="c_head load-order-2" id="about">
            About
            <a
              className="anchorjs-link "
              aria-label="Anchor"
              data-anchorjs-icon=""
              href="#about"
              style={{ font: "1em / 1 anchorjs-icons", paddingLeft: "0.375em" }}
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
          <div className="mt-5 code_item">
            <h4 className="c_head load-order-2" id="example">
              Example
              <a
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
                  allowFullScreen
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
          <div className="mt-5 code_item">
            <h4 className="c_head load-order-2" id="vimeo_video">
              Vimeo Video
              <a
                className="anchorjs-link "
                aria-label="Anchor"
                data-anchorjs-icon=""
                href="#vimeo_video"
                style={{
                  font: "1em / 1 anchorjs-icons",
                  paddingLeft: "0.375em",
                }}
              />
            </h4>
            <p>
              While it's always better to host your videos on a video sharing
              website, but we provided a sample for you to include local videos
              in your pages.
            </p>
            <div className="code-preview" id="inline-popups">
              <img src="/img/img-pointer2.jpg" alt="" />
              <a className="popup-youtube video_icon" href="#vid2">
                <i className="arrow_triangle-right" />
              </a>
            </div>
          </div>
          <div className="mt-5">
            <h4 className="c_head load-order-2" id="autoplay_video">
              AutoPlay Local Video
              <a
                className="anchorjs-link "
                aria-label="Anchor"
                data-anchorjs-icon=""
                href="#autoplay_video"
                style={{
                  font: "1em / 1 anchorjs-icons",
                  paddingLeft: "0.375em",
                }}
              />
            </h4>
            <p>
              The local videos would automatically play while the user scrolls
              to the video section and each video will automatically pause when
              the user skip the video by scrolling. Video is an electronic
              medium for the recording, copying, playback, broadcasting, and
              display of moving visual media.
            </p>
            <div className="local-video-container">
              <video controls muted>
                <source
                  src="https://html.spider-themes.com/media//sample-video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <VideoPlaylist />
          <footer>
            <div className="border_bottom" />
            <div className="row feedback_link">
              <div className="col-lg-6">
                <h6>
                  <i className="icon_mail_alt" />
                  Still stuck?{" "}
                  <a href="#" data-toggle="modal" data-target="#exampleModal3">
                    How can we help?
                  </a>
                </h6>
              </div>
              <div className="col-lg-6">
                <p>
                  Was this page helpful?{" "}
                  <a href="#" className="h_btn">
                    Yes
                  </a>
                  <a href="#" className="h_btn">
                    No
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
};

export default VideoPage;
