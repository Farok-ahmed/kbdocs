import DocsLayout from "@/components/DocsLayout";
import TourAnswerQuestion from "./.components/tour-answer-question";

const TourPage = () => {
  return (
    <>
      <DocsLayout>
        <div className="documentation_info tour_content">
          <div className="documentation_body" id="documentation">
            <div className="shortcode_title">
              <h1>Welcome to KbDoc !</h1>
              <p>
                Documentation and examples for typography, including global
                settings, headings, body text, lists, and more.With your help,
                we're working together to build a library of detailed answers to
                every question about programming.
              </p>
            </div>
            <TourAnswerQuestion />
          </div>
        </div>
      </DocsLayout>
    </>
  );
};

export default TourPage;
