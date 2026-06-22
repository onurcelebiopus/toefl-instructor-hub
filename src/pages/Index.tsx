import TargetScores from "@/components/TargetScores";
import ScoreForecast from "@/components/ScoreForecast";
import CourseProgress from "@/components/CourseProgress";
import SuccessRate from "@/components/SuccessRate";
import PracticeQuestions from "@/components/PracticeQuestions";

const Index = () => {
  return (
    <>
      <TargetScores />
      <ScoreForecast />
      <CourseProgress />
      <SuccessRate />
      <PracticeQuestions />
    </>
  );
};

export default Index;
