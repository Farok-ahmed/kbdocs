"use client";

import { useState } from "react";

interface Testimonial {
  id: string;
  name: string;
  photo: string;
  job: string;
  review: string;
}

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials: Testimonial[] = [
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
      name: "Farok",
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
      id: "2",
      name: "Rodney ",
      photo: "img/home_one/icon/feedback.jpg",
      job: "UI/UX designer",
      review: `Nulla porttitor accumsan tincidunt. Praesent
            sapien massa, convallis a pellentesque nec,
            egestas non nisi. Nulla quis lorem ut libero
            malesuada feugiat. Vivamus suscipit tortor
            eget felis porttitor volutpat. Proin eget
            tortor risus.`,
    },
  ];
  // 3. Handlers to navigate between testimonials
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const activeTestimonial = testimonials[activeIndex];

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
              <div className="item">
                <div className="author_img">
                  <img src={activeTestimonial.photo} alt="" />
                </div>
                <p>{activeTestimonial.review}</p>
                <h5>{activeTestimonial.name}</h5>
                <h6>{activeTestimonial.job}</h6>
              </div>
            </div>
            <div className="slider_nav">
              <div className="prev" onClick={handlePrev}>
                <span className="arrow"></span>
              </div>
              <div className="next" onClick={handleNext}>
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
