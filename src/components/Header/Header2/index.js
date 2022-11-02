import React from "react";

import { Row, Text, Img, Stack } from "components";

const Header2 = (props) => {
  return (
    <>
      <header className={props.className}>
        <Row className="bg-indigo_900 items-center lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] w-[100%]">
          <Row className="items-end ml-[4px] mt-[2px] w-[94%]">
            <Text
              className="cursor-pointer hover:font-normal font-ptsans lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-white_A700 w-[auto]"
              as="h1"
              variant="h1"
            >
              HalalHoliday{" "}
            </Text>
            <Img
              src="images/img_minimize.svg"
              className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] 3xl:ml-[1078px] lg:ml-[638px] xl:ml-[798px] 2xl:ml-[898px] lg:my-[4px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] w-[2%]"
              alt="minimize"
            />
            <Text
              className="cursor-pointer hover:font-normal font-normal font-ptsans lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:ml-[36px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] not-italic text-white_A700 w-[auto]"
              as="h5"
              variant="h5"
            >
              Help
            </Text>
            <Stack className="bg-amber_600 border border-solid border-white_A700 mb-[2px] ml-[4px] rounded-radius50 Multiply">
              <Img
                src="images/img_question_35X35.svg"
                className="absolute Multiply"
                alt="question"
              />
            </Stack>
            <Img
              src="images/img_user.svg"
              className="mb-[2px] lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] Multiply"
              alt="user"
            />
          </Row>
        </Row>
      </header>
    </>
  );
};

export default Header2;
