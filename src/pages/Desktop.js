import FrameComponent4 from "../components/FrameComponent4";
import MacBookAir from "../components/MacBookAir";
import CourseCurriculum1 from "../components/CourseCurriculum1";
import CourseCurriculum from "../components/CourseCurriculum";
import FrameComponent1 from "../components/FrameComponent1";
import Step1FormContainer from "../components/Step1FormContainer";
import FrameComponent from "../components/FrameComponent";
import GroupComponent from "../components/GroupComponent";

const Desktop = () => {
  return (
    <div className="w-full relative bg-white h-[7795px] overflow-hidden text-left text-base text-black font-tutedude-typography-title-small ">
      <div className="absolute top-[0px] left-[0px] bg-white  h-[1024px] overflow-hidden w-full">
        <div className="absolute top-[0px] left-[calc(50%_-_720px)] bg-white box-border w-[1440px] flex flex-row items-center justify-between py-6 px-32 border-b-[1px] border-solid border-woodsmoke-50">
          <div className="relative font-medium">LOGO</div>
          <div className="w-[122px] relative h-[37px]" />
          <div className="flex flex-row items-center justify-center gap-[12px] text-right text-eminence-700">
            <div className="relative font-medium">Login</div>
            <div className="shadow-[0px_8px_24px_-10px_rgba(153,_46,_157,_0.5)] rounded-sm [background:linear-gradient(180deg,_#b73bbe,_#992e9d)] overflow-hidden flex flex-row items-center justify-center py-3 px-6 text-left text-eminence-50">
              <div className="relative font-medium">Signup</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[220px] left-[128px] w-[766px] flex flex-col items-start justify-start gap-[32px] text-lg text-eminence-50">
          <FrameComponent4 />
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="shadow-[0px_8px_48px_-10px_rgba(153,_46,_157,_0.5)] rounded-xl [background:linear-gradient(180deg,_#b73bbe,_#992e9d)] overflow-hidden flex flex-row items-center justify-center py-6 px-12 gap-[6px]">
              <div className="relative font-semibold">Enroll Now</div>
              <img
                className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                alt=""
                src="/fibrpaperplane.svg"
              />
            </div>
            <div className="rounded-2xl overflow-hidden flex flex-row items-center justify-center p-6 gap-[6px] text-eminence-700">
              <div className="relative font-semibold">Know More</div>
              <img
                className="w-5 relative h-5 overflow-hidden shrink-0"
                alt=""
                src="/fibrinterrogation.svg"
              />
            </div>
          </div>
        </div>
        <MacBookAir />
        <div className="absolute top-[95px] left-[0px] bg-woodsmoke-900 w-full overflow-hidden flex flex-row items-center justify-center py-3 px-2.5 box-border gap-[20px] text-woodsmoke-200">
          <div className="relative font-medium text-white z-[0] ">Overview</div>
          <div className="relative z-[1]">Curriculum</div>
          <div className="relative z-[2]">Refund</div>
          <div className="relative z-[3]">Testimonials</div>
          <div className="w-[75px] absolute !m-[0] bottom-[0px] left-[650px] rounded-t-3xs rounded-b-none bg-web-orange-500 h-1 z-[4]" />
        </div>
      </div>
      <CourseCurriculum1 />
      <CourseCurriculum />
      <div className="absolute top-[2173px] left-[0px] bg-white w-[1440px] h-[1024px] flex flex-col items-center justify-start py-16 px-32 box-border gap-[56px] text-center text-29xl text-woodsmoke-500">
        <b className="w-[980px] relative tracking-[-0.05em] inline-block">
          <span>{`Don't miss out on this `}</span>
          <span className="text-transparent !bg-clip-text [background:linear-gradient(180deg,_#b73bbe,_#992e9d)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            limited-time opportunity
          </span>
          <span>{` to learn for `}</span>
          <span className="text-transparent !bg-clip-text [background:linear-gradient(180deg,_#b73bbe,_#992e9d)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Free!
          </span>
        </b>
        <FrameComponent1 />
        <div className="flex flex-col items-center justify-start gap-[24px] text-17xl text-eminence-950">
          <b className="relative tracking-[-0.03em]">How does it work?</b>
          <Step1FormContainer />
        </div>
      </div>
      <FrameComponent />
      <GroupComponent />
    </div>
  );
};

export default Desktop;
