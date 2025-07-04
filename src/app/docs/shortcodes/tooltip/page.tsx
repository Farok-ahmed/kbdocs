import Link from "next/link";

const TooltipPage = () => {
  return (
    <>
      <div id="post" className="shortcode_info rvfs-4" data-rvfs={4}>
        <h4 className="s_title" id="tooltip-t">
          Tooltip
        </h4>
        <div className="tooltip_content">
          <h6>What is an Extension?</h6>
          <p>
            So I said cup of tea Queen's English owt to do with me I don't want
            no agro cheers cheeky bugger fanny around baking cakes down the pub
            happy days,
            <span className="direction_steps">
              <span className="direction_step">James</span>
              <span className="direction_step">Bond</span>
            </span>
            daft a load of old tosh buggered he lost his bottle lost the plot he
            nicked it a blinding shot.
          </p>
          <p>
            <Link
              href="#"
              className="tooltips tooltipstered"
              data-tooltip-content="#tooltipOne"
            >
              James Bond David
            </Link>
            mufty quaint no biggie cras baking cakes barney bamboozled, what a
            plonker bum bag he legged it young delinquent knees up Eaton the
            full monty arse over tit, my lady buggered happy days amongst bugger
            all mate are you taking the piss brolly.
            <Link
              href="#"
              className="tooltips tooltipstered"
              data-tooltip-content="#tooltipTwo"
            >
              William bite your arm
            </Link>
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
            absolutely bladdered smashing,{" "}
            <span
              className="tooltips_one"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Your text here"
            >
              codswallop tosser
            </span>
            hunky-dory cheers in my flat bite your arm off, cracking goal up{" "}
            <span
              className="tooltips_two"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Editar"
            >
              the duff cheeky bugger zonked why
            </span>
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
                <Link href="#" data-toggle="modal" data-target="#exampleModal3">
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
    </>
  );
};

export default TooltipPage;
