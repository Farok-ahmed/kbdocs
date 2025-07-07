import Link from "next/link";

const Features = () => {
  const featureData = [
    {
      id: 1,
      title: "Knowledge Base",
      description: "Oxford bonnet are you taking the piss cheeky mufty.",
      image: "/img/home_one/Lamp_idea.png",
      link: "",
    },
    {
      id: 2,
      title: "Community Forums",
      description: "Oxford bonnet are you taking the piss cheeky mufty.",
      image: "/img/home_one/chat.png",
      link: "",
    },
    {
      id: 3,
      title: "Documentation",
      description: "Oxford bonnet are you taking the piss cheeky mufty.",
      image: "/img/home_one/Duplicate.png",
      link: "",
    },
  ];
  return (
    <>
      <section className="doc_features_area_one">
        <div className="container">
          <div className="row">
            {featureData.map((item) => (
              <div key={item.id} className="col-lg-4 col-sm-6">
                <div
                  className="media doc_features_item_one wow fadeInLeft"
                  data-wow-delay="0.2s"
                >
                  <img src={item.image} alt="" />
                  <div className="media-body">
                    <Link href="">
                      <h3>{item.title}</h3>
                    </Link>
                    <p>{item.description}</p>
                    <Link href="" className="learn_btn">
                      Learn More <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
