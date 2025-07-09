import Link from "next/link";

const TopicsPagination = () => {
  return (
    <>
      <div className="pagination-wrapper">
        <div className="view-post-of">
          <p>Viewing 8 topics - 1 through 10 (of 342 total)</p>
        </div>
        <ul className="post-pagination">
          <li className="prev-post pegi-disable">
            <Link href="#">
              <i className="arrow_carrot-left"></i>
            </Link>
          </li>
          <li>
            <Link href="#" className="active">
              1
            </Link>
          </li>
          <li>
            <Link href="#">2</Link>
          </li>
          <li>
            <Link href="#">3</Link>
          </li>
          <li>
            <Link href="#">4</Link>
          </li>
          <li>
            <Link href="#">15</Link>
          </li>
          <li className="next-post">
            <Link href="#">
              <i className="arrow_carrot-right"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TopicsPagination;
