import Link from "next/link";

const Newsletter = () => {
  return (
    <>
      <section className="action_area_three">
        <div className="container">
          <div className="action_content_three text-center">
            <h2>KbDoc will definitely make Your life easier</h2>
            <Link href="#" className="doc_border_btn doc_border_btn_two">
              Buy KbDoc Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
