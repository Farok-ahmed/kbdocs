const Blockquote = () => {
  return (
    <>
      <div className="blockquote_inner">
        <h4 className="h4">Blockquote</h4>
        <blockquote className="blockquote">
          <p className="mb-0">
            Sloshed porkies it's your round bugger up the kyver say buggered
            cheeky bugger in my flat, say chinwag bobby blow off squiffy bleeder
            quaint spiffing owt to do with me, brilliant chimney pot excuse my
            French daft bog-standard lemon squeezy cheers. In my flat cup of tea
            cracking goal tinkety tonk old fruit pukka car boot fantastic golly
            gosh.!
          </p>
        </blockquote>
        <h6 className="h6 regular">Single line blockquote:</h6>
        <blockquote className="blockquote_two">
          <h5 className="mb-0 h5">
            <span className="quote_icon">,,</span>Stay Hungry. Stay foolish.
          </h5>
        </blockquote>
        <h6 className="h6 regular">
          Multi line blockquote with a cite reference:
        </h6>
        <blockquote className="blockquote_two">
          <h5 className="mb-0 h5">
            <span className="quote_icon">,,</span>The HTML{" "}
            <span>&lt;blockquote&gt;</span> Element (or HTML Block Quotation
            Element) indicates that the enclosed text is an extended quotation.
            Usually, this is rendered visually by indentation (see Notes for how
            to change it). A URL for the source of the quotation may be given
            using the cite attribute, while a text representation of the source
            can be given using the <span>&lt;cite&lt;</span> element.
          </h5>
        </blockquote>
      </div>
    </>
  );
};

export default Blockquote;
