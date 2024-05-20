import Property1Default from "./Property1Default";

const Step1FormContainer = () => {
  return (
    <div className="flex flex-row items-start justify-start relative gap-[22px] text-center text-base text-eminence-50 font-tutedude-typography-title-small">
      <Property1Default
        property1DefaultPosition="absolute"
        property1DefaultMargin="0 !important"
        property1DefaultTop="18px"
        property1DefaultLeft="calc(50% - 355px)"
      />
      <div className="flex flex-col items-center justify-start gap-[22px] z-[1]">
        <div className="flex flex-row items-center justify-center py-2 px-6 relative gap-[10px]">
          <img
            className="w-full absolute !m-[0] h-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[0]"
            alt=""
            src="/rectangle-8809.svg"
          />
          <div className="relative tracking-[-0.03em] font-medium z-[1]">
            Step 1
          </div>
        </div>
        <div className="w-[350px] rounded-xl [background:linear-gradient(180deg,_#fff,_#fcf5fe)] box-border h-[254px] overflow-hidden shrink-0 flex flex-col items-start justify-start p-5 gap-[16px] text-left text-xl text-eminence-800 border-[1px] border-solid border-eminence-100">
          <div className="self-stretch relative tracking-[-0.03em] font-semibold">
            Step 1 : Enroll into your favorite course for only ₹1,499
          </div>
          <div className="self-stretch flex-1 flex flex-row items-center justify-center">
            <img
              className="w-[102px] relative h-[69px] object-cover"
              alt=""
              src="/image-533@2x.png"
            />
          </div>
          <div className="self-stretch relative text-sm text-woodsmoke-900">
            <span className="font-medium">{`Start Learning with `}</span>
            <span className="font-semibold text-gray-100">
              Lifetime Course Access.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-[22px] z-[2]">
        <div className="flex flex-row items-center justify-center py-2 px-6 relative gap-[10px]">
          <img
            className="w-full absolute !m-[0] h-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[0]"
            alt=""
            src="/rectangle-88091.svg"
          />
          <div className="relative tracking-[-0.03em] font-medium z-[1]">
            Step 2
          </div>
        </div>
        <div className="w-[350px] rounded-xl [background:linear-gradient(180deg,_#fff,_#fcf5fe)] box-border h-[254px] overflow-hidden shrink-0 flex flex-col items-start justify-start p-5 gap-[16px] text-left text-xl text-eminence-800 border-[1px] border-solid border-eminence-100">
          <div className="self-stretch relative tracking-[-0.03em] font-semibold">{`Step 2: Complete Course & Assignments within 2 Years!`}</div>
          <div className="self-stretch flex-1 rounded-sm overflow-hidden flex flex-row items-center justify-center p-4 gap-[8px] text-21xl text-woodsmoke-700 border-[1px] border-solid border-woodsmoke-100">
            <b className="relative tracking-[-0.03em] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#ffa50b,_#e27900)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              2
            </b>
            <div className="flex-1 relative text-sm tracking-[-0.03em]">
              years time from the date of enrollment
            </div>
          </div>
          <div className="self-stretch relative text-sm text-woodsmoke-900">
            <span className="font-medium">{`Finish the course within `}</span>
            <span className="font-semibold text-gray-100">2 Years</span>
            <span className="font-medium"> to Qualify for Refund.</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-[22px] z-[3]">
        <div className="flex flex-row items-center justify-center py-2 px-6 relative gap-[10px]">
          <img
            className="w-full absolute !m-[0] h-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[0]"
            alt=""
            src="/rectangle-88091.svg"
          />
          <div className="relative tracking-[-0.03em] font-medium z-[1]">
            Step 3
          </div>
        </div>
        <div className="w-[350px] rounded-xl [background:linear-gradient(180deg,_#fff,_#fcf5fe)] box-border overflow-hidden flex flex-col items-start justify-start p-5 gap-[16px] text-left text-xl text-eminence-800 border-[1px] border-solid border-eminence-100">
          <div className="self-stretch relative tracking-[-0.03em] font-semibold">
            Step 3: Receive 100% Refund upon completion
          </div>
          <div className="self-stretch rounded-sm overflow-hidden flex flex-row items-center justify-center p-4 gap-[8px] text-13xl text-woodsmoke-700 border-[1px] border-solid border-woodsmoke-100">
            <b className="relative tracking-[-0.03em] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#ffa50b,_#e27900)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              100%
            </b>
            <div className="flex-1 relative text-sm tracking-[-0.03em]">
              Enrollment Fee is refunded
            </div>
          </div>
          <div className="self-stretch relative text-sm text-woodsmoke-900">
            <span className="font-medium">{`Upon Course Completion within `}</span>
            <b className="text-gray-100">2 Years</b>
            <span className="font-medium">{`, Get Your `}</span>
            <span className="font-semibold text-gray-100">₹1,499 Back.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1FormContainer;
