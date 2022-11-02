import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder15: "rounded-radius155",
  RoundedBorder2: "rounded-radius2",
  icbRoundedBorder4: "rounded-radius4",
};
const variants = {
  OutlineGray502:
    "bg-white_A700 outline outline-[0.25px] outline-gray_502 text-black_900",
  FillLightblue800: "bg-light_blue_800 text-white_A700",
  OutlineLightblue500:
    "bg-white_A700 outline outline-[1px] outline-light_blue_500 shadow-bs text-light_blue_500",
  OutlineBlack90026: "bg-gray_50 shadow-bs text-black_900",
  FillBluegray101: "bg-bluegray_101",
  OutlineLightblue800:
    "bg-white_A700 outline outline-[1px] outline-light_blue_800 text-light_blue_800",
  OutlineLightblue8001_2:
    "bg-white_A700 border-2 border-light_blue_800 border-solid",
  OutlineBlue600: "border-2 border-blue_600 border-solid text-blue_600",
  FillGreen900: "bg-green_900 text-white_A700",
  OutlineBluegray101:
    "bg-bluegray_101 outline outline-[0.5px] outline-bluegray_101 text-gray_503",
  OutlineLightblue5001_2:
    "border border-light_blue_500 border-solid text-light_blue_500",
  OutlineGray5021_2:
    "bg-white_A700 outline outline-[0.35px] outline-gray_502 text-black_900",
  icbOutlineGray503: "bg-white_A700 border border-gray_503 border-solid",
  icbFillWhiteA700: "bg-white_A700",
};
const sizes = {
  sm: "lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px]",
  md: "lg:p-[5px] xl:p-[7px] p-[8px] 3xl:p-[9px]",
  lg: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[8px]",
  xl: "lg:p-[11px] xl:p-[14px] p-[16px] 3xl:p-[19px]",
  "2xl": "lg:p-[22px] xl:p-[28px] p-[32px] 3xl:p-[38px]",
  smIcn: "p-[3px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder15",
    "RoundedBorder2",
    "icbRoundedBorder4",
  ]),
  variant: PropTypes.oneOf([
    "OutlineGray502",
    "FillLightblue800",
    "OutlineLightblue500",
    "OutlineBlack90026",
    "FillBluegray101",
    "OutlineLightblue800",
    "OutlineLightblue8001_2",
    "OutlineBlue600",
    "FillGreen900",
    "OutlineBluegray101",
    "OutlineLightblue5001_2",
    "OutlineGray5021_2",
    "icbOutlineGray503",
    "icbFillWhiteA700",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl", "smIcn"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
