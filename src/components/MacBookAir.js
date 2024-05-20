import FrameComponent3 from "./FrameComponent3";

const MacBookAir = () => {
  return (
    <div className="absolute top-[847px] left-[calc(50%_-_720px)] [background:linear-gradient(180deg,_rgba(183,_59,_190,_0.05),_rgba(153,_46,_157,_0.05))] box-border w-[1440px] overflow-hidden flex flex-row items-center justify-between py-9 px-32 text-left text-21xl text-eminence-700 font-tutedude-typography-title-small border-[1px] border-solid border-eminence-100">
      <FrameComponent3
        onlineLearning="/online-learning.svg"
        prop="24"
        courses="Courses"
      />
      <div className="w-px relative bg-eminence-200 h-[100px]" />
      <FrameComponent3
        onlineLearning="/graduated.svg"
        prop="30k+"
        courses="Learners"
      />
      <div className="w-px relative bg-eminence-200 h-[100px]" />
      <FrameComponent3
        onlineLearning="/question-mark.svg"
        prop="100k+"
        courses="Doubts Solved"
      />
      <div className="w-px relative bg-eminence-200 h-[100px]" />
      <FrameComponent3
        onlineLearning="/complete.svg"
        prop="10k+"
        courses="Student Projects"
      />
    </div>
  );
};

export default MacBookAir;
