const FrameComponent4 = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-xl text-woodsmoke-800 font-tutedude-typography-title-small">
      <div className="rounded-2xl bg-white flex flex-row items-center justify-center py-[18px] px-6 gap-[10px] border-[1px] border-solid border-web-orange-500">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/graduation-hat.svg"
        />
        <div className="relative">
          <span>An</span>
          <span className="text-base font-medium">{` `}</span>
          <span className="font-semibold">IIT Delhi</span>
          <span className="text-base font-medium">{` `}</span>
          <span>Alumni Initiative</span>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-45xl text-dimgray">
        <b className="self-stretch relative tracking-[-0.03em] leading-[134.35%]">
          <span>Become an Expert in the field of</span>
          <span className="text-black">{` `}</span>
          <span className="text-eminence-700">Data Science with 6 courses</span>
        </b>
        <div className="self-stretch relative text-xl text-woodsmoke-800">
          <span>{`A specially crafted Tech Kickstarter, with `}</span>
          <span className="font-medium">5+ extensive online courses.</span>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[14px] text-base text-web-orange-700">
        <div className="rounded-81xl bg-web-orange-50 overflow-hidden flex flex-row items-center justify-center py-3 pr-4 pl-3 gap-[6px] border-[1px] border-solid border-web-orange-100">
          <img className="w-6 relative h-6" alt="" src="/award-star.svg" />
          <div className="relative tracking-[-0.03em] font-medium">
            Personal Mentorship
          </div>
        </div>
        <div className="rounded-81xl bg-web-orange-50 overflow-hidden flex flex-row items-center justify-center py-3 pr-4 pl-3 gap-[6px] border-[1px] border-solid border-web-orange-100">
          <img className="w-6 relative h-6" alt="" src="/award-star.svg" />
          <div className="relative tracking-[-0.03em] font-medium">
            Internship Assistance
          </div>
        </div>
        <div className="rounded-81xl bg-web-orange-50 overflow-hidden flex flex-row items-center justify-center py-3 pr-4 pl-3 gap-[6px] border-[1px] border-solid border-web-orange-100">
          <img className="w-6 relative h-6" alt="" src="/award-star.svg" />
          <div className="relative tracking-[-0.03em] font-medium">
            Industry Certified Courses
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
