import React from "react";
import { Chip } from "@material-ui/core";
import PropType from "prop-types";
import useCustomTheme from "../theme";

const ColorChip = ({ color, ...props }) => {
  const theme = useCustomTheme();
  console.log(theme.palette.text);
  return ["default", "primary", "secondary"].includes(color) ? (
    <Chip color={color} {...props}></Chip>
  ) : (
    <Chip style={{ backgroundColor: color }} {...props}></Chip>
  );
};

ColorChip.propTypes = {
  color: PropType.string.isRequired,
};

export default ColorChip;
