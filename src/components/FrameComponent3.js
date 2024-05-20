const FrameComponent3 = ({ onlineLearning, prop, courses }) => {
  return (
    <div className="flex flex-row items-center justify-start gap-[12px] text-left text-21xl text-eminence-700 font-tutedude-typography-title-small">
      <img
        className="w-[62px] relative h-[62px] overflow-hidden shrink-0"
        alt=""
        src={onlineLearning}
      />
      <div className="flex flex-col items-start justify-start gap-[2px]">
        <div className="relative leading-[40px] font-medium">{prop}</div>
        <div className="relative text-5xl leading-[28px] font-dm-sans text-woodsmoke-500">
          {courses}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
