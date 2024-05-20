import { useMemo } from "react";

const Property1Default = ({
  property1DefaultPosition,
  property1DefaultMargin,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      position: property1DefaultPosition,
      margin: property1DefaultMargin,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [
    property1DefaultPosition,
    property1DefaultMargin,
    property1DefaultTop,
    property1DefaultLeft,
  ]);

  return (
    <div
      className="w-[711px] bg-woodsmoke-50 max-w-full h-1 overflow-hidden"
      style={property1DefaultStyle}
    >
      <div className="absolute top-[-2px] left-[-29px] [filter:blur(10px)] bg-eminence-700 w-[38px] h-[9px]" />
    </div>
  );
};

export default Property1Default;
