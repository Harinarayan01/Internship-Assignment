import Property1withPrice from "./Property1withPrice";

const GroupComponent = () => {
  return (
    <div className="absolute top-[4642px] left-[37px] w-full h-[629px] text-center text-17xl text-midnightblue font-tutedude-typography-title-small">
      <div className="absolute top-[0px] left-[0px] bg-white w-[1366px] h-[629px]" />
      <b className="absolute top-[83px] left-[298px] inline-block text-transparent !bg-clip-text [background:linear-gradient(180deg,_#b872d0,_#372faa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] w-[771px]">
        How does the Internship Program works ?
      </b>
      <div className="absolute top-[177px] left-[112px] w-[1142px] h-[235px] text-left text-base">
        <img
          className="absolute top-[64px] left-[49px] w-[135px] h-[110px] object-contain"
          alt=""
        />
        <img
          className="absolute w-[calc(100%_-_1078px)] top-[6px] right-[1078px] left-[0px] rounded-82xl max-w-full overflow-hidden h-16"
          alt=""
          src="/frame-18.svg"
        />
        <img
          className="absolute top-[60px] left-[222px] w-[186px] h-[113px] object-contain"
          alt=""
        />
        <img
          className="absolute top-[70px] left-[659px] w-[149px] h-[115px] object-contain"
          alt=""
        />
        <img
          className="absolute top-[66px] left-[454px] w-[148px] h-[119px] object-contain"
          alt=""
        />
        <img
          className="absolute w-[calc(100%_-_1078px)] top-[167px] right-[907px] left-[171px] rounded-118xl max-w-full overflow-hidden h-16"
          alt=""
          src="/frame-18.svg"
        />
        <img
          className="absolute w-[calc(100%_-_1078px)] top-[10px] right-[676px] left-[402px] rounded-81xl max-w-full overflow-hidden h-16"
          alt=""
          src="/frame-18.svg"
        />
        <img
          className="absolute w-[calc(100%_-_1078px)] top-[167px] right-[480px] left-[598px] rounded-81xl max-w-full overflow-hidden h-16"
          alt=""
          src="/frame-18.svg"
        />
        <img
          className="absolute w-[calc(100%_-_1078px)] top-[10px] right-[287px] left-[791px] rounded-81xl max-w-full overflow-hidden h-16"
          alt=""
          src="/frame-23.svg"
        />
        <div className="absolute top-[2px] left-[79px] font-semibold inline-block w-[275px]">
          Learn from our structured pre recorded courses made by experts to meet
          industry needs
        </div>
        <div className="absolute top-[163px] left-[250px] font-semibold inline-block w-[272px]">{`1:1 live doubt solving support available throughout the day to clear your doubts instantly `}</div>
        <div className="absolute top-[175px] left-[676px] font-semibold inline-block w-[274px]">{`Build major projects which makes your resume stand apart `}</div>
        <div className="absolute top-[0px] left-[870px] font-semibold inline-block w-[272px]">
          Get guaranteed paid internships after completion of the program along
          with course completion certificates
        </div>
        <div className="absolute top-[6px] left-[481px] font-semibold inline-block w-[272px]">
          Personal mentors to guide and help you throughout your journey as a
          friend
        </div>
      </div>
      <Property1withPrice
        property1withPricePosition="absolute"
        property1withPriceTop="447px"
        property1withPriceLeft="571px"
      />
    </div>
  );
};

export default GroupComponent;
