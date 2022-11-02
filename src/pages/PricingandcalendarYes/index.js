import React from "react";

import { Column, Row, Text, Img, Line, Stack, Button } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const PricingandcalendarYesPage = () => {
  const navigate = useNavigate();

  function handleNavigate85() {
    navigate("/");
  }
  function handleNavigate86() {
    navigate("/pricingandcalendaryestwo");
  }
  function handleNavigate87() {
    navigate("/pricingandcalendarno");
  }

  return (
    <>
      <Column className="bg-gray_50 font-ptsans items-center justify-start mx-[auto] lg:pb-[23px] xl:pb-[29px] 2xl:pb-[33px] 3xl:pb-[39px] w-[100%]">
        <Header className="w-[100%]" />
        <Column className="justify-start w-[100%]">
          <Row className="items-center justify-evenly w-[100%]">
            <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[3%]"></div>
            <Row className="bg-gray_50 items-center justify-center lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] shadow-bs w-[19%]">
              <Text className="Step11" variant="body2">
                Name and location
              </Text>
              <Img
                src="images/img_checkmark.svg"
                className="checkmark3"
                alt="checkmark"
              />
            </Row>
            <Row className="bg-gray_50 items-center justify-center lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] shadow-bs w-[19%]">
              <Text className="Step21" variant="body2">
                Property Setup
              </Text>
              <Img
                src="images/img_checkmark.svg"
                className="checkmark_One1"
                alt="checkmark One"
              />
            </Row>
            <Row className="bg-gray_50 items-center justify-center lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] shadow-bs w-[19%]">
              <Text className="Step31" variant="body2">
                Photos
              </Text>
              <Img
                src="images/img_checkmark.svg"
                className="checkmark_Two"
                alt="checkmark Two"
              />
            </Row>
            <Column className="bg-gray_50 items-center lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] shadow-bs w-[19%]">
              <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                <Text className="Box1" variant="body2">
                  Pricing and calendar
                </Text>
                <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                  <Line className="bg-blue_A200 h-[5px] shadow-bs2 w-[24%]" />
                  <Line className="bg-gray_503 h-[5px] shadow-bs2 w-[24%]" />
                  <Line className="bg-gray_503 h-[5px] shadow-bs2 w-[24%]" />
                  <Line className="bg-gray_503 h-[5px] shadow-bs2 w-[24%]" />
                </Row>
              </Column>
            </Column>
            <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[19%]"></div>
            <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[3%]"></div>
          </Row>
          <Column className="justify-start xl:ml-[124px] 2xl:ml-[140px] 3xl:ml-[168px] lg:ml-[99px] xl:mt-[117px] 2xl:mt-[132px] 3xl:mt-[158px] lg:mt-[93px] w-[39%]">
            <Text className="iconradio3" as="h5" variant="h5">
              Guest payment options
            </Text>
            <Column className="bg-white_A700 justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:p-[30px] xl:p-[38px] 2xl:p-[43px] 3xl:p-[51px] shadow-bs w-[100%]">
              <Column className="justify-start lg:mb-[54px] xl:mb-[67px] 2xl:mb-[76px] 3xl:mb-[91px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[75%]">
                <Text
                  className="font-bold text-black_900 w-[auto]"
                  variant="body2"
                >
                  Are you able to charge credit cards at your property?
                </Text>
                <Row className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[17%]">
                  <Img
                    src="images/img_record.png"
                    className="bookmark"
                    alt="Record"
                  />
                  <Text className="columnyesillimpor" variant="body2">
                    Yes
                  </Text>
                </Row>
                <Row className="items-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[16%]">
                  <Img
                    src="images/img_round.png"
                    className="common-pointer bookmark"
                    onClick={handleNavigate87}
                    alt="Round"
                  />
                  <Text className="iconradio3" variant="body2">
                    No
                  </Text>
                </Row>
              </Column>
            </Column>
          </Column>
          <Stack className="lg:h-[53px] xl:h-[66px] 2xl:h-[75px] 3xl:h-[89px] xl:ml-[124px] 2xl:ml-[140px] 3xl:ml-[168px] lg:ml-[99px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[39%]">
            <Stack
              className="common-pointer absolute bg-white_A700 bottom-[0] lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] left-[0] outline outline-[1px] outline-light_blue_500 3xl:px-[10px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] shadow-bs w-[13%]"
              onClick={handleNavigate85}
            >
              <Img
                src="images/img_arrowleft.svg"
                className="arrowleft"
                alt="arrowleft"
              />
            </Stack>
            <Column className="absolute items-end justify-start w-[100%]">
              <Line className="bg-gray_200 h-[1px] w-[100%]" />
              <Button
                className="common-pointer font-bold lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[84%]"
                onClick={handleNavigate86}
                size="xl"
                variant="FillLightblue800"
              >
                Continue
              </Button>
            </Column>
          </Stack>
          <Column className="bg-blue_50 justify-start 2xl:ml-[1113px] 3xl:ml-[1336px] lg:ml-[791px] xl:ml-[990px] lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] p-[4px] shadow-bs w-[20%]">
            <Img src="images/img_close.svg" className="close_One" alt="close" />
            <Column className="justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mx-[auto] w-[92%]">
              <Text className="columndescription_two" variant="body2">
                Is there anything preventing you from <br />
                completing your registration at this <br />
                point?
              </Text>
              <Button
                className="font-bold lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[44%]"
                size="xl"
                variant="OutlineLightblue500"
              >
                Let us know
              </Button>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default PricingandcalendarYesPage;
