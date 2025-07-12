"use client";
import DocsLayout from "@/components/DocsLayout";
import Link from "next/link";
import TooltipeDynamic from "./.components/tooltipe-dynamic";
import "./style.scss";
const TooltipPage = () => {
  const toolTipeContent = (
    <div
      className="tooltipster-base tooltipster-sidetip tooltipster-right tooltipster-grow tooltipster-show"
      id="tooltipster-593400"
    >
      <div className="tooltipster-box">
        <div className="tooltipster-content">
          <div id="tooltipOne" className="tip_content">
            <div className="text">
              <p>
                Me old mucker bamboozled horse play fantastic skive off baking
                cakes knees up lurgy spiffing, Harry bog wind up say are you
                taking the piss porkies hunky-dory, blower pardon you you mug
                pear shaped pukka get stuffed mate lavatory.
              </p>
              <h6>
                Related Reading:<span>Child Theming for Layers</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="tooltipster-arrow">
        <div className="tooltipster-arrow-uncropped">
          <div className="tooltipster-arrow-border"></div>
          <div className="tooltipster-arrow-background"></div>
        </div>
      </div>
    </div>
  );
  const toolTipeContentTwo = (
    <div
      className="tooltipster-base tooltipster-sidetip tooltipster-top tooltipster-grow tooltipster-show"
      id="tooltipster-551443"
      style={{
        pointerEvents: "auto",
        zIndex: 9999999,
        left: 360,
        top: "270.188px",
        height: 460,
        width: 300,
        animationDuration: "350ms",
        transitionDuration: "350ms",
      }}
    >
      <div className="tooltipster-box">
        <div className="tooltipster-content">
          <div id="tooltipTwo" className="tip_content">
            <img src="/img/blog-grid/blog_grid_post1.jpg" alt="" />
            <div className="text">
              <p>
                Me old mucker bamboozled horse play fantastic skive off baking
                cakes knees up lurgy spiffing, Harry bog wind up say are you
                taking the piss porkies hunky-dory,
              </p>
              <h6>
                Related Reading:<span>Child Theming for Layers</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="tooltipster-arrow" style={{ left: 150 }}>
        <div className="tooltipster-arrow-uncropped">
          <div className="tooltipster-arrow-border" />
          <div className="tooltipster-arrow-background" />
        </div>
      </div>
    </div>
  );
  const toolTipeContentThree = (
    <div className="speech-bubble buble-blue">Your text here</div>
  );
  const toolTipeContentFour = (
    <div className="speech-bubble buble-orange">Editor</div>
  );
  return (
    <>
      <DocsLayout>
        <div id="post" className="shortcode_info rvfs-4" data-rvfs={4}>
          <h4 className="s_title smooth-scroll-heading" id="tooltip-t">
            Tooltip
          </h4>
          <div className="tooltip_content">
            <h6>What is an Extension?</h6>
            <p>
              So I said cup of tea Queen's English owt to do with me I don't
              want no agro cheers cheeky bugger fanny around baking cakes down
              the pub happy days,
              <span className="direction_steps">
                <span className="direction_step">James</span>
                <span className="direction_step">Bond</span>
              </span>
              daft a load of old tosh buggered he lost his bottle lost the plot
              he nicked it a blinding shot.
            </p>
            <p>
              <TooltipeDynamic content={toolTipeContent}>
                <Link
                  href="#"
                  className="tooltips tooltipstered"
                  data-tooltip-content="#tooltipOne"
                >
                  James Bond David{" "}
                </Link>
              </TooltipeDynamic>
              mufty quaint no biggie cras baking cakes barney bamboozled, what a
              plonker bum bag he legged it young delinquent knees up Eaton the
              full monty arse over tit, my lady buggered happy days amongst
              bugger all mate are you taking the piss brolly.
              <TooltipeDynamic content={toolTipeContentTwo}>
                <Link
                  href="#"
                  className="tooltips tooltipstered"
                  data-tooltip-content="#tooltipTwo"
                >
                  William bite your arm{" "}
                </Link>
              </TooltipeDynamic>
              off a blinding shot matie boy old gosh barney grub dropped a
              clanger.
            </p>
            <p>
              Tosser are you taking the piss cuppa porkies pardon you butty lost
              the plot William bog lemon squeezy bite your arm off Richard, say
              what a load of rubbish cockup I don't want no agro twit young
              delinquent cack bodge a bonnet.
            </p>
          </div>
          <div className="highlight_text mt-5">
            <h6>Text Tooltips</h6>
            <p>
              He nicked it chip shop argy-bargy brilliant get stuffed mate
              absolutely bladdered smashing,
              <TooltipeDynamic content={toolTipeContentThree}>
                <span
                  className="tooltips_one"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Your text here"
                >
                  codswallop tosser
                </span>
              </TooltipeDynamic>
              hunky-dory cheers in my flat bite your arm off, cracking goal up{" "}
              <TooltipeDynamic content={toolTipeContentFour}>
                <span
                  className="tooltips_two"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Editar"
                >
                  the duff cheeky bugger zonked why
                </span>
              </TooltipeDynamic>
              . Burke cras Richard grub say bits and bobs mush my lady tinkety
              tonk old fruit crikey fantastic vagabond, sloshed blower barney
              bender is bobby you mug daft argy-bargy.
            </p>
          </div>
          <footer>
            <div className="border_bottom" />
            <div className="row feedback_link">
              <div className="col-lg-6">
                <h6>
                  <i className="icon_mail_alt" />
                  Still stuck?
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
        </div>
      </DocsLayout>
    </>
  );
};

export default TooltipPage;
