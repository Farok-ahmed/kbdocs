export default function Banner() {
    return (
        <section className="doc_banner_area_two">
            <div
                className="b_plus one"
                data-parallax='{"x": 250, "y": 160, "rotateZ":500}'
            >
                <img src="img/home_two/plus.png" alt="" />
            </div>
            <div
                className="b_plus two"
                data-parallax='{"x": 250, "y": 260, "rotateZ":500}'
            >
                <img src="img/home_two/plus_one.png" alt="" />
            </div>
            <div
                className="b_round r_one"
                data-parallax='{"x": 0, "y": 100, "rotateZ":0}'
            ></div>
            <div
                className="b_round r_two"
                data-parallax='{"x": -10, "y": 80, "rotateY":0}'
            ></div>
            <div className="b_round r_three"></div>
            <div className="b_round r_four"></div>
            <img
                className="p_absolute building_img"
                src="img/home_two/building.png"
                alt=""
            />
            <img
                className="p_absolute table_img wow fadeInLeft"
                src="img/home_two/table.svg"
                alt=""
            />
            <img
                className="p_absolute flower wow fadeInUp"
                data-wow-delay="0.6s"
                src="img/home_two/flower.png"
                alt=""
            />
            <img
                className="p_absolute bord wow fadeInRight"
                data-wow-delay="0.4s"
                src="img/home_two/bord.png"
                alt=""
            />
            <img
                className="p_absolute girl wow fadeInRight"
                data-wow-delay="0.8s"
                src="img/home_two/girl.png"
                alt=""
            />
            <div className="container">
                <div className="doc_banner_text_two text-center">
                    <h2>Looking for help?</h2>
                    <p>
                        KnowAll is a fully featured knowledge base theme for
                        WordPress.
                    </p>
                    <form action="#" className="banner_search_form">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Search the Knowledge Base"
                        />
                        <button type="submit" className="search_btn">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
