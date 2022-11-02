import React from "react";

import { Row, Text, Img } from "components";

const Header3 = (props) => {
  return (
    <>
      <header className={props.className}>
        <Row className="bg-indigo_900 items-center lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] w-[100%]">
          <Row className="items-start ml-[4px] mt-[2px] w-[94%]">
            <Text
              className="cursor-pointer hover:font-normal font-ptsans lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-white_A700 w-[auto]"
              as="h1"
              variant="h1"
            >
              HalalHoliday{" "}
            </Text>
            <Img
              src="images/img_minimize.svg"
              className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] 3xl:ml-[1078px] lg:ml-[638px] xl:ml-[798px] 2xl:ml-[898px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[2%]"
              alt="minimize"
            />
            <Text
              className="cursor-pointer hover:font-normal font-normal font-ptsans lg:ml-[36px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic text-white_A700 w-[auto]"
              as="h5"
              variant="h5"
            >
              Help
            </Text>
            <Img
              src="images/img_question.svg"
              className="lg:h-[27px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] mb-[1px] lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[3%]"
              alt="question"
            />
            <Img
              src="images/img_user.svg"
              className="lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] mt-[1px] Multiply"
              alt="user"
            />
          </Row>
        </Row>
      </header>
    </>
  );
};

export default Header3;
