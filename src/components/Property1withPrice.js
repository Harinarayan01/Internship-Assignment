import { useMemo } from "react";

const Property1withPrice = ({
  property1withPricePosition,
  property1withPriceTop,
  property1withPriceLeft,
}) => {
  const property1withPriceStyle = useMemo(() => {
    return {
      position: property1withPricePosition,
      top: property1withPriceTop,
      left: property1withPriceLeft,
    };
  }, [
    property1withPricePosition,
    property1withPriceTop,
    property1withPriceLeft,
  ]);

  return (
    <div
      className="w-[225px] shadow-[1px_0px_4px_rgba(0,_0,_0,_0.15),_-1px_0px_4px_rgba(0,_0,_0,_0.15),_0px_-1px_4px_rgba(0,_0,_0,_0.15),_0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-3xs [background:linear-gradient(176.18deg,_#800080,_#7e277e_20.63%)] h-[50px] overflow-hidden text-center text-base text-white font-tutedude-typography-title-small"
      style={property1withPriceStyle}
    >
      <div className="absolute top-[15px] left-[28px] leading-[123.5%] font-semibold">
        Apply now for ₹ 2999
      </div>
    </div>
  );
};

export default Property1withPrice;
