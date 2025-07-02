import Link from "next/link";

const CommunitiesForumTopics = () => {
  return (
    <>
      <div className="communities-boxes">
        <div className="kbDoc-com-box">
          <div className="icon-container">
            <img src="img/home_support/rc1.png" alt="communinity-box" />
          </div>

          <div className="kbDoc-com-box-content">
            <h3 className="title">
              <Link href="#"> Getting Started</Link>
            </h3>
            <p className="total-post">453 Posts</p>
          </div>
        </div>

        <div className="kbDoc-com-box">
          <div className="icon-container">
            <img src="img/home_support/rc2.png" alt="communinity-box" />
          </div>

          <div className="kbDoc-com-box-content">
            <h3 className="title">
              <Link href="#"> Integrations</Link>
            </h3>
            <p className="total-post">624 Posts</p>
          </div>
        </div>

        <div className="kbDoc-com-box">
          <div className="icon-container">
            <img src="img/home_support/rc3.png" alt="communinity-box" />
          </div>

          <div className="kbDoc-com-box-content">
            <h3 className="title">
              <Link href="#"> Solar System</Link>
            </h3>
            <p className="total-post">120 Posts</p>
          </div>
        </div>

        <div className="kbDoc-com-box">
          <div className="icon-container">
            <img src="img/home_support/rc4.png" alt="communinity-box" />
          </div>

          <div className="kbDoc-com-box-content">
            <h3 className="title">
              <Link href="#"> Cloud Server</Link>
            </h3>
            <p className="total-post">235 Posts</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CommunitiesForumTopics;
