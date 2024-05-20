import FrameComponent2 from "./FrameComponent2";

const CourseCurriculum1 = () => {
  return (
    <div className="absolute top-[1120px] w-full bg-eminence-50  h-[957px] overflow-hidden text-center text-xl text-eminence-700 font-tutedude-typography-title-small">
      <div className="absolute top-[113px] left-[calc(50%_-_380px)] flex flex-col items-center justify-start gap-[21px]">
        <div className="rounded-981xl bg-eminence-100 overflow-hidden flex flex-row items-center justify-center py-4 px-7 border-[1px] border-solid border-eminence-200">
          <div className="relative tracking-[-0.02em]">
            DATASCIENCE COURSE LEARNING PATH
          </div>
        </div>
        <b className="relative text-29xl tracking-[-0.03em] text-woodsmoke-700">
          <span className="text-transparent !bg-clip-text [background:linear-gradient(91.98deg,_#b73bbe,_#ebcb2e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Data Science
          </span>
          <span> Course Curriculum</span>
        </b>
      </div>
      <div className="absolute top-[324px] left-[128px] rounded-9xl overflow-hidden flex flex-col items-start justify-start text-left text-9xl text-woodsmoke-700 border-[1px] border-solid border-woodsmoke-100">
        <FrameComponent2
          c="C++"
          learnCForStrongProgrammin="Learn C++ for strong programming fundamentals."
        />
        <FrameComponent2
          c="MERN Stack"
          learnCForStrongProgrammin="Master the MERN stack for high-demand projects."
          propBorderTop="1px solid #e5e5e8"
        />
        <FrameComponent2
          c={`Data Structure & Algorithm`}
          learnCForStrongProgrammin="Excel in Data Structures and Algorithms for interview success."
          propBorderTop="1px solid #e5e5e8"
        />
        <FrameComponent2
          c="Competitve Programming"
          learnCForStrongProgrammin="Excel in Data Structures and Algorithms for interview success."
          propBorderTop="1px solid #e5e5e8"
        />
      </div>
    </div>
  );
};

export default CourseCurriculum1;
