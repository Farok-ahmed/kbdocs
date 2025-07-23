import Link from "next/link";

const Tooltip = () => {
  return (
    <>
      <h4 className="s_title" id="tooltip-t">
        Tooltip
      </h4>
      <div className="tooltip_content">
        <h6>What is an Extension?</h6>
        <p>
          So I said cup of tea Queen's English owt to do with me I don't want no
          agro cheers cheeky bugger fanny around baking cakes down the pub happy
          days,
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
          plonker bum bag he legged it young delinquent knees up Eaton the full
          monty arse over tit, my lady buggered happy days amongst bugger all
          mate are you taking the piss brolly.
          <Link
            href="#"
            className="tooltips tooltipstered"
            data-tooltip-content="#tooltipTwo"
          >
            William bite your arm
          </Link>
          off a blinding shot matie boy old gosh barney grub dropped a clanger.
        </p>
        <p>
          Tosser are you taking the piss cuppa porkies pardon you butty lost the
          plot William bog lemon squeezy bite your arm off Richard, say what a
          load of rubbish cockup I don't want no agro twit young delinquent cack
          bodge a bonnet.
        </p>
      </div>
      <div className="border_bottom" />
    </>
  );
};

export default Tooltip;
