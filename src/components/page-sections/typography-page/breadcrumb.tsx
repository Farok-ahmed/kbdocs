const Breadcrumb = () => {
  return (
    <>
      <div className="breadcrumb_area_three">
        <img
          className="p_absolute one"
          src="img/typography/leaf_left.png"
          alt=""
        />
        <img
          className="p_absolute two"
          src="img/typography/man_01.png"
          alt=""
        />
        <img
          className="p_absolute three"
          src="img/typography/man_02.png"
          alt=""
        />
        <img
          className="p_absolute four"
          src="img/typography/leaf_right.png"
          alt=""
        />
        <div className="container">
          <div className="breadcrumb_text">
            <h2>
              Hello! here is <span>Typography</span>
            </h2>
            <p>
              KbDoc has the nice typography settings by default, if needed you
              can customize any of the elements font you can see in this page
              really easily from the theme options.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
