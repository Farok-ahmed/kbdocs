import answer from "@/assets/img/home_support/answer.png";
import Image from "next/image";
import Link from "next/link";

const AnswerActionForum = () => {
  return (
    <>
      <div className="answer-action">
        <div className="action-content">
          <div className="image-wrap">
            <Image src={answer} alt="answer action" />
          </div>

          <div className="content">
            <h2 className="ans-title">Can’t find an answer?</h2>
            <p>Make use of a qualified tutor to get the answer</p>
          </div>
        </div>

        <div className="action-button-container">
          <Link href="/contact" className="action_btn btn-ans">
            Ask a Question
          </Link>
        </div>
      </div>
    </>
  );
};

export default AnswerActionForum;
