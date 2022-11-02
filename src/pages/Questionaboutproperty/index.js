import React from "react";

import { Column, Text, Img, Line, Row, Input, Button, Stack } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const QuestionaboutpropertyPage = () => {
  const navigate = useNavigate();

  function handleNavigate82() {
    navigate("/confirmation");
  }
  function handleNavigate101() {
    window.location.href = "https://www.airbnb.com/rooms/xxxxxxxx";
  }
  function handleNavigate102() {
    window.location.href = "https://www.vrbo.com/xxxxxx";
  }

  return (
    <>
      <Column className="bg-gray_50 font-ptsans items-center justify-start mx-[auto] 3xl:pb-[102px] lg:pb-[60px] xl:pb-[75px] 2xl:pb-[85px] w-[100%]">
        <Column className="justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="justify-start 3xl:ml-[116px] lg:ml-[68px] xl:ml-[86px] 2xl:ml-[97px] 3xl:mt-[104px] lg:mt-[61px] xl:mt-[77px] 2xl:mt-[87px] w-[42%]">
            <Text
              className="not-italic text-black_900 w-[auto]"
              as="h2"
              variant="h2"
            >
              Where else is your property listed?
            </Text>
            <Column className="items-center justify-start lg:ml-[26px] xl:ml-[32px] 2xl:ml-[37px] 3xl:ml-[44px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[94%]">
              <Column className="bg-white_A700 items-center justify-start lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] shadow-bs3 w-[100%]">
                <Column className="justify-start my-[4px] w-[100%]">
                  <Text
                    className="font-normal leading-[normal] not-italic text-black_900 w-[80%]"
                    variant="body2"
                  >
                    If your property is listed in Airbnb or Vrbo, you can speed
                    up
                    <br />
                    registration by importing it directly to HalalBooking.com
                  </Text>
                  <Column className="justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[73%]">
                    <Img
                      src="images/img_airbnb.png"
                      className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[20%]"
                      alt="Airbnb"
                    />
                    <Img
                      src="images/img_tripadvisor.png"
                      className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[30%]"
                      alt="Tripadvisor"
                    />
                    <Img
                      src="images/img_vrbo.png"
                      className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[16%]"
                      alt="Vrbo"
                    />
                    <Img
                      src="images/img_anotherwebsite.png"
                      className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] ml-[1px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[40%]"
                      alt="Anotherwebsite"
                    />
                    <Img
                      src="images/img_isntlisted.png"
                      className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]"
                      alt="Isntlisted"
                    />
                  </Column>
                  <Line className="bg-gray_700_33 h-[1.5px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]" />
                  <Text
                    className="lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] Aboutproperty"
                    variant="body2"
                  >
                    Import property details from Airbnb or Vrbo
                  </Text>
                  <Text className="Pastethelink" variant="body4">
                    Paste the link to your Airbnb or Vrbo listing
                  </Text>
                  <Row className="items-center ml-[1px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[83%]">
                    <Input
                      className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:text-gray_501 text-gray_501 w-[100%]"
                      wrapClassName="w-[74%]"
                      name="weburl"
                      placeholder="https://www.airbnb.com/rooms/xxxxxxxx"
                      shape="RoundedBorder3"
                      size="sm"
                      variant="OutlineGray502"
                    ></Input>
                    <Button
                      className="font-bold lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[25%]"
                      shape="RoundedBorder2"
                      size="md"
                      variant="OutlineBluegray101"
                    >
                      Apply
                    </Button>
                  </Row>
                  <Text
                    className="ml-[1px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] rownameandlocati1"
                    variant="body4"
                  >
                    Example link:
                  </Text>
                  <Text
                    className="common-pointer ml-[1px] mt-[3px] rownameandlocati1"
                    variant="body4"
                    onClick={handleNavigate101}
                  >
                    https://www.airbnb.com/rooms/xxxxxxxx
                  </Text>
                  <Text
                    className="common-pointer weburl_Two"
                    variant="body4"
                    onClick={handleNavigate102}
                  >
                    https://www.vrbo.com/xxxxxx
                  </Text>
                  <Text
                    className="font-normal 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic text-light_blue_800 w-[auto]"
                    variant="body2"
                  >
                    Where I can find this link?
                  </Text>
                </Column>
              </Column>
              <Line className="bg-gray_700_33 h-[0.5px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[100%]" />
              <Row className="items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                <Stack
                  className="common-pointer bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]"
                  onClick={handleNavigate82}
                >
                  <Img
                    src="images/img_arrowleft_14X7.svg"
                    className="arrowleft2"
                    alt="arrowleft"
                  />
                </Stack>
                <Button
                  className="font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[85%]"
                  size="xl"
                  variant="OutlineLightblue8001_2"
                >
                  Continue
                </Button>
              </Row>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default QuestionaboutpropertyPage;
