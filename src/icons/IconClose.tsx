import React from "react";

import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconClose: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M12.2 3.80667C12.0754 3.68183 11.9063 3.61168 11.73 3.61168C11.5536 3.61168 11.3845 3.68183 11.26 3.80667L7.99998 7.06L4.73998 3.8C4.61543 3.67517 4.44633 3.60501 4.26998 3.60501C4.09364 3.60501 3.92453 3.67517 3.79998 3.8C3.53998 4.06 3.53998 4.48 3.79998 4.74L7.05998 8L3.79998 11.26C3.53998 11.52 3.53998 11.94 3.79998 12.2C4.05998 12.46 4.47998 12.46 4.73998 12.2L7.99998 8.94L11.26 12.2C11.52 12.46 11.94 12.46 12.2 12.2C12.46 11.94 12.46 11.52 12.2 11.26L8.93998 8L12.2 4.74C12.4533 4.48667 12.4533 4.06 12.2 3.80667Z"
        fill={props.fill || "#1BA2EE"}
      />
    </SvgIcon>
  );
};

export default IconClose;
