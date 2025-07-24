"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface Testimonial {
  id: string;
  name: string;
  photo: string;
  job: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    id: "0",
    name: "Rodney Artichoke",
    photo: "/img/home_one/icon/feedback.jpg",
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
    photo: "/img/home_one/icon/feedback.jpg",
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
    photo: "/img/home_one/icon/feedback.jpg",
    job: "UI/UX designer",
    review: `Nulla porttitor accumsan tincidunt. Praesent
          sapien massa, convallis a pellentesque nec,
          egestas non nisi. Nulla quis lorem ut libero
          malesuada feugiat. Vivamus suscipit tortor
          eget felis porttitor volutpat. Proin eget
          tortor risus.`,
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section
      className="doc_feedback_area parallaxie sec_pad"
      data-background="/img/bg.jpg"
      style={{
        background: 'url("/img/home_one/feedback_bg.jpg") no-repeat scroll',
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="overlay_bg"></div>
      <div className="container">
        <div className="doc_feedback_info">
          <div
            className="doc_feedback_slider"
            style={{ position: "relative", height: "auto" }}
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activeTestimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "tween", duration: 0.5 }}
                className="item"
              >
                <div className="author_img">
                  <img
                    src={activeTestimonial.photo}
                    alt={activeTestimonial.name}
                  />
                </div>
                <p>{activeTestimonial.review}</p>
                <h5>{activeTestimonial.name}</h5>
                <h6>{activeTestimonial.job}</h6>
              </motion.div>
            </AnimatePresence>
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
  );
};

export default Reviews;
