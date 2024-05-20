const FrameComponent1 = () => {
  return (
    <div className="w-[598px] shadow-[0px_16px_36px_-10px_rgba(152,_73,_255,_0.25)] rounded-13xl [background:linear-gradient(180deg,_#9849ff,_#841ee3)] overflow-hidden flex flex-col items-center justify-center py-8 px-5 box-border relative gap-[12px] text-center text-9xl text-white font-tutedude-typography-title-small">
      <div className="w-7 absolute !m-[0] top-[4px] left-[0px] [filter:blur(72px)] rounded-[50%] bg-white h-7 z-[0]" />
      <div className="w-7 absolute !m-[0] top-[178px] left-[154px] [filter:blur(72px)] rounded-[50%] bg-white h-7 opacity-[0.7] z-[1]" />
      <div className="w-7 absolute !m-[0] top-[-16px] left-[534px] [filter:blur(64px)] rounded-[50%] bg-white h-7 z-[2]" />
      <b className="relative z-[3]">{`100% Refund Offer 😎 `}</b>
      <div className="self-stretch flex flex-col items-center justify-center gap-[14px] z-[4] text-left text-lg text-gray-200">
        <div className="self-stretch relative font-medium">20 Seats Left</div>
        <div className="self-stretch relative rounded-81xl bg-gray-300 h-2.5">
          <div className="absolute top-[0px] left-[0px] shadow-[0px_2px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-81xl bg-web-orange-400 w-[159px] h-2.5" />
          <div className="absolute top-[calc(50%_-_11px)] left-[148px] rounded-[50%] bg-web-orange-400 box-border w-[22px] h-[22px] border-[3px] border-solid border-white" />
        </div>
        <div className="flex flex-row items-center justify-center gap-[4px] text-center text-xl text-white">
          <img
            className="w-7 relative h-7 overflow-hidden shrink-0"
            alt=""
            src="/bxtimefive.svg"
          />
          <div className="relative font-medium">Offer ends in 10:00Mins</div>
        </div>
      </div>
      <img
        className="w-[92px] absolute !m-[0] top-[3.2px] left-[509.5px] h-[90.2px] object-contain z-[5]"
        alt=""
        src="/scribble-final-version24@2x.png"
      />
    </div>
  );
};

export default FrameComponent1;
