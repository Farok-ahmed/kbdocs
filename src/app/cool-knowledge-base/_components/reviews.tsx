const Reviews = () => {
  const reviews = [
    {
      id: "0",
      name: "Rodney Artichoke",
      photo: "img/home_one/icon/feedback.jpg",
      job: "UI/UX designer",
      review: `Nulla porttitor accumsan tincidunt. Praesent
            sapien massa, convallis a pellentesque nec,
            egestas non nisi. Nulla quis lorem ut libero
            malesuada feugiat. Vivamus suscipit tortor
            eget felis porttitor volutpat. Proin eget
            tortor risus.`,
    },
    {
      id: "1",
      name: "Rodney Artichoke",
      photo: "img/home_one/icon/feedback.jpg",
      job: "UI/UX designer",
      review: `Nulla porttitor accumsan tincidunt. Praesent
            sapien massa, convallis a pellentesque nec,
            egestas non nisi. Nulla quis lorem ut libero
            malesuada feugiat. Vivamus suscipit tortor
            eget felis porttitor volutpat. Proin eget
            tortor risus.`,
    },
  ].slice(0, 1);
  return (
    <>
      <section
        className="doc_feedback_area parallaxie sec_pad"
        data-background="img/bg.jpg"
        style={{
          background: 'url("img/home_one/feedback_bg.jpg") no-repeat scroll',
        }}
      >
        <div className="overlay_bg"></div>
        <div className="container">
          <div className="doc_feedback_info">
            <div className="doc_feedback_slider">
              {reviews.map(({ id, name, photo, job, review }) => {
                return (
                  <div key={id} className="item">
                    <div className="author_img">
                      <img src={photo} alt="" />
                    </div>
                    <p>{review}</p>
                    <h5>{name}</h5>
                    <h6>{job}</h6>
                  </div>
                );
              })}
            </div>
            <div className="slider_nav">
              <div className="prev">
                <span className="arrow"></span>
              </div>
              <div className="next">
                <span className="arrow"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
