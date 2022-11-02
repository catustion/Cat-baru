import React from "react";

import { Column, Stack, Img, Row, Text, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const PropertyDetailsLivingRoomPage = () => {
  const navigate = useNavigate();

  function handleNavigate23() {
    navigate("/propertysetuppropertydetailsone");
  }
  function handleNavigate38() {
    navigate("/propertysetuppropertydetailsone");
  }
  function handleNavigate39() {
    navigate("/propertysetuppropertydetailsone");
  }

  return (
    <>
      <Column className="bg-gray_100 font-ptsans justify-start mx-[auto] lg:pb-[162px] xl:pb-[203px] 2xl:pb-[229px] 3xl:pb-[274px] w-[100%]">
        <Column className="items-center w-[100%]">
          <Stack className="2xl:h-[102px] 3xl:h-[122px] lg:h-[72px] xl:h-[90px] w-[100%]">
            <Img src="images/img_user.svg" className="user" alt="user" />
            <Row className="absolute bg-indigo_900 items-center lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[100%]">
              <Row className="items-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[2px] w-[94%]">
                <Text className="HalalHoliday" as="h1" variant="h1">
                  HalalHoliday
                </Text>
                <Column className="items-center justify-start lg:ml-[392px] xl:ml-[491px] 2xl:ml-[552px] 3xl:ml-[662px] w-[22%]">
                  <Column className="justify-start w-[100%]">
                    <Row className="font-ptsans items-center justify-end ml-[auto] w-[64%]">
                      <Text
                        className="font-bold text-white_A700 w-[auto]"
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
                <Text className="Help" as="h5" variant="h5">
                  Help
                </Text>
                <Img
                  src="images/img_question.svg"
                  className="question"
                  alt="question"
                />
                <Img
                  src="images/img_user.svg"
                  className="user_One"
                  alt="user One"
                />
              </Row>
            </Row>
          </Stack>
          <Column className="items-center justify-start mt-[1px] w-[100%]">
            <Column className="justify-start w-[100%]">
              <Row className="items-end lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] w-[68%]">
                <Row className="items-end justify-center xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] w-[32%]">
                  <Text className="tab" as="h6" variant="h6">
                    Name and location
                  </Text>
                  <Img
                    src="images/img_checkmark_1.svg"
                    className="checkmark2"
                    alt="checkmark"
                  />
                </Row>
                <Column className="items-center justify-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[23%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="columnpropertysetup" variant="body2">
                      Property setup
                    </Text>
                    <Row className="items-center justify-evenly lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                      <Line className="bg-light_blue_800 h-[3px] w-[13%]" />
                      <Line className="bg-gray_502 h-[3px] w-[13%]" />
                      <Line className="bg-gray_502 h-[3px] w-[13%]" />
                      <Line className="bg-gray_502 h-[3px] w-[13%]" />
                      <Line className="bg-gray_502 h-[3px] w-[13%]" />
                      <Line className="bg-gray_502 h-[3px] w-[13%]" />
                      <Line className="bg-gray_502 h-[3px] w-[13%]" />
                    </Row>
                  </Column>
                </Column>
                <Text className="Photos" variant="body2">
                  Photos
                </Text>
                <Text className="Pricingandcal" variant="body2">
                  Pricing and calendar
                </Text>
              </Row>
              <Line className="bg-gray_400 h-[1px] mt-[1px] w-[100%]" />
            </Column>
          </Column>
        </Column>
        <Column
          className="common-pointer items-center justify-start xl:ml-[118px] 2xl:ml-[133px] 3xl:ml-[159px] lg:ml-[94px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] lg:pr-[4px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] lg:py-[4px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] w-[40%]"
          onClick={handleNavigate38}
        >
          <Column className="justify-start lg:mb-[174px] xl:mb-[218px] 2xl:mb-[246px] 3xl:mb-[295px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]">
            <Text
              className="not-italic text-black_900 w-[auto]"
              as="h2"
              variant="h2"
            >
              Living Room
            </Text>
            <Column className="items-center justify-start lg:mt-[56px] xl:mt-[70px] 2xl:mt-[79px] 3xl:mt-[94px] shadow-bs3 w-[100%]">
              <Row className="bg-white_A700 items-center justify-between outline outline-[0.5px] outline-gray_700_7f lg:p-[19px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] w-[100%]">
                <Row className="items-center justify-center lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[24%]">
                  <Img
                    src="images/img_notification.svg"
                    className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    alt="notification"
                  />
                  <Text className="availability" variant="body2">
                    Sofa Bed{" "}
                  </Text>
                </Row>
                <Stack className="bg-white_A700 lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:mr-[11px] xl:mr-[14px] 2xl:mr-[16px] 3xl:mr-[19px] outline outline-[0.5px] outline-black_900 xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[26%]">
                  <Img
                    src="images/img_button.svg"
                    className="button"
                    alt="button"
                  />
                  <Text className="One" variant="body2">
                    1
                  </Text>
                </Stack>
              </Row>
            </Column>
            <Line className="bg-gray_700_33 h-[0.5px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]" />
            <Row className="items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
              <Button
                className="flex items-center justify-center text-center w-[25%]"
                onClick={handleNavigate39}
                leftIcon={
                  <Img
                    src="images/img_arrowleft_14X7.svg"
                    className="text-center lg:w-[4px] lg:mr-[4px] xl:w-[6px] xl:mr-[6px] 2xl:w-[7px] 2xl:mr-[7px] 3xl:w-[8px] 3xl:mr-[8px]"
                    alt="arrow_left"
                  />
                }
                size="xl"
                variant="OutlineLightblue800"
              >
                <div className="common-pointer bg-transparent font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                  Cancel
                </div>
              </Button>
              <Button
                className="common-pointer font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[72%]"
                onClick={handleNavigate23}
                size="xl"
                variant="OutlineLightblue8001_2"
              >
                Save
              </Button>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default PropertyDetailsLivingRoomPage;
