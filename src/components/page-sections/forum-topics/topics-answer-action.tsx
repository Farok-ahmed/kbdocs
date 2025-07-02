import Link from "next/link";

const TopicsAnswerAction = () => {
  return (
    <>
      <div className="answer-action">
        <div className="action-content">
          <div className="image-wrap">
            <img src="img/home_support/answer.png" alt="answer action" />
          </div>

          <div className="content">
            <h2 className="ans-title">Can’t find an answer?</h2>
            <p>Make use of a qualified tutor to get the answer</p>
          </div>
        </div>

        <div className="action-button-container">
          <Link href="#" className="action_btn btn-ans">
            Ask a Question
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopicsAnswerAction;
