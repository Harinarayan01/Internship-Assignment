import { useMemo } from "react";

const FrameComponent2 = ({ c, learnCForStrongProgrammin, propBorderTop }) => {
  const frameDivStyle = useMemo(() => {
    return {
      borderTop: propBorderTop,
    };
  }, [propBorderTop]);

  return (
    <div
      className="w-[1184px] bg-white flex flex-row items-center justify-center p-7 box-border gap-[12px] text-left text-9xl text-woodsmoke-700 font-tutedude-typography-title-small"
      style={frameDivStyle}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
        <div className="self-stretch relative font-semibold">{c}</div>
        <div className="self-stretch relative text-xl text-woodsmoke-400">
          {learnCForStrongProgrammin}
        </div>
      </div>
      <div className="rounded-981xl bg-eminence-50 overflow-hidden flex flex-row items-center justify-center py-5 px-6 gap-[10px] text-center text-xl text-eminence-600 border-[1px] border-solid border-eminence-100">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/fibreye.svg"
        />
        <div className="relative font-medium">View Curriculum</div>
      </div>
    </div>
  );
};

export default FrameComponent2;
