import Link from "next/link";

const VideoPlaylist = () => {
  return (
    <>
      <div className="mt-5">
        <h4 className="c_head load-order-2" id="yt-channel-playlist">
          YouTube Channel Videos Playlist
          <Link
            className="anchorjs-link "
            aria-label="Anchor"
            data-anchorjs-icon=""
            href="#yt-channel-playlist"
            style={{ font: "1em / 1 anchorjs-icons", paddingLeft: "0.375em" }}
          />
        </h4>
        <p>
          Your channel is where you can organize your video content for your
          audience. As a channel owner, you can add videos, links, and info
          about yourself or your channel for visitors to explore.
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?si=JDycLGCvSD3WNfNM&amp;list=PLOvD0JgcgsQyAVGBQ9XCilR2m_keSP9iv"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};

export default VideoPlaylist;
