import Link from "next/link";

const Footnote = () => {
  return (
    <>
      <div className="shortcode_title">
        <h2>Footnotes</h2>
        <p>
          <span>Welcome to KbDoc !</span> Get familiar with the Stripe products
          and explore their features:
        </p>
      </div>
      <p>
        Apparently we had reached a
        <span title="Lorem ipsum dolor sit">great height</span> in the
        atmosphere, for the sky was a dead black, and the stars had ceased to
        twinkle. By the
        <span title="Lorem ipsum dolor, sit amet consectetur adipisicing">
          same illusion
        </span>
        which lifts the horizon of the sea to the level of the spectator on a
        hillside, the sable cloud beneath was dished out, and the car seemed to
        float in the middle of an immense dark sphere, whose upper half was
        strewn with silver. Looking down into the dark gulf below, I could see a
        <span className="tooltip-trigger" title="Lorem ipsum dolor">
          ruddy light
        </span>
        streaming through a rift in the clouds.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod labore
        suscipit
        <a
          href="#note-name-a"
          id="note-link-1"
          className="footnotes-link tooltips tooltipstered"
          data-tooltip-content="#note-link-a"
        />
        animi consequatur. Accusantium quibusdam dolorum at a, numquam deserunt.
      </p>
      <p>
        Lorem ipsum dolor sit
        <a
          href="#note-name-b"
          id="note-link-2"
          className="footnotes-link tooltips tooltipstered"
          data-tooltip-content="#note-link-b"
        />
        amet consectetur, adipisicing elit. Quia quos autem veniam libero!
        Deleniti nemo quas optio voluptas voluptatibus sint ratione. Id vel
        error quia ipsam sit saepe hic at amet excepturi ea. Voluptas sunt
        ratione consequatur
        <a
          href="#note-name-c"
          id="note-link-3"
          className="footnotes-link tooltips tooltipstered"
          data-tooltip-content="#note-link-c"
        />
        optio porro eaque nam quod ex illum modi id animi fugiat vero explicabo
        illo officiis assumenda nulla rerum, dignissimos sed dicta pariatur quis
        eum. Beatae ea cumque alias ducimus quos maxime sed, modi illum at
        repellendus, ex deleniti nesciunt tempore placeat in accusantium!
      </p>
      <div className="footnotes margin-top-xl">
        <h4>Footnotes</h4>
        <ol>
          <li id="note-name-a" className="footnotes_item">
            <strong>Footnote Name A</strong>
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            voluptas dicta dolor.
            <Link href="#note-link-1" aria-label="Back to article">
              ↑
            </Link>
          </li>
          <li id="note-name-b" className="footnotes_item">
            <strong>Footnote Name B</strong> <Link href="#0">[PDF]</Link>
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            voluptas dicta dolor.
            <Link href="#note-link-2" aria-label="Back to article">
              ↑
            </Link>
          </li>
          <li id="note-name-c" className="footnotes_item">
            <strong>Footnote Name C</strong>
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            voluptas dicta dolor.
            <Link href="#note-link-3" aria-label="Back to article">
              ↑
            </Link>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Footnote;
