import React from "react";

import { Row, Stack, Img, Button } from "components";

const Footer1 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <Row className="items-center justify-between w-[100%]">
          <Stack
            className="common-pointer bg-white_A700 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] outline outline-[1px] outline-light_blue_500 xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] lg:px-[9px] shadow-bs w-[13%]"
            onClick={props?.onstackexpandarrowClick}
          >
            <Img
              src="images/img_expandarrow.png"
              className="ExpandArrow"
              alt="ExpandArrow"
            />
          </Stack>
          <Button
            className="font-bold font-ptsans lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[84%]"
            size="xl"
            variant="FillLightblue800"
          >
            Continue
          </Button>
        </Row>
      </footer>
    </>
  );
};

export default Footer1;
