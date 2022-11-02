import React from "react";

import { Row, Text, Column, Img } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Row className="bg-[#173042] items-center lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[100%]">
          <Row className="items-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[2px] w-[94%]">
            <Text className="font-ptsans HalalHoliday" as="h1" variant="h1">
            <p class="text-[#72C044]"> Halal </p>
            </Text>
            <Text className="font-ptsans HalalHoliday" as="h1" variant="h1">
            <p class="text-[#0976B5]"> Holiday </p>
            </Text>
            <Column className="items-center justify-start lg:ml-[392px] xl:ml-[491px] 2xl:ml-[552px] 3xl:ml-[662px] w-[22%]">
              <Column className="justify-start w-[100%]">
                <Row className="items-center justify-end ml-[auto] w-[64%]">
                  <Text
                    className="font-bold font-ptsans text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Name’s Property
                  </Text>
                  <Img
                    src="images/img_arrow1.svg"
                    className="ArrowOne"
                    alt="ArrowOne"
                  />
                </Row>
                <Text className="columnnamesproperty" variant="body4">
                  122 Jalan Abc, Johor Bahru, Johor 8350...{" "}
                </Text>
              </Column>
            </Column>
            <Img
              src="images/img_minimize.svg"
              className="minimize"
              alt="minimize"
            />
            <Text className="font-ptsans Help" as="h5" variant="h5">
              Help
            </Text>
            <Img
              src="images/img_question.svg"
              className="lg:h-[27px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[2px] w-[3%]"
              alt="question"
            />
            <Img src="images/img_user.svg" className="user_One" alt="user" />
          </Row>
        </Row>
      </header>
    </>
  );
};

export default Header;
